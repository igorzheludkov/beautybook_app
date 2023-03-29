import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileStack from './ProfileStack'
import CatalogStack from './CatalogStack'
import { MainBottomTabs } from '../models/INavigationStack'
import FavoritesScreen from '../components/screens/FavoritesScreen/FavoritesScreen'

const Tab = createBottomTabNavigator<MainBottomTabs>()

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='CatalogStack'
        component={CatalogStack}
        options={{
          tabBarLabel: 'Каталог'
        }}
      />
      <Tab.Screen
        name='FavoritesStack'
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Закладки'
        }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileStack}
        options={{
          tabBarLabel: 'Профіль'
        }}
      />
    </Tab.Navigator>
  )
}
