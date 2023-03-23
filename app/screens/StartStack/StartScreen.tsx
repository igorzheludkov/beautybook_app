import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function StartScreen() {
  return (
    <View style={style.wrapper}>
      <Text>Home Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
