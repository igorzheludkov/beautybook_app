import React from 'react'
import { View, StyleSheet } from 'react-native'
import SignUpForm from './components/SignUpForm/SignUpForm'
import LoginForm from './components/LoginForm/LoginForm'
import { useAppSelector } from '../../../store/hooks'
import colors from '../../../constants/colors'
import Divider from '../../../components/atoms/Divider'
import TermsAndConditions from './components/blocks/TermsAndConds'

export default function AuthScreen() {
  const isNewUser = useAppSelector((state) => state.authSlice.isNewUser)

  return (
    <View style={styles.wrapper}>
      {isNewUser ? <SignUpForm /> : <LoginForm />}
      <TermsAndConditions />
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
