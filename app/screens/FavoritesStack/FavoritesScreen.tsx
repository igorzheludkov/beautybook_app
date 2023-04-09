import React from 'react'
import { StyleSheet, ScrollView} from 'react-native'
import colors from '../../constants/colors'
import { useGetBookmarksQuery } from '../../store/modules/api/bookmarks/bookmarksSlice'
import UserCard from './blocks/UserCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FavoritesStackTypes } from '../../models/INavigationStack'
import { IProfileForm } from '../../models/IProfileForm'

type Props = NativeStackScreenProps<FavoritesStackTypes, 'FavoritesScreen'>

export default function FavoritesScreen({ navigation }: Props) {
  const { data, isLoading } = useGetBookmarksQuery({ subCollection: 'services' })

  function onMasterPress(data: string) {
    navigation.navigate('MasterScreen', { id: data })
  }

  console.log('~~~~~~~~~~~~~~ data', data)

  return (
    <ScrollView style={style.wrapper}>
      {data?.map((item: IProfileForm) => (
        <UserCard key={item.id} user={item} onPress={onMasterPress} />
      ))}
    </ScrollView>
  )
}

const style = StyleSheet.create({
  wrapper: { flex: 1, padding: 10, backgroundColor: colors.defaultContainerColor },
  divider: { paddingVertical: 10 }
})
