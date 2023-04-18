import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainBottomTabs } from '../models/INavigationStack'
import ProfileNavigator from './ProfileStack'
import CatalogNavigator from './CatalogStack'
import FavoritesNavigator from './FavoritesStack'
import TabCatalogIcon from '../assets/icons/TabCatalogIcon'
import TabFavoritesIcon from '../assets/icons/TabFavoritesIcon'
import TabProfileIcon from '../assets/icons/TabProfileIcon'

const Tab = createBottomTabNavigator<MainBottomTabs>()

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='CatalogStack'
        component={CatalogNavigator}
        options={{
          tabBarLabel: 'Каталог',
          headerPressColor: 'blue',
          tabBarIcon: (props) => <TabCatalogIcon {...props} />
        }}
      />
      <Tab.Screen
        name='FavoritesStack'
        component={FavoritesNavigator}
        options={{
          tabBarLabel: 'Закладки',
          tabBarIcon: (props) => <TabFavoritesIcon {...props} />

        }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Профіль',
          tabBarIcon: (props) => <TabProfileIcon {...props} />

        }}
      />
    </Tab.Navigator>
  )
}
