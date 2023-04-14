import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import colors from '../../../../../../constants/colors'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes } from '../../../../../../models/INavigationStack'


type Props = NativeStackScreenProps<CatalogStackTypes, 'ServiceInfoScreen'>

export default function ServiceInfoScreen({ navigation, route }: Props) {

  console.log('~~~~~~~~~~~~~~ ServiceInfoScreen route', route)
 

  return (
    <>
      <ScrollView style={styles.wrapper}>
       </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.defaultContainerColor
  },
 
})
