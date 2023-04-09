import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Bio from './blocks/Bio'
import { Button } from 'react-native-paper'
import { useMasterDataQuery } from '../../../../store/modules/api/masterData/masterDataSlice'
import { useSaveBookmarkMutation } from '../../../../store/modules/api/bookmarks/bookmarksSlice'

interface IProps {
  id: string
}

const MasterPage = ({ id }: IProps) => {
  const { data } = useMasterDataQuery(id)
  const [saveBookmark, { isLoading, isSuccess, isError }] = useSaveBookmarkMutation()

  if (!data) return <ActivityIndicator />

  return (
    <View style={styles.wrapper}>
      <Button onPress={() => saveBookmark({ subCollection: 'services', data: data })}>
        Додати в закладки
      </Button>
      <Bio data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

export default MasterPage
