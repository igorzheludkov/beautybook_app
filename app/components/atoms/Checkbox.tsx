import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Chip } from 'react-native-paper'
import React from 'react'
import colors from '../../constants/colors'

interface Props {
  label: string
  checked: boolean
  onPress: () => void
  containerStyle?: any
}

export default function Checkbox({ label, checked, containerStyle, onPress }: Props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 2 }}>
      <Chip style={[styles.chip, containerStyle]} mode='flat' selected={checked} onPress={onPress}>
        {label}
      </Chip>
    </View>
  )
}

const styles = StyleSheet.create({
  chip: { paddingVertical: 10,  }
})
