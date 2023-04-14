import React from 'react'
import StartScreen from '../screens/CatalogStack/MainScreen/StartScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryScreen from '../screens/CatalogStack/CategoryScreen/CategoryScreen'
import MasterScreen from '../screens/CatalogStack/MasterScreen/MasterScreen'

import { CatalogStackTypes } from '../models/INavigationStack'
import MasterServScreen from '../screens/CatalogStack/MasterScreen/SubScreens/MasterServices/ServicesScreen/MasterServicesScreen'
import MasterPhotoGalleryScreen from '../screens/CatalogStack/MasterScreen/SubScreens/MasterPhotoGalleryScreen/MasterPhotoGalleryScreen'
import MasterFeedbackScreen from '../screens/CatalogStack/MasterScreen/SubScreens/MasterFeedbackScreen/MasterFeedbackScreen'
import MasterExperienceScreen from '../screens/CatalogStack/MasterScreen/SubScreens/MasterExperienceScreen/MasterExperienceScreen'
import ServiceInfoScreen from '../screens/CatalogStack/MasterScreen/SubScreens/MasterServices/ServiceInfoScreen/ServiceInfoScreen'

const Stack = createNativeStackNavigator<CatalogStackTypes>()

export default function CatalogNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName='StartScreen'>
      <Stack.Screen name='StartScreen' component={StartScreen} options={{headerShown: false}}/>
      <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
      <Stack.Screen name='MasterScreen' component={MasterScreen} />
      <Stack.Screen name='MasterServScreen' component={MasterServScreen} />
      <Stack.Screen name='ServiceInfoScreen' component={ServiceInfoScreen} />
      <Stack.Screen name='MasterPhotoGalleryScreen' component={MasterPhotoGalleryScreen} />
      <Stack.Screen name='MasterFeedbackScreen' component={MasterFeedbackScreen} />
      <Stack.Screen name='MasterExperienceScreen' component={MasterExperienceScreen} />
    </Stack.Navigator>
  )
}
