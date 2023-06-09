import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { ActivityIndicator, Button, FAB } from 'react-native-paper'
import useImagePicker from '../../../hooks/useImagesPicker'
import {
  useGetPhotosQuery,
  useRemovePhotoMutation,
  useUploadPhotosMutation
} from '../../../store/modules/api/photoGallery/photoGallerySlice'
import { useProfileDataQuery, useUpdateProfileDataMutation } from '../../../store/modules/user/userSlice'
import PhotoGallery from './components/PhotoGallery'
import definedValuesFilter from '../../../utils/definedValuesFilter'
import { IProfileForm } from '../../../models/IProfileForm'

export default function PhotoGalleryScreen() {
  const rootFolder = 'user'
  const groupFolder = 'gallery'
  const itemFolder = ''

  const { data: userData, isLoading: userDataLoading } = useProfileDataQuery({})
  const [updateProfileData, { isLoading: isLoadingUpdate, error: updateError, isSuccess: isProfileUpdated }] =
  useUpdateProfileDataMutation()

  if (!userData) return <ActivityIndicator />

  const { data: photos } = useGetPhotosQuery({
    userId: userData?.id,
    page: 0,
    rootFolder,
    groupFolder,
    itemFolder,
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
        rootFolder,
        groupFolder,
        itemFolder,
      })
      resetState()
    }
  }, [images])

  useEffect(() => {
    photos && onUpdateProfile({ galleryPhotos: photos })
  }, [photos?.length])

  function onUpdateProfile(data: IProfileForm) {
    const notEmtyFields: IProfileForm = definedValuesFilter(data)
    updateProfileData({ data: notEmtyFields })
  }

  return (
    <View style={styles.wrapper}>
      <PhotoGallery
        data={userData.galleryPhotos || []}
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
