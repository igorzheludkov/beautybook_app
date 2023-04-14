import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { IProfileForm } from '../../../../models/IProfileForm'
import { Button } from 'react-native-paper'
import {
  useGetBookmarksQuery,
  useRemoveBookmarkMutation,
  useSaveBookmarkMutation
} from '../../../../store/modules/api/bookmarks/bookmarksSlice'

interface IProps {
  masterData: IProfileForm
}

export default function SubscribeBlock(props: IProps) {
  const { data: bookmarks } = useGetBookmarksQuery({ subCollection: 'services' })
  const [saveBookmark, { isLoading, isSuccess, isError }] = useSaveBookmarkMutation()
  const [removeBookmark, removeBookmarkStatus] = useRemoveBookmarkMutation()
  const { isLoading: removeLoad, isSuccess: removeOk, isError: removeErr } = removeBookmarkStatus

  const masterBookmarkId = bookmarks?.find((item) => item.data?.id === props.masterData.id)

  return (
    <View style={styles.wrapper}>
      {masterBookmarkId ? (
        <Button
          icon='account-heart'
          onPress={() => removeBookmark({ subCollection: 'services', id: masterBookmarkId.id })}
        >
          Відписатись
        </Button>
      ) : (
        <Button
          icon='account-heart-outline'
          onPress={() => saveBookmark({ subCollection: 'services', data: props.masterData })}
        >
          Підписатись
        </Button>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
