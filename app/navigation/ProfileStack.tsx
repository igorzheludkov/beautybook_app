import React from 'react'
import AuthScreen from '../screens/ProfileStack/AuthScreen/AuthScreen'
import { SafeAreaView } from 'react-native'
import { useAppSelector } from '../store/hooks'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileStackTypes } from '../models/INavigationStack'
import { logout } from '../store/modules/auth/thunks'
import { useAppDispatch } from '../store/hooks'
import ProfileScreen from '../screens/ProfileStack/ProfileScreen/ProfileScreen'
import AdminPanelScreen from '../screens/ProfileStack/AdminPanelScreen/AdminPanelEntry'
import PhotoGalleryScreen from '../screens/ProfileStack/PhotoGalleryScreen/PhotoGalleryScreen'
import { Button } from 'react-native-paper'

const Stack = createNativeStackNavigator<ProfileStackTypes>()

export default function ProfileNavigator({ navigation }: any) {
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
              headerLeft: () => <Button onPress={() => dispatch(logout())}>Вийти</Button>,
              headerRight: () => (
                <Button onPress={() => navigation.navigate('ProfileScreen')}>Профіль</Button>
              ),
              headerTitle: 'Кабінет',
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name='PhotoGalleryScreen'
            component={PhotoGalleryScreen}
            options={{ headerShown: true, headerTitle: 'Фотогалерея', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name='ProfileScreen'
            component={ProfileScreen}
            options={{ headerShown: true, headerTitleAlign: 'center', headerTitle: 'Профіль' }}
          />
        </Stack.Navigator>
      )}
    </>
  )
}
