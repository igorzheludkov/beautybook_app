import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { AuthState } from '../auth/slice'

import { IProfileForm } from '../../../models/IProfileForm'
import { IAvatar, IQuery } from './types'
import getLatestAvatar from './firebaseFunctions/getLatestAvatar'
import masterDataApi from '../api/masterData/masterDataSlice'

const collectionName = 'users'

export const userSliceApi = createApi({
  reducerPath: 'userSliceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'fake' }),
  tagTypes: ['personalData'],
  endpoints: (builder) => ({
    profileData: builder.query({
      providesTags: ['personalData'],
      // refetch data for another api slice
      onQueryStarted: (args, { dispatch }) => {
        dispatch(masterDataApi.util.invalidateTags(['masterData']))
      },
      queryFn: async ({}, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }

        const data = await firestore().collection(collectionName).doc(authSlice.user?.uid).get()

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
        const profileRef = firestore().collection(collectionName).doc(authSlice.user?.uid)

        if (data) {
          try {
            const isProfileExist = (await profileRef.get()).exists
            if (isProfileExist) {
              await profileRef.update({ ...data, id: authSlice.user?.uid })
            } else {
              await profileRef.set({ ...data, id: authSlice.user?.uid })
            }

            return { data: 'profile updated' }
          } catch (error: any) {
            return { error: { data: error.message, status: 500 } }
          }
        } else {
          return { error: { data: 'update failed', status: 400 } }
        }
      }
    }),
    updateAvatar: builder.mutation({
      invalidatesTags: ['personalData'],
      queryFn: async ({ image }: IAvatar, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }
        const profileRef = firestore().collection(collectionName).doc(authSlice.user?.uid)

        if (image && image[0]?.uri) {
          const avatarRef = storage().ref(
            `user/${authSlice.user?.uid}/avatar.${image[0].type?.split('/')[1]}`
          )
          try {
            await avatarRef.putFile(image[0].uri as string).then((task) => task.state)

            const getAvatar = await getLatestAvatar(authSlice.user?.uid || '')

            const isProfileExist = (await profileRef.get()).exists

            if (isProfileExist) {
              await profileRef.update({ avatar: getAvatar })
            } else {
              await profileRef.set({ avatar: getAvatar })
            }

            return { data: 'awatar uploaded' }
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

export default userSliceApi

export const { useProfileDataQuery, useUpdateProfileDataMutation, useUpdateAvatarMutation } = userSliceApi
