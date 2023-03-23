import React from 'react';
import ProfileScreen from '../screens/ProfileStack/ProfileScreen';
import AuthScreen from '../screens/ProfileStack/AuthScreen';
import {SafeAreaView} from 'react-native';
import {useAppSelector} from '../store/hooks';

export default function ProfileStack() {
  const isAuthorized = useAppSelector(state => state.authSlice.isAuthorized);
  return (
    <>
      <SafeAreaView />
      {isAuthorized ? <ProfileScreen /> : <AuthScreen />}
    </>
  );
}
