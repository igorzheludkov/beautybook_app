import React from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { StyleSheet, Text, View } from 'react-native'
import TextInputCustom from '../../../../../../../components/atoms/TextInputCustom'
import colors from '../../../../../../../constants/colors'
import { IUserServiceData } from '../../../../../../../models/IGoodsAndService'

interface Props {
  control: Control<IUserServiceData>
  errors: FieldErrors<IUserServiceData>
}

export default function Form({ control, errors }: Props) {
  return (
    <View style={styles.wrapper}>
      <Controller
        control={control}
        name='title'
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            containerStyle={styles.title}
            onChangeText={onChange}
            value={value}
            label='Назва послуги'
            errorText={errors.title ? 'Це поле має бути заповненим' : ''}
          />
        )}
      />
      <View style={styles.containerFirst}>
        <Controller
          control={control}
          name='price'
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <TextInputCustom
              containerStyle={styles.price}
              onChangeText={onChange}
              value={value}
              label='Ціна'
              placeholder='грн'
              errorText={errors.price ? 'Це поле має бути заповненим' : ''}
            />
          )}
        />
        <Controller
          control={control}
          name='duration'
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <TextInputCustom
              containerStyle={styles.duration}
              onChangeText={onChange}
              value={value}
              label='Тривалість'
              placeholder='хв'
              errorText={errors.duration ? 'Це поле має бути заповненим' : ''}
            />
          )}
        />
      </View>
      <Controller
        control={control}
        name='description'
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            multiline
            containerStyle={styles.description}
            onChangeText={onChange}
            value={value}
            label='Опис послуги'
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.defaultContainerColor,
    marginBottom: 20
  },
  containerFirst: { flexDirection: 'row', justifyContent: 'space-between' },
  title: {},
  price: { width: '49%' },
  duration: { width: '49%' },
  description: {}
})
