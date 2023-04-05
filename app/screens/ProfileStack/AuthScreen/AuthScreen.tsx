import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SignUpForm from './components/SignUpForm/SignUpForm'
import LoginForm from './components/LoginForm/LoginForm'
import { useAppSelector } from '../../../store/hooks'
import colors from '../../../constants/colors'

export default function AuthScreen() {
  const isNewUser = useAppSelector((state) => state.authSlice.isNewUser)
  return <View style={style.wrapper}>{isNewUser ? <SignUpForm /> : <LoginForm />}</View>
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.defaultContainerColor
  }
})
