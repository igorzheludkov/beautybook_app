import React, { useEffect, useState, useMemo } from 'react'
import { View, Text, Button, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native'
import { useForm } from 'react-hook-form'
import { Snackbar, Avatar, FAB } from 'react-native-paper'

import styles from './styles'
import {
  useProfileDataQuery,
  useUpdateProfileDataMutation,
  useUpdateAvatarMutation
} from '../../../store/modules/api/userData/userDataSlice'

import {
  useGetCitiesQuery,
  useGetServiceCategoriesQuery
} from '../../../store/modules/api/filterCategories/filterCategoriesSlice'

import useImagePicker from '../../../hooks/useImagesPicker'
import ProfileCategoriesSelector from './blocks/ProfileCategoriesSelector'
import { ProfileStackTypes } from '../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ProfileForm from './blocks/ProfileForm'
import CitySelector from './blocks/CitySelector'
import { CitiesDataTypes } from '../../../models/ICities'

type Props = NativeStackScreenProps<ProfileStackTypes, 'ProfileScreen'>

export default function ProfileScreen({ navigation }: Props) {
  const [snackToggle, setSnackToggle] = useState(false)

  const { data, error, isLoading, refetch: fetchProfile } = useProfileDataQuery({})
  const { data: categoryData } = useGetServiceCategoriesQuery({})
  const { data: categoryCities } = useGetCitiesQuery({})
  console.log('~~~~~~~~~~~~~~ data city ', data?.city)

  const [updateProfileData, { isLoading: isLoadingUpdate, error: updateError, isSuccess: isProfileUpdated }] =
    useUpdateProfileDataMutation()
  const [updateAvatar, { isLoading: isAvatarUpdate, error: avatarError, isSuccess: isAvatarUpdated }] =
    useUpdateAvatarMutation()

  const [images, handlePickImageFromCamera, handlePickImagesFromGallery] = useImagePicker()

  const [categoriesCheck, setCategoriesCheck] = useState<string[]>()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function onSubmit(form: any) {
    console.log('form ', form)
    updateProfileData({ data: { ...form, skills: categoriesCheck || data?.skills || [] } })
  }

  useEffect(() => {
    isProfileUpdated && snackToggle()
    function snackToggle() {
      setSnackToggle(true)
      setTimeout(() => {
        setSnackToggle(false)
      }, 1000)
    }
  }, [isProfileUpdated])

  useEffect(() => {
    images?.length && updateAvatar({ image: images })
  }, [images])

  useEffect(() => {
    fetchProfile()
  }, [])

  if (isLoading) return <ActivityIndicator />

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <SafeAreaView />
        <View style={styles.container}>
          <Avatar.Image size={150} source={{ uri: data?.avatar }} />
          <CitySelector
            data={categoryCities || []}
            onPress={(i) => {
              updateProfileData({ data: { city: i } || {} })
            }}
            checkedItems={data?.city}
          />
          <Button title='Вибрати аватар' onPress={() => handlePickImagesFromGallery(1)} />
          <ProfileForm control={control} data={data} errors={errors} />
          <Text style={styles.skillsTitle}>Виділіть ваші навики</Text>
          <ProfileCategoriesSelector
            data={categoryData}
            onCheckedChange={setCategoriesCheck}
            checkedItems={data?.skills || []}
          />
        </View>
      </ScrollView>
      <FAB icon='content-save-outline' style={styles.fab} onPress={handleSubmit(onSubmit)} />
      <Snackbar visible={snackToggle} onDismiss={() => {}}>
        Successefully saved
      </Snackbar>
    </>
  )
}
