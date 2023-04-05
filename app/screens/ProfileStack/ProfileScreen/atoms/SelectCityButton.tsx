import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, GestureResponderEvent } from 'react-native'
import colors from '../../../../constants/colors'

interface IProps {
  selectedItem?: string
  openMenu: (event: GestureResponderEvent) => void
}

export default function MenuButton({ selectedItem, openMenu }: IProps) {
  return (
    <TouchableOpacity style={styles.menuButtonWrapper} onPress={openMenu}>
      <View style={styles.underline} />
      <Text style={styles.menuButton}>{selectedItem ? selectedItem : 'Вибрати місто'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  menuButtonWrapper: { position: 'relative', maxWidth: 120 },
  menuButton: { fontSize: 13, marginRight: 10 },
  underline: {
    marginRight: 13,
    backgroundColor: colors.palette.yellowLight,
    height: 5,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: 4
  }
})
