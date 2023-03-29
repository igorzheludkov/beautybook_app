import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../../../config/colors'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes } from '../../../models/INavigationStack'
import { useMasterDataQuery } from '../../../store/modules/api/masterData/masterDataSlice'
import { ActivityIndicator, Avatar } from 'react-native-paper'
import MasterPage from '../../pages/masterPage/MasterPage'

type Props = NativeStackScreenProps<CatalogStackTypes, 'MasterScreen'>

export default function MasterScreen({ route }: Props) {
  const { data } = useMasterDataQuery(route.params.id)

  if (!data) return <ActivityIndicator />

  return (
    <View style={styles.wrapper}>
      <MasterPage data={data} />
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
