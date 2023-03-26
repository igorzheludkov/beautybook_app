import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { useGetServiceCategoriesQuery } from '../../store/modules/api/servicesCategories/servicesCategoriesSlice'
import CategoryBlock from '../../components/blocks/CategoryBlock'
import { Searchbar, TextInput } from 'react-native-paper'
import colors from '../../config/colors'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes } from '../../models/INavigationStack'
type Props = NativeStackScreenProps<CatalogStackTypes, 'StartScreen'>

export default function StartScreen({navigation}: Props) {
  const { data: categoryData } = useGetServiceCategoriesQuery({})
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = (query: string) => setSearchQuery(query)

  function onCategoryPress(data: string[]) {
    navigation.navigate('CategoryScreen', data)
  }

  return (
    <View style={style.wrapper}>
      <SafeAreaView />
      <Searchbar placeholder='Пошук' onChangeText={onChangeSearch} value={searchQuery} />
      <View style={style.divider} />
      <CategoryBlock data={categoryData || []} onPress={onCategoryPress} />
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: { flex: 1, padding: 10, backgroundColor: colors.defaultContainerColor },
  divider: { paddingVertical: 10 }
})
