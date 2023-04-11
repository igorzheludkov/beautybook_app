import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Bio from './blocks/Bio'
import { Button } from 'react-native-paper'
import { useMasterDataQuery } from '../../../../store/modules/api/masterData/masterDataSlice'
import {
  useGetBookmarksQuery,
  useRemoveBookmarkMutation,
  useSaveBookmarkMutation
} from '../../../../store/modules/api/bookmarks/bookmarksSlice'

interface IProps {
  masterId: string
}

const MasterPage = ({ masterId }: IProps) => {
  const { data } = useMasterDataQuery(masterId)
  const { data: bookmarks } = useGetBookmarksQuery({ subCollection: 'services' })

  const masterBookmarkId = bookmarks?.find((item) => item.data.id === masterId)

  const [saveBookmark, { isLoading, isSuccess, isError }] = useSaveBookmarkMutation()

  const [removeBookmark, removeBookmarkStatus] = useRemoveBookmarkMutation()
  const { isLoading: removeLoad, isSuccess: removeOk, isError: removeErr } = removeBookmarkStatus

  if (!data) return <ActivityIndicator />

  return (
    <View style={styles.wrapper}>
      {masterBookmarkId ? (
        <Button onPress={() => removeBookmark({ subCollection: 'services', id: masterBookmarkId.id })}>
          Відписатись
        </Button>
      ) : (
        <Button onPress={() => saveBookmark({ subCollection: 'services', data: data })}>
          Підписатись
        </Button>
      )}
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
