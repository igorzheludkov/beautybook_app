import React from 'react'
import AuthScreen from '../components/screens/ProfileStack/AuthScreen'
import { SafeAreaView } from 'react-native'
import { useAppSelector } from '../store/hooks'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileStackTypes } from '../models/INavigationStack'
import ProfileScreen from '../components/screens/ProfileStack/ProfileScreen/ProfileScreen'
import AdminPanelScreen from '../components/screens/ProfileStack/AdminPanelScreen/AdminPanelScreen'
import PhotoGalleryScreen from '../components/screens/ProfileStack/PhotoGalleryScreen'

const Stack = createNativeStackNavigator<ProfileStackTypes>()

export default function ProfileStack() {
  const isAuthorized = useAppSelector((state) => state.authSlice.isAuthorized)
  return (
    <>
      {!isAuthorized ? (
        <>
          <SafeAreaView />
          <AuthScreen />
        </>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='AdminPanelScreen'>
          <Stack.Screen
            name='AdminPanelScreen'
            component={AdminPanelScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='PhotoGalleryScreen'
            component={PhotoGalleryScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </>
  )
}
