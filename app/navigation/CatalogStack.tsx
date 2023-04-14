import React from 'react'
import StartScreen from '../screens/CatalogStack/MainScreen/StartScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryScreen from '../screens/CatalogStack/CategoryScreen/CategoryScreen'
import MasterScreen from '../screens/CatalogStack/MasterScreen/MasterScreen'

import { CatalogStackTypes } from '../models/INavigationStack'
import MasterNavigator from './MasterStack'

const Stack = createNativeStackNavigator<CatalogStackTypes>()

export default function CatalogNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='StartScreen'>
      <Stack.Screen name='StartScreen' component={StartScreen} />
      <Stack.Screen name='CategoryScreen' component={CategoryScreen} options={{ headerShown: true }} />
      <Stack.Screen name='MasterNavigator' component={MasterNavigator} options={{ headerShown: true }} />
    </Stack.Navigator>
  )
}
