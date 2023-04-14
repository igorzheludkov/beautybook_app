import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MasterScreen from '../screens/CatalogStack/MasterScreen/MasterScreen'

import { MasterStackTypes } from '../models/INavigationStack'
import MasterExperienceScreen from '../screens/CatalogStack/MasterScreen/SubScreens/MasterExperienceScreen/MasterExperienceScreen'
import MasterFeedbackScreen from '../screens/CatalogStack/MasterScreen/SubScreens/MasterFeedbackScreen/MasterFeedbackScreen'
import MasterPhotoGalleryScreen from '../screens/CatalogStack/MasterScreen/SubScreens/MasterPhotoGalleryScreen/MasterPhotoGalleryScreen'
import MasterServScreen from '../screens/CatalogStack/MasterScreen/SubScreens/MasterServices/ServicesScreen/MasterServicesScreen'
import MasterServAddScreen from '../screens/CatalogStack/MasterScreen/SubScreens/MasterServices/ServiceAddScreen/MasterServiceAddScreen'

const Stack = createNativeStackNavigator<MasterStackTypes>()

export default function MasterNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='MasterScreen'>
      <Stack.Screen name='MasterScreen' component={MasterScreen} />
      <Stack.Screen name='MasterServScreen' component={MasterServScreen} options={{ headerShown: true }} />
      <Stack.Screen name='MasterServAddScreen' component={MasterServAddScreen} options={{ headerShown: true }} />
      <Stack.Screen name='MasterPhotoGalleryScreen' component={MasterPhotoGalleryScreen} options={{ headerShown: true }} />
      <Stack.Screen name='MasterFeedbackScreen' component={MasterFeedbackScreen} options={{ headerShown: true }} />
      <Stack.Screen name='MasterExperienceScreen' component={MasterExperienceScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  )
}
