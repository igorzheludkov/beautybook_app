import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Button, Menu } from 'react-native-paper'
import { IServicesCategories } from '../../../../../models/IServicesCategories'
import RotateSquareAnimation from '../../../../../utils/RotateSquareAnimation'
import TriangleRightIcon from '../../../../../assets/icons/TriangleRightIcon'
import colors from '../../../../../constants/colors'
import { IFilters } from '../../types'

interface IProps {
  data: IServicesCategories[]
  checkedItems: IFilters
  onPress: (arg0: IServicesCategories) => void
}

export default function RootCategories({ data, onPress, checkedItems }: IProps) {
  const [menuVisible, setMenuVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(data.find((i) => i.id === checkedItems.root?.id)?.title)

  const openMenu = () => setMenuVisible(true)

  const closeMenu = (i: IServicesCategories) => {
    setMenuVisible(false)
    setSelectedItem(i.title)
    onPress(i)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.rootCategory}>
        <RotateSquareAnimation size={30} degree={menuVisible ? 90 : 0}>
          <TriangleRightIcon size={30} />
        </RotateSquareAnimation>
        <Menu
          style={styles.menu}
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity style={styles.menuButtonWrapper} onPress={openMenu}>
              <View style={styles.underline} />
              <Text style={styles.menuButton}>{selectedItem ? selectedItem : 'Вибрати категорію'}</Text>
            </TouchableOpacity>
          }
        >
          {data.map((cat) => (
            <Menu.Item key={cat.id} onPress={() => closeMenu(cat)} title={cat.title} />
          ))}
        </Menu>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: 10, paddingBottom: 10 },
  rootCategory: { flexDirection: 'row', alignItems: 'center' },
  menu: {
    marginTop: 50,
    width: '70%'
  },
  menuButtonWrapper: { position: 'relative' },
  menuButton: { fontSize: 20, marginLeft: 10, fontWeight: '600' },
  underline: {
    marginLeft: 10,
    backgroundColor: colors.palette.yellowLight,
    height: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: 4
  }
})
