import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, GestureResponderEvent } from 'react-native'
import colors from '../../../../../constants/colors'
import GoodsIcon from '../../../../../assets/icons/GoodsIcon'
import RotateSquareAnimation from '../../../../../utils/RotateSquareAnimation'

interface IProps {
  selectedItem?: string
  openMenu: (event: GestureResponderEvent) => void
  menuVisible: boolean
}

export default function MenuButton({ selectedItem, openMenu, menuVisible }: IProps) {
  return (
    <TouchableOpacity
      style={[
        styles.menuButtonWrapper,
        menuVisible ? { backgroundColor: 'blue' } : { backgroundColor: 'white' }
      ]}
      onPress={openMenu}
    >
      <Text style={styles.menuButton}>{selectedItem ? selectedItem : 'Вибрати категорію'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  menuButtonWrapper: {
    alignSelf: 'center',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 50
  },
  menuButton: { fontSize: 16}
})
