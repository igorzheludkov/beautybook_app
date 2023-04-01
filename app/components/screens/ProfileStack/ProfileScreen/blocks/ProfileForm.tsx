import React from 'react'
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form'
import { Text } from 'react-native'
import TextInputCustom from '../../../../atoms/TextInputCustom'
import { IProfileForm } from '../../../../../models/IProfileForm'

export default function ProfileForm({ control, data, errors }: ProfileFormProps) {
  return (
    <>
      <Controller
        control={control}
        name='name'
        rules={{ required: false }}
        defaultValue={data?.name || ''}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom onChangeText={onChange} value={value} placeholder='Your name' />
        )}
      />
      {errors.name && <Text>This field is required.</Text>}
      <Controller
        control={control}
        name='phone'
        rules={{ required: false }}
        defaultValue={data?.phone || ''}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom onChangeText={onChange} value={value} placeholder='+380' />
        )}
      />
      {errors.phone && <Text>This field is required.</Text>}
      <Controller
        control={control}
        name='city'
        rules={{ required: false }}
        defaultValue={data?.city || ''}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom onChangeText={onChange} value={value} placeholder='City' />
        )}
      />
      {errors.city && <Text>This field is required.</Text>}
      <Controller
        control={control}
        name='street'
        rules={{ required: false }}
        defaultValue={data?.street || ''}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom onChangeText={onChange} value={value} placeholder='Street' />
        )}
      />
      {errors.street && <Text>This field is required.</Text>}
      <Controller
        control={control}
        name='aboutMe'
        rules={{ required: false }}
        defaultValue={data?.aboutMe || ''}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom onChangeText={onChange} value={value} placeholder='Кілька слів про себе' />
        )}
      />
      {errors.aboutMe && <Text>This field is required.</Text>}
    </>
  )
}

interface ProfileFormProps {
  control: Control<FieldValues>
  data: IProfileForm | undefined
  errors: {
    name?: { message: string }
    phone?: { message: string }
    city?: { message: string }
    street?: { message: string }
    aboutMe?: { message: string }
  } & FieldErrors<FieldValues>
}
