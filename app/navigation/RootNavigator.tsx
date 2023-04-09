import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainBottomTabs } from '../models/INavigationStack'
import ProfileNavigator from './ProfileStack'
import CatalogNavigator from './CatalogStack'
import FavoritesNavigator from './FavoritesStack'

const Tab = createBottomTabNavigator<MainBottomTabs>()

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='CatalogStack'
        component={CatalogNavigator}
        options={{
          tabBarLabel: 'Каталог'
        }}
      />
      <Tab.Screen
        name='FavoritesStack'
        component={FavoritesNavigator}
        options={{
          tabBarLabel: 'Закладки',
        }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Профіль'
        }}
      />
    </Tab.Navigator>
  )
}
