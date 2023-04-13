import React, { useState } from 'react'
import { TextInput, Text, StyleSheet, Platform, View } from 'react-native'
import colors from '../../constants/colors'

interface IProps {
  value: string | undefined
  errorText?: string
  placeholder?: string
  onChangeText: () => void
  containerStyle?: any
  style?: any
  label?: string
  secureTextEntry?: boolean
  [key: string]: any
}

export default function TextInputCustom({ style, label, ...props }: IProps) {
  const styles = getStyles(props)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={props.containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.input, style, isFocused ? styles.focused : {}]}
        {...props}
      />
      {props.errorText && <Text>{props.errorText}</Text>}
    </View>
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
    },
    focused: {
      borderBottomColor: colors.palette.pink
    }
  })
}
