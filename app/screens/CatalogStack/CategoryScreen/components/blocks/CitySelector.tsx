import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Menu } from 'react-native-paper'
import { IServicesCategories } from '../../../../../models/IServicesCategories'
import RotateSquareAnimation from '../../../../../utils/RotateSquareAnimation'
import TriangleRightIcon from '../../../../../assets/icons/TriangleRightIcon'
import colors from '../../../../../constants/colors'
import { CitiesDataTypes } from '../../../../../models/ICities'
import CityIcon from '../../../../../assets/icons/CityIcon'

export default function CitySelector({ data, onPress, checkedItems }: IProps) {
  data = Object.values(data).flat()
  const [menuVisible, setMenuVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string>()

  const openMenu = () => setMenuVisible(true)

  const closeMenu = (i: CitiesDataTypes) => {
    setMenuVisible(false)
    setSelectedItem(i.name_uk)
    onPress(i.id)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.rootCategory}>
        <Menu
          style={styles.menu}
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity style={styles.menuButtonWrapper} onPress={openMenu}>
              <View style={styles.underline} />
              <Text style={styles.menuButton}>{selectedItem ? selectedItem : 'Вибрати місто'}</Text>
            </TouchableOpacity>
          }
        >
          {data?.map((city) => (
            <Menu.Item key={city.id} onPress={() => closeMenu(city)} title={city.name_uk} />
          ))}
        </Menu>
        <RotateSquareAnimation size={30} degree={menuVisible ? 90 : 0}>
          <CityIcon size={30} />
        </RotateSquareAnimation>
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
  menuButton: { fontSize: 16, marginRight: 10 },
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

interface IProps {
  data: CitiesDataTypes[]
  checkedItems: {
    root?: string
    sub_1?: string
  }
  onPress: (arg0: string) => void
}
