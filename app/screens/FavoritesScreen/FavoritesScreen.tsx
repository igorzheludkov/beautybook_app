import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import colors from '../../config/colors'

export default function FavoritesScreen() {
  return (
    <View style={style.wrapper}>
      <SafeAreaView />
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: { flex: 1, padding: 10, backgroundColor: colors.defaultContainerColor },
  divider: { paddingVertical: 10 }
})
