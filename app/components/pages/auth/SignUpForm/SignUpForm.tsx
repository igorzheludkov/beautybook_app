import React from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { actions as authActions } from '../../../../store/modules/auth/slice'
import { signUp } from '../../../../store/modules/auth/thunks'

import styles from './styles'
import { ISignUpForm } from './types'
import InputCustom from '../../../atoms/TextInputCustom'
import AdminHeader from '../../../atoms/AdminHeader'

export default function SignUpForm() {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.authSlice.isLoggingIn)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ISignUpForm>()

  const onSubmit = (data: ISignUpForm) => {
    console.log(data)
    dispatch(signUp(data))
  }
  return (
    <View style={styles.container}>
      <AdminHeader
        title='Sing up'
        rightTitle='Login'
        onPressRight={() => dispatch(authActions.isNewUser(false))}
        leftTitle='X'
        onPressLeft={() => {}}
      />
      <Controller
        control={control}
        name='email'
        rules={{ required: true }}
        defaultValue=''
        render={({ field: { onChange, value } }) => (
          <InputCustom onChangeText={onChange} value={value} placeholder='Email' />
        )}
      />
      {errors.email && <Text>This field is required.</Text>}
      <Controller
        control={control}
        name='password'
        rules={{ required: true }}
        defaultValue=''
        render={({ field: { onChange, value } }) => (
          <InputCustom onChangeText={onChange} value={value} placeholder='Password' secureTextEntry={true} />
        )}
      />
      {errors.password && <Text>This field is required.</Text>}
      <View style={styles.buttonContainer}>
        {isLoading ? <ActivityIndicator /> : <Button title='Sign up' onPress={handleSubmit(onSubmit)} />}
      </View>
    </View>
  )
}
