import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../config/colors'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes } from '../../models/INavigationStack'
type Props = NativeStackScreenProps<CatalogStackTypes, 'MasterScreen'>

export default function MasterScreen({ route }: Props) {
  return (
    <View style={style.wrapper}>
      <Text>Master Screen</Text>
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.defaultContainerColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
