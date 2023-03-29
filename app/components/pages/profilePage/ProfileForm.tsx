import React, { useEffect, useState, useMemo } from 'react'
import { View, Text, Button, ActivityIndicator, Image, ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { Snackbar, Avatar } from 'react-native-paper'
import { logout } from '../../../store/modules/auth/thunks'

import styles from './styles'
import { IProfileForm } from '../../../models/IProfileForm'
import InputCustom from '../../atoms/TextInputCustom'
import {
  useProfileDataQuery,
  useUpdateProfileDataMutation,
  useUpdateAvatarMutation
} from '../../../store/modules/api/userData/userDataSlice'

import { useGetServiceCategoriesQuery } from '../../../store/modules/api/servicesCategories/servicesCategoriesSlice'

import useImagePicker from '../../../hooks/useImagesPicker'
import AdminHeader from '../../atoms/AdminHeader'
import { useAppDispatch } from '../../../store/hooks'
import CheckboxesGroup from '../../blocks/CheckboxesGroup'

export default function ProfileForm() {
  const dispatch = useAppDispatch()
  const [snackToggle, setSnackToggle] = useState(false)

  const { data, error, isLoading, refetch: fetchProfile } = useProfileDataQuery({})
  const { data: categoryData } = useGetServiceCategoriesQuery({})

  const [updateProfileData, { isLoading: isLoadingUpdate, error: updateError, isSuccess: isProfileUpdated }] =
    useUpdateProfileDataMutation()
  const [updateAvatar, { isLoading: isAvatarUpdate, error: avatarError, isSuccess: isAvatarUpdated }] =
    useUpdateAvatarMutation()

  const [images, handlePickImageFromCamera, handlePickImagesFromGallery] = useImagePicker()

  const [categoriesCheck, setCategoriesCheck] = useState<{ skills: string[] }>()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IProfileForm>()

  function onSubmit(form: IProfileForm) {
    console.log('form ', form)
    updateProfileData({ data: { ...form, skills: categoriesCheck?.skills || data?.skills || [] } })
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
    <ScrollView>
      <View style={styles.container}>
        <AdminHeader
          title='Profile'
          rightTitle={isLoadingUpdate ? 'Saving ...' : 'Save'}
          onPressRight={handleSubmit(onSubmit)}
          leftTitle='Logout'
          onPressLeft={() => dispatch(logout())}
        />
        <Avatar.Image size={150} source={{ uri: data?.avatar }} />
        <Button title='Select avatar' onPress={() => handlePickImagesFromGallery(1)} />
        <Controller
          control={control}
          name='name'
          rules={{ required: false }}
          defaultValue={data?.name || ''}
          render={({ field: { onChange, value } }) => (
            <InputCustom onChangeText={onChange} value={value} placeholder='Your name' />
          )}
        />
        {errors.name && <Text>This field is required.</Text>}
        <Controller
          control={control}
          name='phone'
          rules={{ required: false }}
          defaultValue={data?.phone || ''}
          render={({ field: { onChange, value } }) => (
            <InputCustom onChangeText={onChange} value={value} placeholder='+380' />
          )}
        />
        {errors.phone && <Text>This field is required.</Text>}
        <Controller
          control={control}
          name='city'
          rules={{ required: false }}
          defaultValue={data?.city || ''}
          render={({ field: { onChange, value } }) => (
            <InputCustom onChangeText={onChange} value={value} placeholder='City' />
          )}
        />
        {errors.city && <Text>This field is required.</Text>}
        <Controller
          control={control}
          name='street'
          rules={{ required: false }}
          defaultValue={data?.street || ''}
          render={({ field: { onChange, value } }) => (
            <InputCustom onChangeText={onChange} value={value} placeholder='Street' />
          )}
        />
        {errors.street && <Text>This field is required.</Text>}
        <Controller
          control={control}
          name='aboutMe'
          rules={{ required: false }}
          defaultValue={data?.aboutMe || ''}
          render={({ field: { onChange, value } }) => (
            <InputCustom onChangeText={onChange} value={value} placeholder='Кілька слів про себе' />
          )}
        />
        {errors.aboutMe && <Text>This field is required.</Text>}
        <Text style={styles.skillsTitle}>Виділіть ваші спеціальності</Text>
        <ScrollView horizontal>
          <CheckboxesGroup
            data={categoryData}
            onCheckedChange={setCategoriesCheck}
            checkedItems={data?.skills || []}
          />
        </ScrollView>
        <Snackbar
          visible={snackToggle}
          onDismiss={() => {}}
          action={{
            label: '',
            onPress: () => {
              // Do something
            }
          }}
        >
          Successefully saved
        </Snackbar>
      </View>
    </ScrollView>
  )
}
