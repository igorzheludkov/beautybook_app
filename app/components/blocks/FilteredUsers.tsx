import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Avatar } from 'react-native-paper'
import colors from '../../config/colors'
import { IProfileForm } from '../../models/IProfileForm'

interface IProps {
  onPress: () => void
  data: IProfileForm[]
}

const FilteredUsersBlock = ({ data, onPress }: IProps) => {
  return (
    <View style={styles.wrapper}>
      {data?.map(({ name, phone, city, street, avatar }: IProfileForm) => (
        <View key={phone} style={styles.cardContainer}>
          <Avatar.Image size={100} source={{ uri: avatar }} />
          <View style={styles.cardContent}>
            <Pressable onPress={() => onPress()}>
              <Text style={styles.title}>{name}</Text>
            </Pressable>
            <Text>{phone}</Text>
            <Text>{city}</Text>
            <Text>{street}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  cardContainer: { flexDirection: 'row', marginVertical: 10 },
  cardContent: { marginLeft: 10, flex: 1, marginRight: 10 },
  title: { fontSize: 20, paddingBottom: 10 }
})

export default FilteredUsersBlock