import React from 'react'
import { View, StyleSheet } from 'react-native'
import HeaderBlock from './blocks/HeaderBlock'
import { ProfileStackTypes } from '../../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { IProfileForm } from '../../../../models/IProfileForm'
import NavMenuItem from './blocks/NavMenuItem'
import PhotoGallery from '../../../../assets/icons/PhotoGalleryIcon'
import { useUpdateCitiesMutation } from '../../../../store/modules/api/filterCategories/filterCategoriesSlice'

import { Button } from 'react-native-paper'
import { cities } from '../../../../store/modules/api/filterCategories/cities'

type NavProps = NativeStackScreenProps<ProfileStackTypes, 'AdminPaneScreen'>

interface Props {
  data: IProfileForm
  navigation: NavProps['navigation']
}

export default function AdminPanelMain({ data, navigation }: Props) {
  const [updateCities] = useUpdateCitiesMutation()

  return (
    <View style={styles.wrapper}>
      <HeaderBlock data={data} />
      <View style={{ height: 20 }} />
      <NavMenuItem
        icon={<PhotoGallery />}
        name='Фотогалерея'
        onPress={() => navigation.navigate('PhotoGalleryScreen')}
      />
      <Button onPress={() => updateCities({ data: cities })}>Update cities</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
