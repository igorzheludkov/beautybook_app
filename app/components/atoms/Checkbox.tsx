import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Chip } from 'react-native-paper'
import React from 'react'

interface Props {
  label: string
  checked: boolean
  onPress: () => void
}

export default function Checkbox({ label, checked, onPress }: Props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 2 }}>
      <Chip mode='outlined' selected={checked}onPress={onPress}>
        {label}
      </Chip>
    </View>
  )
}
