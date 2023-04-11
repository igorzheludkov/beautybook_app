import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { IProfileForm } from '../../../../models/IProfileForm'
import UserCard from './atoms/UserCard'

interface IProps {
  onPress: (arg0: string) => void
  data: IProfileForm[]
}

const FilteredUsersBlock = ({ data, onPress }: IProps) => {
  return (
    <View style={styles.wrapper}>
      {data?.map((item: IProfileForm) => (
        <UserCard key={item.id} user={item} onPress={onPress} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, paddingHorizontal: 5 }
})

export default FilteredUsersBlock
