import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MasterScreen from '../screens/CatalogStack/MasterScreen/MasterScreen'

import { FavoritesStackTypes } from '../models/INavigationStack'
import FavoritesScreen from '../screens/FavoritesStack/FavoritesScreen'

const Stack = createNativeStackNavigator<FavoritesStackTypes>()

export default function FavoritesNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName='FavoritesScreen'>
      <Stack.Screen
        name='FavoritesScreen'
        component={FavoritesScreen}
        options={{ headerTitle: 'Закладки' }}
      />
      <Stack.Screen
        name='MasterScreen'
        component={MasterScreen}
        options={{ headerShown: true, headerTitle: 'Про майстра' }}
      />
    </Stack.Navigator>
  )
}
