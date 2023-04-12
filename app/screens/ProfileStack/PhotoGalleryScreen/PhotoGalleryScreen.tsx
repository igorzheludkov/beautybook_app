import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useAppDispatch } from '../../../store/hooks'
import { ActivityIndicator, Button, FAB } from 'react-native-paper'
import useImagePicker from '../../../hooks/useImagesPicker'
import {
  useGetPhotosQuery,
  useRemovePhotoMutation,
  useUploadPhotosMutation
} from '../../../store/modules/api/photoGallery/photoGallerySlice'
import { useProfileDataQuery } from '../../../store/modules/api/userData/userDataSlice'
import PhotoGallery from './components/PhotoGallery'

export default function PhotoGalleryScreen() {
  const dispatch = useAppDispatch()
  const { data: userData, isLoading: userDataLoading } = useProfileDataQuery({})

  if (!userData) return <ActivityIndicator />

  const { data: photos } = useGetPhotosQuery({
    userId: userData?.id,
    page: 0,
    rootFolder: 'user',
    groupFolder: 'gallery',
    itemFolder: ''
  })
  const [images, handlePickImageFromCamera, handlePickImagesFromGallery, resetState] = useImagePicker()
  const [uploadPhotos, { isLoading, error, isSuccess }] = useUploadPhotosMutation()
  const [removePhoto, { isLoading: isRemoving, error: removeError, isSuccess: removeSuccess }] =
    useRemovePhotoMutation()

  useEffect(() => {
    if (images?.length) {
      uploadPhotos({
        userId: userData?.id,
        images,
        rootFolder: 'user',
        groupFolder: 'gallery',
        itemFolder: ''
      })
      resetState()
    }
  }, [images])

  return (
    <View style={styles.wrapper}>
      <PhotoGallery
        data={photos || []}
        onRemove={(id) =>
          removePhoto({
            userId: userData?.id,
            photoId: id,
            rootFolder: 'user',
            groupFolder: 'gallery',
            itemFolder: ''
          })
        }
      />
      <FAB icon='plus' style={styles.fab} onPress={() => handlePickImagesFromGallery(1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
})
