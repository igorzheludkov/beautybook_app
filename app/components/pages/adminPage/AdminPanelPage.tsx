import React from 'react'
import { View, StyleSheet } from 'react-native'
import HeaderBlock from './blocks/HeaderBlock'
import { ProfileStackTypes } from '../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { IProfileForm } from '../../../models/IProfileForm'
import NavMenuItem from '../../blocks/NavMenuItem'
import PhotoGallery from '../../../assets/icons/PhotoGalleryIcon'

type NavProps = NativeStackScreenProps<ProfileStackTypes, 'AdminPaneScreen'>

interface Props {
  data: IProfileForm
  navigation: NavProps['navigation']
}

export default function AdminPanelPage({ data, navigation }: Props) {
  return (
    <View style={styles.wrapper}>
      <HeaderBlock data={data} />
      <View style={{ height: 20 }} />
      <NavMenuItem
        icon={<PhotoGallery />}
        name='Фотогалерея'
        onPress={() => navigation.navigate('PhotoGalleryScreen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
