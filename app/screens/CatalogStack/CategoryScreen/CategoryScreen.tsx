import React, { useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import colors from '../../../constants/colors'
import { useGetFilteredMastersQuery } from '../../../store/modules/api/findMasters/findMastersSlice'
import FilteredUsersBlock from './components/FilteredUsers'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes } from '../../../models/INavigationStack'
import {
  useGetCitiesQuery,
  useGetServiceCategoriesQuery
} from '../../../store/modules/api/filterCategories/filterCategoriesSlice'
import CategoryFilters from './components/CategoryFilters'
import { useAppSelector } from '../../../store/hooks'
import { IFilters } from './types'

type Props = NativeStackScreenProps<CatalogStackTypes, 'CategoryScreen'>

export default function CategoryScreen({ navigation, route }: Props) {
  // Categories
  const { data: categoryData } = useGetServiceCategoriesQuery({})
  const { data: categoryCities } = useGetCitiesQuery({})
  const [categoriesCheck, setCategoriesCheck] = useState<IFilters>(route.params)

  const category = [categoriesCheck.sub_2 || categoriesCheck.sub_1 || categoriesCheck.root]
  const selectedCity = useAppSelector((state) => state.appSlice.city)

  // Filter query
  const { data = [], error } = useGetFilteredMastersQuery({ category, city: selectedCity?.id })

  function onMasterPress(data: string) {
    navigation.navigate('MasterScreen', { masterId: data })
  }

  return (
    <ScrollView style={style.wrapper}>
      <CategoryFilters
        data={categoryData || []}
        cities={categoryCities || []}
        checkedItems={categoriesCheck}
        onSelectFilters={setCategoriesCheck}
      />
      <FilteredUsersBlock data={error ? [] : data} onPress={onMasterPress} />
    </ScrollView>
  )
}

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.defaultContainerColor,
    flex: 1
  }
})
