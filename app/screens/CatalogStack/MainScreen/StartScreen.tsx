import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { useGetServiceCategoriesQuery } from '../../../store/modules/api/filterCategories/filterCategoriesSlice'
import CategoryBlock from './components/CategoryBlock'
import { Searchbar, TextInput } from 'react-native-paper'
import colors from '../../../constants/colors'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes } from '../../../models/INavigationStack'
import Logo from '../../../components/atoms/Logo'
import { IFilters } from '../CategoryScreen/types'

type Props = NativeStackScreenProps<CatalogStackTypes, 'StartScreen'>

export default function StartScreen({ navigation }: Props) {
  const { data: categoryData } = useGetServiceCategoriesQuery({})
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = (query: string) => setSearchQuery(query)

  function onCategoryPress(data: IFilters) {
    navigation.navigate('CategoryScreen', data)
  }

  return (
    <ScrollView style={style.wrapper}>
      <SafeAreaView />
      <Logo />
      <View style={{ height: 10 }} />
      <Searchbar placeholder='Пошук' onChangeText={onChangeSearch} value={searchQuery} />
      <View style={{ height: 10 }} />
      <CategoryBlock data={categoryData || []} onPress={onCategoryPress} />
    </ScrollView>
  )
}

const style = StyleSheet.create({
  wrapper: { flex: 1, padding: 10, backgroundColor: colors.defaultContainerColor }
})
