import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Menu } from 'react-native-paper'
import CategoriesList from './CategoriesList'
import MenuButton from './MenuButton'
import { IServicesCategories } from '../../../../../../../../models/IServicesCategories'

interface IProps {
  data: IServicesCategories[]
  onPress: (arg0: { categoryId: string; categoryData: IServicesCategories }) => void
  defaultCategory: IServicesCategories | undefined
}

export default function CategoriesSelector({ data, onPress, defaultCategory }: IProps) {
  data = Object.values(data).flat()
  const [menuVisible, setMenuVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<IServicesCategories | undefined>()

  useEffect(() => {
    setSelectedItem(defaultCategory)
  }, [defaultCategory])

  const openMenu = () => setMenuVisible(true)

  const closeMenu = (i: IServicesCategories) => {
    setMenuVisible(false)
    setSelectedItem(i)
    onPress({ categoryId: i.id, categoryData: i })
  }

  return (
    <Menu
      style={styles.menu}
      visible={menuVisible}
      onDismiss={() => setMenuVisible(false)}
      anchor={<MenuButton menuVisible={menuVisible} openMenu={openMenu} selectedItem={selectedItem?.title} />}
    >
      <CategoriesList data={data} closeMenu={closeMenu} />
    </Menu>
  )
}

const styles = StyleSheet.create({
  menu: { width: '90%', paddingTop: 40, marginLeft: '2%' }
})
