import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../../config/colors'
import HeaderBlock from './blocks/HeaderBlock'
import AdminHeader from '../../atoms/AdminHeader'
import { ProfileStackTypes } from '../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { logout } from '../../../store/modules/auth/thunks'
import { useAppDispatch } from '../../../store/hooks'
import { IProfileForm } from '../../../models/IProfileForm'

type NavProps = NativeStackScreenProps<ProfileStackTypes, 'AdminPaneScreen'>

interface Props {
  data: IProfileForm
  navigation: NavProps['navigation']
}

export default function AdminPanelPage({ data, navigation }: Props) {
  const dispatch = useAppDispatch()
  return (
    <View style={styles.wrapper}>
      <AdminHeader
        title='Admin panel'
        rightTitle='Edit profile'
        onPressRight={() => navigation.navigate('ProfileScreen')}
        leftTitle='Logout'
        onPressLeft={() => dispatch(logout())}
      />
      <HeaderBlock data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  }
})
