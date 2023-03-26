import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import apiSlice from '../apiSlice'

import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { AuthState } from '../../auth/slice'

import { IProfileForm } from '../../../../models/IProfileForm'
import { IAvatar, IQuery } from './types'

const collectionName = 'users'
const currentUserSubcategory = 'profile'
const profileCategory = 'personalData'

export const userDataApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    profileData: builder.query({
      providesTags: ['personalData'],
      queryFn: async ({}, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }

        const data = await firestore()
          .collection(collectionName)
          .doc(authSlice.user?.uid)
          .get()

        if (data.exists) {
          return { data: data.data() as IProfileForm }
        } else {
          return { error: { data: 'document does not exist', status: 404 } as FetchBaseQueryError }
        }
      }
    }),

    updateProfileData: builder.mutation({
      invalidatesTags: ['personalData'],
      queryFn: async ({ data }: IQuery, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }

        if (data) {
          try {
            await firestore()
              .collection(collectionName)
              .doc(authSlice.user?.uid)
              .set(data)

            return { data: 'profile updated' }
          } catch (error: any) {
            return { error: { data: error.message, status: 500 } }
          }
        } else {
          return { error: { data: 'update failed', status: 400 } }
        }
      }
    }),
    getAvatar: builder.query({
      providesTags: ['avatar'],
      queryFn: async ({}, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }

        const toTimestamp = (time: string) => new Date(time).getTime()

        const avatarFolderRef = storage().ref(`user/${authSlice.user?.uid}/`)

        let photosArray: Array<{ url: string; timeUpdated: number }> = []

        await avatarFolderRef.list().then((item) => {
          const promises = item.items.map(async (el) => {
            const url = await el.getDownloadURL()
            return el.getMetadata().then((meta) => ({ url, timeUpdated: toTimestamp(meta.updated) }))
          })

          return Promise.all(promises).then((values) => {
            photosArray = values
          })
        })

        photosArray.sort((a, b) => b.timeUpdated - a.timeUpdated)

        if (photosArray.length) {
          return { data: photosArray[0].url }
        } else {
          return { error: { data: 'document does not exist', status: 404 } as FetchBaseQueryError }
        }
      }
    }),
    updateAvatar: builder.mutation({
      invalidatesTags: ['avatar'],
      queryFn: async ({ image }: IAvatar, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }

        if (image && image[0]?.uri) {
          const avatarRef = storage().ref(
            `user/${authSlice.user?.uid}/avatar.${image[0].type?.split('/')[1]}`
          )
          try {
            const uploadAvatar = async () =>
              await avatarRef.putFile(image[0].uri as string).then((task) => task.state)
            return { data: uploadAvatar() }
          } catch (error: any) {
            return { error: { data: error.message, status: 500 } }
          }
        } else {
          return { error: { data: 'update avatar failed', status: 400 } }
        }
      }
    })
  })
})

export default userDataApi

export const {
  useProfileDataQuery,
  useUpdateProfileDataMutation,
  useUpdateAvatarMutation,
  useGetAvatarQuery
} = userDataApi
