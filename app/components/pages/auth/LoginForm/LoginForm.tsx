import React from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useAppDispatch } from '../../../../store/hooks'
import { actions as authActions } from '../../../../store/modules/auth/slice'
import { login } from '../../../../store/modules/auth/thunks'

import styles from './styles'
import { ILoginForm } from './types'
import InputCustom from '../../../atoms/TextInputCustom'
import AdminHeader from '../../../atoms/AdminHeader'
import { useAppSelector } from '../../../../store/hooks'

export default function LoginForm() {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.authSlice.isLoggingIn)
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>()

  const onSubmit = (data: ILoginForm) => {
    console.log(data)
    dispatch(login(data))
  }
  return (
    <View style={styles.container}>
      <AdminHeader
        title='Login'
        rightTitle='Sign up'
        onPressRight={() => dispatch(authActions.isNewUser(true))}
        leftTitle='X'
        onPressLeft={() => {}}
      />
      <Controller
        control={control}
        name='email'
        rules={{ required: true }}
        defaultValue='500griven@gmail.com'
        render={({ field: { onChange, value } }) => (
          <InputCustom onChangeText={onChange} value={value} placeholder='Email' />
        )}
      />
      {errors.email && <Text>This field is required.</Text>}

      <Controller
        control={control}
        name='password'
        rules={{ required: true }}
        defaultValue='energystar'
        render={({ field: { onChange, value } }) => (
          <InputCustom onChangeText={onChange} value={value} placeholder='Password' secureTextEntry={true} />
        )}
      />
      {errors.password && <Text>This field is required.</Text>}
      <View style={styles.buttonContainer}>
        {isLoading ? <ActivityIndicator /> : <Button title='Login' onPress={handleSubmit(onSubmit)} />}
      </View>
    </View>
  )
}
