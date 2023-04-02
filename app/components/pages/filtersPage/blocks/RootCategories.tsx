import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Button, Menu } from 'react-native-paper'
import { IServicesCategories } from '../../../../models/IServicesCategories'
import RotatingSquare from '../../../../utils/RotatingSquare'
import TriangleRightIcon from '../../../../assets/icons/TriangleRightIcon'
import colors from '../../../../config/colors'

export default function RootCategories({ data, onPress, checkedItems }: IProps) {
  const [menuVisible, setMenuVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(data.find((i) => i.id === checkedItems.root)?.title)

  const openMenu = () => setMenuVisible(true)

  const closeMenu = (i: IServicesCategories) => {
    setMenuVisible(false)
    setSelectedItem(i.title)
    onPress(i.id)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.rootCategory}>
        <RotatingSquare size={30} degree={menuVisible ? 90 : 0}>
          <TriangleRightIcon size={30} />
        </RotatingSquare>
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
  wrapper: { paddingHorizontal: 10, paddingBottom: 10},
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

interface IProps {
  data: IServicesCategories[]
  checkedItems: {
    root?: string
    sub_1?: string
  }
  onPress: (arg0: string) => void
}
