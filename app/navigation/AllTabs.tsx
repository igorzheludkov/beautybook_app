import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StartScreen from '../screens/StartStack/StartScreen';
import ProfileStack from './ProfileStack';
import LoginForm from '../features/auth/LoginForm/LoginForm';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="StartStack"
        component={StartScreen}
        options={{
          tabBarLabel: 'Головна',
        }}
      />
      <Tab.Screen
        name="StartScreen2"
        component={StartScreen}
        options={{
          tabBarLabel: 'Закладки',
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Профіль',
        }}
      />
    </Tab.Navigator>
  );
}
