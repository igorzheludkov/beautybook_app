import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import apiSlice from '../apiSlice'

import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { AuthState } from '../../auth/slice'

import { IProfileForm } from '../../../../models/IProfileForm'
import { IQuery, IUploadPhoto } from './types'
import getPhotoGallery from './firebaseFunctions/getPhotoGallery'

const folder = 'user'
const subFolder = 'gallery'

export const photoGalleryApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getPhotos: builder.query({
      providesTags: ['photoGallery'],
      queryFn: async ({ userId, page }) => {
        const getPhotos = await getPhotoGallery(userId || '', page, folder, subFolder)

        if (getPhotos?.length) {
          return { data: getPhotos }
        } else {
          return { error: { data: 'photos loading failed', status: 400 } }
        }
      }
    }),
    removePhoto: builder.mutation({
      invalidatesTags: ['photoGallery'],
      queryFn: async ({ photoId }, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }

        const removePhotosRef = storage().ref(`${folder}/${authSlice.user?.uid}/${subFolder}/${photoId}`)

        try {
          await removePhotosRef.delete()
          return { data: `photo id: ${photoId} removed` }
        } catch (e: any) {
          return { error: { data: `photos removing failed, error ${e.message}`, status: 400 } }
        }
      }
    }),
    uploadPhotos: builder.mutation({
      invalidatesTags: ['photoGallery'],
      queryFn: async ({ image }: IUploadPhoto, thunkAPI) => {
        const { authSlice } = thunkAPI.getState() as { authSlice: AuthState }
        // const photoRef = firestore().collection(collectionName).doc(authSlice.user?.uid)

        if (image && image[0]?.uri) {
          const avatarRef = storage().ref(`user/${authSlice.user?.uid}/gallery/${image[0].fileName}`)
          try {
            await avatarRef
              .putFile(image[0].uri as string)
              .then((task) => console.log('~~~~~~~~~~~~~~ task.state', task.state))

            return { data: 'photo uploaded' }
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

export default photoGalleryApi

export const { useGetPhotosQuery, useUploadPhotosMutation, useRemovePhotoMutation } = photoGalleryApi
