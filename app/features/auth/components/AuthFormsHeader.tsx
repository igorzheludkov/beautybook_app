import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

interface IProps {
  onPress: () => void;
  title: string;
  rightButtonTitle: string;
}

const AuthFormsHeader = (props: IProps) => {
  const {onPress, title, rightButtonTitle} = props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerLeftElement}>X</Text>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerRightElement}>
        <Button title={rightButtonTitle} onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeftElement: {
    width: '33.33%',
    fontSize: 16,
    padding: 10,
  },
  headerTitle: {
    textAlign: 'center',
    width: '33.33%',
    fontSize: 30,
  },
  headerRightElement: {
    alignItems: 'flex-end',
    width: '33.33%',
    fontSize: 16,
  },
});

export default AuthFormsHeader;
