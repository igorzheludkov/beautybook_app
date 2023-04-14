import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Avatar, Button } from 'react-native-paper'
import { IProfileForm } from '../../../../models/IProfileForm'

interface IProps {
  data: IProfileForm
}

export default function HeaderBlock({ data }: IProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cardContainer}>
        <Avatar.Image size={150} source={{ uri: data?.avatar }} />
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.title}>{data?.name}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  cardContainer: { flexDirection: 'row', marginVertical: 10 },
  cardContent: { marginLeft: 10, flex: 1, marginRight: 10, justifyContent: 'space-between' },
  title: { fontSize: 24, paddingBottom: 10 }
})
