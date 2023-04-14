import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import colors from '../../../../constants/colors'

interface IProps {
  icon: React.ReactNode
  label: string
  onPress: () => void
}

export default function SubScreenLink(props: IProps) {
  return (
    <Pressable onPress={props.onPress} style={styles.wrapper}>
      <View style={styles.icon}>{props.icon}</View>
      <Text style={styles.text}>{props.label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: 91,
  },
  icon: {
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: colors.textInputBg,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {}
})
