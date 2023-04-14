import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useForm } from 'react-hook-form'
import { Snackbar, Avatar, FAB, Button } from 'react-native-paper'

import styles from './styles'
import {
  useProfileDataQuery,
  useUpdateProfileDataMutation,
  useUpdateAvatarMutation
} from '../../../store/modules/user/userSlice'

import {
  useGetCitiesQuery,
  useGetServiceCategoriesQuery
} from '../../../store/modules/api/filterCategories/filterCategoriesSlice'

import useImagePicker from '../../../hooks/useImagesPicker'
import ProfileCategoriesSelector from './blocks/ProfileCategoriesSelector'
import { ProfileStackTypes } from '../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ProfileForm from './blocks/ProfileForm'
import CitySelector from './blocks/CitiesSelector'
import { IProfileForm } from '../../../models/IProfileForm'
import { ISkillsItem } from '../../../models/IProfileForm'
import definedValuesFilter from '../../../utils/definedValuesFilter'

type Props = NativeStackScreenProps<ProfileStackTypes, 'ProfileScreen'>

export default function ProfileScreen({ navigation }: Props) {
  const [snackToggle, setSnackToggle] = useState(false)

  const { data, error, isLoading, refetch: fetchProfile } = useProfileDataQuery({})
  const { data: categoryData } = useGetServiceCategoriesQuery({})
  const { data: categoryCities } = useGetCitiesQuery({})

  const [updateProfileData, { isLoading: isLoadingUpdate, error: updateError, isSuccess: isProfileUpdated }] =
    useUpdateProfileDataMutation()
  const [updateAvatar, { isLoading: isAvatarUpdate, error: avatarError, isSuccess: isAvatarUpdated }] =
    useUpdateAvatarMutation()

  const [images, handlePickImageFromCamera, handlePickImagesFromGallery] = useImagePicker()

  const [skillsProfile, setSkillsProfile] = useState<ISkillsItem[] | []>([])

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty }
  } = useForm({ defaultValues: data })

  function onSubmit(form: any) {
    const notEmtyFields: IProfileForm = definedValuesFilter(form)

    updateProfileData({ data: { ...notEmtyFields, skills: skillsProfile || data?.skills || [] } })
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

  if (isLoading) return <ActivityIndicator />

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.avatarWrapper}>
            <Avatar.Image size={150} source={{ uri: data?.avatar }} />
          </View>
          <View style={styles.buttonsBlock}>
            <Button icon='camera' mode='outlined' onPress={() => handlePickImagesFromGallery(1)}>
              Змінити аватар
            </Button>
            <CitySelector
              data={categoryCities || []}
              onPress={(i) => {
                updateProfileData({ data: { city: i } || {} })
              }}
              checkedItems={data?.city}
            />
          </View>
          <Button onPress={() => navigation.navigate('MasterScreen', { masterId: data?.id })}>
            Переглянути заповнену сторінку
          </Button>
          <ProfileForm control={control} data={data} errors={errors} />
          <Text style={styles.skillsTitle}>Виділіть ваші навики</Text>
          <Text style={styles.skillsSubTitle}>
            Виділіть галочкою ваші професійні вміння. Кожен виділений навик стане доступним для пошуку в
            загальному каталозі у відповідному розділі.
          </Text>
          <ProfileCategoriesSelector
            data={categoryData}
            onCheckedChange={setSkillsProfile}
            checkedItems={data?.skills || []}
          />
        </View>
      </ScrollView>

      {/* Кнопка не реагує на внесення змін до розділу навиків */}
      {/* {isDirty && ( */}
      <FAB
        animated
        loading={isLoadingUpdate}
        style={styles.fab}
        icon='content-save-outline'
        onPress={handleSubmit(onSubmit)}
      />
      {/* )} */}
      <Snackbar visible={snackToggle} onDismiss={() => {}}>
        Successefully saved
      </Snackbar>
    </>
  )
}
