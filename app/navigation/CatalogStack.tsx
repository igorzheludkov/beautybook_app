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
      <Stack.Screen name='CategoryScreen' component={CategoryScreen} options={{headerTitle: 'Каталог'}} />
      <Stack.Screen name='MasterScreen' component={MasterScreen} options={{headerTitle: 'Про майстра'}} />
      <Stack.Screen name='MasterServScreen' component={MasterServScreen} options={{headerTitle: 'Послуги'}}/>
      <Stack.Screen name='ServiceInfoScreen' component={ServiceInfoScreen} options={{headerTitle: 'Про послугу'}} />
      <Stack.Screen name='MasterPhotoGalleryScreen' component={MasterPhotoGalleryScreen} options={{headerTitle: 'Фотогалерея'}}/>
      <Stack.Screen name='MasterFeedbackScreen' component={MasterFeedbackScreen} options={{headerTitle: 'Відгуки'}}/>
      <Stack.Screen name='MasterExperienceScreen' component={MasterExperienceScreen} options={{headerTitle: 'Досвід'}}/>
    </Stack.Navigator>
  )
}
