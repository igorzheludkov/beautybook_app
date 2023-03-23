import React, { useEffect, useState } from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import styles from './styles'
import { IProfileForm } from './types'
import InputCustom from '../../../components/ui/TextInputCustom'
import {
  useProfileDataQuery,
  useUpdateProfileDataMutation
} from '../../../store/modules/api/userData/userDataSlice'

export default function ProfileForm() {
  const { data, error, isLoading } = useProfileDataQuery({})

  const [updateProfileData, { isLoading: isLoadingUpdate, error: updateError, isSuccess }] =
    useUpdateProfileDataMutation()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IProfileForm>()

  const onSubmit = (form: IProfileForm) => {
    console.log(form)
    updateProfileData({ data: form })
  }

  if (isLoading) return <ActivityIndicator />

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name='name'
        rules={{ required: false }}
        defaultValue={data?.name}
        render={({ field: { onChange, value } }) => (
          <InputCustom onChangeText={onChange} value={value} placeholder='Your name' />
        )}
      />
      {errors.name && <Text>This field is required.</Text>}

      <Controller
        control={control}
        name='phone'
        rules={{ required: false }}
        defaultValue={data?.phone}
        render={({ field: { onChange, value } }) => (
          <InputCustom onChangeText={onChange} value={value} placeholder='+380' />
        )}
      />
      {errors.phone && <Text>This field is required.</Text>}
      <View style={styles.buttonContainer}>
        {isLoadingUpdate ? <ActivityIndicator /> : <Button title='Save' onPress={handleSubmit(onSubmit)} />}
      </View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  )
}
