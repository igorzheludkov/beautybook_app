import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes, FavoritesStackTypes } from '../../../models/INavigationStack'
import MasterPage from './components/MasterPage'

type Props = NativeStackScreenProps<CatalogStackTypes | FavoritesStackTypes, 'MasterScreen'>

export default function MasterScreen({ route }: Props) {
  return (
    <View style={styles.wrapper}>
      <MasterPage id={route.params.id} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: colors.defaultContainerColor,
    flex: 1
  }
})
