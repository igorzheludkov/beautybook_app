import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../../../config/colors'
import AdminHeader from '../../../atoms/AdminHeader'
import { ProfileStackTypes } from '../../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { logout } from '../../../../store/modules/auth/thunks'
import { useAppDispatch } from '../../../../store/hooks'
import { IProfileForm } from '../../../../models/IProfileForm'
import { ActivityIndicator, Button } from 'react-native-paper'
import useImagePicker from '../../../../hooks/useImagesPicker'
import {
  useGetPhotosQuery,
  useRemovePhotoMutation,
  useUploadPhotosMutation
} from '../../../../store/modules/api/photoGallery/photoGallerySlice'
import { useProfileDataQuery } from '../../../../store/modules/api/userData/userDataSlice'
import PhotoGallery from '../../../blocks/PhotoGallery'

export default function PhotoGalleryScreen() {
  const dispatch = useAppDispatch()
  const { data: userData, isLoading: userDataLoading } = useProfileDataQuery({})

  if (userDataLoading) return <ActivityIndicator />

  const { data: photos } = useGetPhotosQuery({ userId: userData?.id, page: 0 })
  const [images, handlePickImageFromCamera, handlePickImagesFromGallery, resetState] = useImagePicker()
  const [uploadPhotos, { isLoading, error, isSuccess }] = useUploadPhotosMutation()
  const [removePhoto, { isLoading: isRemoving, error: removeError, isSuccess: removeSuccess }] =
    useRemovePhotoMutation()

  useEffect(() => {
    if (images?.length) {
      uploadPhotos({ image: images })
      resetState()
    }
  }, [images])

  return (
    <View style={styles.wrapper}>
      <Button onPress={() => handlePickImagesFromGallery(1)}>Додати фото</Button>
      <PhotoGallery data={photos || []} onRemove={(id) => removePhoto({ photoId: id })} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
