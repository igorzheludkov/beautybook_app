import React from 'react'
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form'
import { Text, View } from 'react-native'
import TextInputCustom from '../../../../components/atoms/TextInputCustom'
import { IProfileForm } from '../../../../models/IProfileForm'
import styles from '../styles'
import { TextInput } from 'react-native-paper'

interface ProfileFormProps {
  control: Control<FieldValues>
  data: IProfileForm | undefined
  errors: FieldErrors<IProfileForm>
}

export default function ProfileForm({ control, data, errors }: ProfileFormProps) {
  return (
    <View style={styles.profileForm}>
      <Controller
        control={control}
        name='name'
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom onChangeText={onChange} value={value} label='Ваше імʼя' />
        )}
      />
      {errors.name && <Text>This field is required.</Text>}
      <Controller
        control={control}
        name='phone'
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom onChangeText={onChange} value={value} placeholder='+380' label='Телефон' />
        )}
      />
      {errors.phone && <Text>This field is required.</Text>}
      <Controller
        control={control}
        name='street'
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom onChangeText={onChange} value={value} label='Вулиця' />
        )}
      />
      {errors.street && <Text>This field is required.</Text>}
      <Controller
        control={control}
        name='aboutMe'
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            multiline
            onChangeText={onChange}
            value={value}
            label='Одним реченням про себе'
          />
        )}
      />
      <Controller
        control={control}
        name='description'
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            multiline
            onChangeText={onChange}
            value={value}
            label='Поле для інформації: режим роботи, орієнтири та іншої інформації. Можна ввести багато тексту.'
          />
        )}
      />
      <Controller
        control={control}
        name='instagram'
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            multiline
            onChangeText={onChange}
            value={value}
            label='Лінк на профіль в Instagram'
          />
        )}
      />
      <Controller
        control={control}
        name='telegram'
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            multiline
            onChangeText={onChange}
            value={value}
            label='Лінк на профіль в Telegram'
          />
        )}
      />
      <Controller
        control={control}
        name='facebook'
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            multiline
            onChangeText={onChange}
            value={value}
            label='Лінк на профіль в Facebook'
          />
        )}
      />
      <Controller
        control={control}
        name='tiktok'
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            multiline
            onChangeText={onChange}
            value={value}
            label='Лінк на профіль в TikTok'
          />
        )}
      />
    </View>
  )
}
