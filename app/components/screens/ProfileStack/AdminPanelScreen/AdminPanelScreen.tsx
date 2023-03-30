import React from 'react'
import { View, ActivityIndicator, SafeAreaView, Pressable, StyleSheet } from 'react-native'
import { useProfileDataQuery } from '../../../../store/modules/api/userData/userDataSlice'
import { logout } from '../../../../store/modules/auth/thunks'
import { useAppDispatch } from '../../../../store/hooks'
import AdminHeader from '../../../atoms/AdminHeader'
import NewUserBlock from './blocks/NewUserBlock'
import AdminPanelPage from '../../../pages/adminPage/AdminPanelPage'
import colors from '../../../../config/colors'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ProfileStackTypes } from '../../../../models/INavigationStack'

type Props = NativeStackScreenProps<ProfileStackTypes, 'AdminPaneScreen'>

export default function AdminPanelScreen({ navigation }: Props) {
  const dispatch = useAppDispatch()
  const { data, error, isLoading, refetch: fetchProfile } = useProfileDataQuery({})
  
  if (isLoading)
    return (
      <View style={{ justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    )

  if (!data) {
    navigation.navigate('ProfileScreen')
    return (
      <View style={styles.wrapper}>
        <SafeAreaView />
        <AdminHeader
          title='Admin panel'
          rightTitle='Edit profile'
          onPressRight={() => navigation.navigate('ProfileScreen')}
          leftTitle='Logout'
          onPressLeft={() => dispatch(logout())}
        />
        <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
          <NewUserBlock />
        </Pressable>
      </View>
    )
  }



  return (
    <View style={styles.wrapper}>
      <SafeAreaView />
      <AdminPanelPage data={data} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.defaultContainerColor
  }
})
