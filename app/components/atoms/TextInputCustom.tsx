import React from 'react'
import { TextInput, Text, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

interface IProps {
  value: string
  placeholder: string
  onChangeText: () => void
  style?: any
  label?: string
  secureTextEntry?: boolean
  [key: string]: any
}

export default function TextInputCustom({ style, label, ...props }: IProps) {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={[styles.input, style]} {...props} />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 43,
    width: '100%',
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.textInputBorder,
    color: colors.palette.black,
    backgroundColor: colors.textInputBg,
    padding: 10,
    fontSize: 16
  },
  label: {
    margin: 5,
    fontWeight: 'bold'
  }
})
