import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import colors from '../../../config/colors'
import { useGetFilteredMastersQuery } from '../../../store/modules/api/filtersMaster/filtersMasterSlice'
import FilteredUsersBlock from '../../blocks/FilteredUsers'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes } from '../../../models/INavigationStack'
import { useGetServiceCategoriesQuery } from '../../../store/modules/api/servicesCategories/servicesCategoriesSlice'
import CategoriesFilter from '../../blocks/CategoriesFilter'

type Props = NativeStackScreenProps<CatalogStackTypes, 'CategoryScreen'>

export default function CategoryScreen({ navigation, route }: Props) {
  const { data: categoryData } = useGetServiceCategoriesQuery({})
  const [categoriesCheck, setCategoriesCheck] = useState<string[]>([...route.params])

  
  const { data = [] } = useGetFilteredMastersQuery(categoriesCheck)
  console.log('categoriesCheck - CategoryScreen', categoriesCheck)

  function onMasterPress(data: string) {
    navigation.navigate('MasterScreen', { id: data })
  }

  return (
    <View style={style.wrapper}>
      <CategoriesFilter
        data={categoryData}
        onCheckedChange={setCategoriesCheck}
        checkedItems={categoriesCheck || []}
      />
      <FilteredUsersBlock data={data} onPress={onMasterPress} />
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: colors.defaultContainerColor,
    flex: 1
  }
})
