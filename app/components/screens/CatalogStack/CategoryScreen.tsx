import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../../config/colors'
import { useGetFilteredMastersQuery } from '../../../store/modules/api/filtersMaster/filtersMasterSlice'
import FilteredUsersBlock from '../../blocks/FilteredUsers'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes } from '../../../models/INavigationStack'
import { useGetServiceCategoriesQuery } from '../../../store/modules/api/servicesCategories/servicesCategoriesSlice'
import CategoryFilters from '../../pages/filtersPage/CategoryFilters'

type Props = NativeStackScreenProps<CatalogStackTypes, 'CategoryScreen'>

export default function CategoryScreen({ navigation, route }: Props) {
  const { data: categoryData } = useGetServiceCategoriesQuery({})
  const [categoriesCheck, setCategoriesCheck] = useState<{
    root?: string
    sub_1?: string
  }>(route.params)

  const { data = [], error } = useGetFilteredMastersQuery([categoriesCheck.root, categoriesCheck.sub_1])

  function onMasterPress(data: string) {
    navigation.navigate('MasterScreen', { id: data })
  }

  return (
    <View style={style.wrapper}>
      <CategoryFilters
        data={categoryData || []}
        checkedItems={categoriesCheck}
        onSelectFilters={setCategoriesCheck}
      />
      <FilteredUsersBlock data={error ? [] : data} onPress={onMasterPress} />
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.defaultContainerColor,
    flex: 1
  }
})
