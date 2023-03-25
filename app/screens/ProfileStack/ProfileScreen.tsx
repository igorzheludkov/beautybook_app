import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import colors from '../../config/colors'
import ProfileForm from '../../features/adminPage/ProfilePage/ProfileForm'

export default function ProfileScreen() {

  return (
    <View style={style.wrapper}>
      <ProfileForm />
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
