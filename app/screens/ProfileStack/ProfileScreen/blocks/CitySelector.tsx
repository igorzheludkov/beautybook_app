import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Menu } from 'react-native-paper'
import RotateSquareAnimation from '../../../../utils/RotateSquareAnimation'
import { CitiesDataTypes } from '../../../../models/ICities'
import CityIcon from '../../../../assets/icons/CityIcon'
import CitiesList from '../atoms/CitilesList'
import SelectCityButton from '../atoms/SelectCityButton'

export default function CitySelector({ data, onPress, checkedItems }: IProps) {
  data = Object.values(data).flat()
  const [menuVisible, setMenuVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(checkedItems)

  const openMenu = () => setMenuVisible(true)

  const closeMenu = (i: CitiesDataTypes) => {
    setMenuVisible(false)
    setSelectedItem(i)
    onPress(i)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.rootCategory}>
        <Menu
          style={styles.menu}
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={<SelectCityButton openMenu={openMenu} selectedItem={selectedItem?.name_uk} />}
        >
          <CitiesList data={data} closeMenu={closeMenu} />
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
  }
})

interface IProps {
  data: CitiesDataTypes[]
  checkedItems: CitiesDataTypes | undefined
  onPress: (arg0: CitiesDataTypes) => void
}
