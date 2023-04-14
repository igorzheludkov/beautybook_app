import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import colors from '../../constants/colors'
import { useGetBookmarksQuery } from '../../store/modules/api/bookmarks/bookmarksSlice'
import UserCard from './blocks/UserCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FavoritesStackTypes } from '../../models/INavigationStack'
import { IProfileForm } from '../../models/IProfileForm'

type Props = NativeStackScreenProps<FavoritesStackTypes, 'FavoritesScreen'>

export default function FavoritesScreen({ navigation }: Props) {
  const { data, isLoading } = useGetBookmarksQuery({ subCollection: 'services' })


  function onMasterPress(data: { masterId: string }) {
    navigation.navigate('MasterScreen', { masterId: data.masterId })
  }

  return (
    <ScrollView style={style.wrapper}>
      {data?.map((item: { data: IProfileForm; id: string }) => (
        <UserCard key={item.data.id} user={item.data} onPress={onMasterPress} />
      ))}
    </ScrollView>
  )
}

const style = StyleSheet.create({
  wrapper: { flex: 1, padding: 10, backgroundColor: colors.defaultContainerColor },
  divider: { paddingVertical: 10 }
})
