import React from 'react'
import { StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-paper'

export default function NewUserBlock() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cardContainer}>
        <Avatar.Image size={150} source={require('../../../../../assets/images/avatar.png')} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>Заповнити профіль</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  cardContainer: { flexDirection: 'row', marginVertical: 10 },
  cardContent: { marginLeft: 10, flex: 1, marginRight: 10, justifyContent: 'center' },
  title: { fontSize: 24 },
  contacts: { flexDirection: 'row', width: 120, justifyContent: 'space-between' }
})
