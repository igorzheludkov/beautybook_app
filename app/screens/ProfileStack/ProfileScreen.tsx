import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { logout } from '../../store/modules/auth/thunks'
import { useAppDispatch } from '../../store/hooks'
import colors from '../../config/colors'
import ProfileForm from '../../features/adminPage/ProfileForm/ProfileForm'
import userDataApi from '../../store/modules/api/userData/userDataSlice'

export default function ProfileScreen() {
  const dispatch = useAppDispatch()

  const onLogout = () => {
    dispatch(logout())
    // dispatch(userDataApi.util.resetApiState())
  }
  return (
    <View style={style.wrapper}>
      <Text>Profile Screen</Text>
      <ProfileForm />
      <Button title='LogOut' onPress={onLogout} />
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.defaultContainerColor
  }
})
