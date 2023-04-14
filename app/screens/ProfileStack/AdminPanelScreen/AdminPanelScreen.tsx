import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import HeaderBlock from './blocks/HeaderBlock'
import { ProfileStackTypes } from '../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { IProfileForm } from '../../../models/IProfileForm'
import NavMenuItem from './blocks/NavMenuItem'
import PhotoGallery from '../../../assets/icons/PhotoGalleryIcon'
import { useUpdateCitiesMutation } from '../../../store/modules/api/filterCategories/filterCategoriesSlice'

import { Button } from 'react-native-paper'
import { cities } from '../../../store/modules/api/filterCategories/cities'
import ServicesIcon from '../../../assets/icons/ServicesIcon'
import FeedbackIcon from '../../../assets/icons/FeedbackIcon'
import ExperienceIcon from '../../../assets/icons/ExperienceIcon'
import Hightlight from './blocks/Highlight'
import {
  useProfileDataQuery,
  useUpdateProfileDataMutation
} from '../../../store/modules/user/userSlice'
import definedValuesFilter from '../../../utils/definedValuesFilter'
import { useNavigation } from '@react-navigation/native'

type NavProps = NativeStackScreenProps<ProfileStackTypes, 'AdminPaneScreen'>

interface Props {
  data: IProfileForm
  navigation: NavProps['navigation']
}

export default function AdminPanelMain({ data, navigation }: Props) {
  const { data: userData, isLoading: userDataLoading } = useProfileDataQuery({})
  const [updateCities] = useUpdateCitiesMutation()
  const [updateProfileData, { isLoading: isLoadingUpdate, error: updateError, isSuccess: isProfileUpdated }] =
    useUpdateProfileDataMutation()

  function onUpdateProfile(data: IProfileForm) {
    const notEmtyFields: IProfileForm = definedValuesFilter(data)
    updateProfileData({ data: { highlight: notEmtyFields } })
  }

  return (
    <ScrollView style={styles.wrapper}>
      <HeaderBlock data={data} />
      <Button onPress={() => navigation.navigate('MasterScreen', { masterId: userData?.id })}>
        Переглянути заповнену сторінку
      </Button>
      <View style={{ height: 20 }} />
      <Hightlight
        values={userData?.highlight}
        onUpdateHighlight={onUpdateProfile}
        isLoadingUpdate={isLoadingUpdate}
      />
      <View style={{ height: 20 }} />

      <NavMenuItem
        icon={<PhotoGallery />}
        name='Фотогалерея'
        onPress={() => navigation.navigate('PhotoGalleryScreen')}
      />
      <View style={{ height: 10 }} />
      <NavMenuItem
        icon={<ServicesIcon />}
        name='Послуги'
        onPress={() => navigation.navigate('ServicesScreen')}
      />
      <View style={{ height: 10 }} />
      <NavMenuItem
        icon={<FeedbackIcon />}
        name='Відгуки'
        onPress={() => navigation.navigate('FeedbackScreen')}
      />
      <View style={{ height: 10 }} />
      <NavMenuItem
        icon={<ExperienceIcon />}
        name='Досвід та сертифікати'
        onPress={() => navigation.navigate('ExperienceScreen')}
      />
      <Button onPress={() => updateCities({ data: cities })}>Update cities</Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
