import React from 'react'
import { TextInput, Text, StyleSheet, Platform } from 'react-native'
import colors from '../../constants/colors'

interface IProps {
  value: string
  placeholder?: string
  onChangeText: () => void
  style?: any
  label?: string
  secureTextEntry?: boolean
  [key: string]: any
}

export default function TextInputCustom({ style, label, ...props }: IProps) {
  const styles = getStyles(props)

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={[styles.input, style]} {...props} />
    </>
  )
}

function getStyles(params: any) {
  return StyleSheet.create({
    input: {
      minHeight: 43,
      width: '100%',
      borderWidth: 1,
      borderColor: 'white',
      borderBottomColor: colors.textInputBorder,
      color: colors.palette.black,
      paddingHorizontal: 10,
      fontSize: 16,
      textAlignVertical: 'center',
      ...(Platform.OS === 'ios' && params?.multiline && { paddingTop: 10, paddingBottom: 10 })
    },
    label: {
      marginTop: 25
    }
  })
}
