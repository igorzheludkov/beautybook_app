import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {logout} from '../../store/modules/auth/thunks';
import {useAppDispatch} from '../../store/hooks';
import colors from '../../config/colors';
import ProfileForm from '../../features/adminPage/ProfileForm/ProfileForm';

export default function ProfileScreen() {
  const dispatch = useAppDispatch();
  return (
    <View style={style.wrapper}>
      <Text>Profile Screen</Text>
      <ProfileForm />
      <Button title="LogOut" onPress={() => dispatch(logout())} />
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.defaultContainerColor,
  },
});
