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
import GoodsScreen from '../screens/ProfileStack/GoodsScreen/GoodsScreen'
import ServicesScreen from '../screens/ProfileStack/ServicesScreen/ServicesScreen'
import ServiceAddScreen from '../screens/ProfileStack/ServiceAddScreen/ServiceAddScreen'

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
            name='GoodsScreen'
            component={GoodsScreen}
            options={{ headerShown: true, headerTitle: 'Товари', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name='ServicesScreen'
            component={ServicesScreen}
            options={{ headerShown: true, headerTitle: 'Послуги', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name='ServiceAddScreen'
            component={ServiceAddScreen}
            options={{ headerShown: true, headerTitle: 'Додати послугу', headerTitleAlign: 'center' }}
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
