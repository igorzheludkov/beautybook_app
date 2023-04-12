import apiSlice from '../apiSlice'

import storage from '@react-native-firebase/storage'

import { IGetPhotosQuery, IRemovePhotosQuery, IUploadPhotosQuery } from './types'
import getPhotoGallery from './firebaseFunctions/getPhotoGallery'

export const photoGalleryApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getPhotos: builder.query({
      providesTags: ['photoGallery'],
      queryFn: async (arg: IGetPhotosQuery) => {
        const photos = await getPhotoGallery(arg)
        if (photos) {
          return { data: photos }
        } else {
          return { error: { data: 'photos loading failed', status: 400 } }
        }
      }
    }),
    removePhoto: builder.mutation({
      invalidatesTags: ['photoGallery', ],
      queryFn: async (arg: IRemovePhotosQuery, thunkAPI) => {
        const removePhotosRef = storage().ref(
          arg.itemFolder
            ? `${arg.rootFolder}/${arg.userId}/${arg.groupFolder}/${arg.itemFolder}/${arg.photoId}`
            : `${arg.rootFolder}/${arg.userId}/${arg.groupFolder}/${arg.photoId}`
        )

        try {
          await removePhotosRef.delete()
          return { data: `photo id: ${arg.photoId} removed` }
        } catch (e: any) {
          return { error: { data: `photos removing failed, error ${e.message}`, status: 400 } }
        }
      }
    }),
    uploadPhotos: builder.mutation({
      invalidatesTags: ['photoGallery'],
      queryFn: async (arg: IUploadPhotosQuery, thunkAPI) => {
        if (arg.images && arg.images[0]?.uri) {
          try {
            async function upload(data: IUploadPhotosQuery): Promise<void> {
              const uploadPromises = data.images?.map((image) =>
                storage()
                  .ref(
                    `${data.rootFolder}/${data.userId}/${data.groupFolder}/${data.itemFolder}/${image.fileName}`
                  )
                  .putFile(image.uri as string)
                  .then((task) => console.log('~~~~~~~~~~~~~~ task.state', task.state))
              )

              return Promise.all(uploadPromises ?? []).then(() => {})
            }

            await upload(arg)

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
