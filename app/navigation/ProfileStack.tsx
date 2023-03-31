import React from 'react'
import AuthScreen from '../components/screens/ProfileStack/AuthScreen'
import { SafeAreaView } from 'react-native'
import { useAppSelector } from '../store/hooks'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileStackTypes } from '../models/INavigationStack'
import { logout } from '../store/modules/auth/thunks'
import { useAppDispatch } from '../store/hooks'
import ProfileScreen from '../components/screens/ProfileStack/ProfileScreen/ProfileScreen'
import AdminPanelScreen from '../components/screens/ProfileStack/AdminPanelScreen/AdminPanelScreen'
import PhotoGalleryScreen from '../components/screens/ProfileStack/PhotoGalleryScreen/PhotoGalleryScreen'
import { Button } from 'react-native-paper'

const Stack = createNativeStackNavigator<ProfileStackTypes>()

export default function ProfileStack({ navigation }: any) {
  const dispatch = useAppDispatch()
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
            options={{
              headerShown: true,
              headerLeft: () => <Button onPress={() => dispatch(logout)}>Вийти</Button>,
              headerRight: () => (
                <Button onPress={() => navigation.navigate('ProfileScreen')}>Профіль</Button>
              ),
              headerTitle: 'Кабінет'
            }}
          />
          <Stack.Screen
            name='PhotoGalleryScreen'
            component={PhotoGalleryScreen}
            options={{ headerShown: true, headerTitle: 'Фотогалерея' }}
          />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
      )}
    </>
  )
}
