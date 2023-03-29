import React from 'react'
import StartScreen from '../components/screens/CatalogStack/StartScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryScreen from '../components/screens/CatalogStack/CategoryScreen'
import MasterScreen from '../components/screens/CatalogStack/MasterScreen'

import { CatalogStackTypes } from '../models/INavigationStack'

const Stack = createNativeStackNavigator<CatalogStackTypes>()

export default function CatalogNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='StartScreen'>
      <Stack.Screen name='StartScreen' component={StartScreen} />
      <Stack.Screen name='CategoryScreen' component={CategoryScreen} options={{ headerShown: true }} />
      <Stack.Screen name='MasterScreen' component={MasterScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  )
}
