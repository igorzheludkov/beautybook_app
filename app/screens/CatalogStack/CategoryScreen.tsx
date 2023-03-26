import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import colors from '../../config/colors'
import { useGetFilteredMastersQuery } from '../../store/modules/api/filtersMaster/filtersMasterSlice'
import FilteredUsersBlock from '../../components/blocks/FilteredUsers'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes } from '../../models/INavigationStack'
type Props = NativeStackScreenProps<CatalogStackTypes, 'CategoryScreen'>

export default function StartScreen({ route }: Props) {
  const [filter, setFilter] = useState(route.params)

  const { data = [] } = useGetFilteredMastersQuery(filter)
  return (
    <View style={style.wrapper}>
      <SafeAreaView />
      <FilteredUsersBlock data={data} onPress={() => {}} />
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
