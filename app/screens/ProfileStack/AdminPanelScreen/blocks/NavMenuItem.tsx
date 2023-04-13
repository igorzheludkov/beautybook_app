import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Button } from 'react-native-paper'
import ArrowRightIcon from '../../../../assets/icons/ArrowRight'

interface IProps {
  icon: React.ReactNode
  name: string
  onPress: () => void
}

export default function NavMenuItem(props: IProps) {
  const { icon, name, onPress } = props
  return (
    <Pressable onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.leftContainer}>
          <View style={styles.icon}>{icon}</View>
          <Text style={styles.name}>{name}</Text>
        </View>
        <ArrowRightIcon />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftContainer: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  icon: { marginRight: 5 },
  name: { fontSize: 16 }
})
