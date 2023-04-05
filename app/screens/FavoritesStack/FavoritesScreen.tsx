import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import colors from '../../constants/colors'
import { Button } from 'react-native-paper'
import { useUpdateCitiesMutation } from '../../store/modules/api/filterCategories/filterCategoriesSlice'
import { cities } from '../../store/modules/api/filterCategories/cities'

export default function FavoritesScreen() {
  const [updateCities] = useUpdateCitiesMutation()

  return (
    <View style={style.wrapper}>
      <Button onPress={() => updateCities({ data: cities })}>Update cities</Button>
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: { flex: 1, padding: 10, backgroundColor: colors.defaultContainerColor },
  divider: { paddingVertical: 10 }
})
