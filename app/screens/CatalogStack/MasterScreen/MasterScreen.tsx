import React from 'react'
import { ActivityIndicator, StyleSheet, View, ScrollView } from 'react-native'
import Bio from './blocks/Bio'
import { Button } from 'react-native-paper'
import { useMasterDataQuery } from '../../../store/modules/api/masterData/masterDataSlice'
import {
  useGetBookmarksQuery,
  useRemoveBookmarkMutation,
  useSaveBookmarkMutation
} from '../../../store/modules/api/bookmarks/bookmarksSlice'
import SubScreenLink from './blocks/SubScreenLink'
import ServicesIcon from '../../../assets/icons/ServicesIcon'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes, FavoritesStackTypes } from '../../../models/INavigationStack'
import colors from '../../../constants/colors'
import PhotoGalleryIcon from '../../../assets/icons/PhotoGalleryIcon'
import FeedbackIcon from '../../../assets/icons/FeedbackIcon'
import ExperienceIcon from '../../../assets/icons/ExperienceIcon'
import HighlightMain from '../../../components/atoms/HighlightMain'
import Divider from '../../../components/atoms/Divider'

type Props = NativeStackScreenProps<CatalogStackTypes | FavoritesStackTypes, 'MasterScreen'>

interface IProps {
  masterId: string | undefined
}

export default function MasterScreen({ route }: Props) {
  const { data } = useMasterDataQuery(route.params.masterId)
  const { data: bookmarks } = useGetBookmarksQuery({ subCollection: 'services' })
  const nav = useNavigation<Props['navigation']>()

  const masterBookmarkId = bookmarks?.find((item) => item.data.id === route.params.masterId)

  const [saveBookmark, { isLoading, isSuccess, isError }] = useSaveBookmarkMutation()

  const [removeBookmark, removeBookmarkStatus] = useRemoveBookmarkMutation()
  const { isLoading: removeLoad, isSuccess: removeOk, isError: removeErr } = removeBookmarkStatus

  if (!data) return <ActivityIndicator />

  function navTo(screen: string) {
    nav.navigate(screen, { masterId: data?.id })
  }

  return (
    <ScrollView style={styles.wrapper}>
      {masterBookmarkId ? (
        <Button onPress={() => removeBookmark({ subCollection: 'services', id: masterBookmarkId.id })}>
          Відписатись
        </Button>
      ) : (
        <Button onPress={() => saveBookmark({ subCollection: 'services', data: data })}>Підписатись</Button>
      )}
      <Bio data={data} />
      <View style={styles.subLinks}>
        <SubScreenLink onPress={() => navTo('MasterServScreen')} icon={<ServicesIcon />} label='Послуги' />
        <SubScreenLink
          onPress={() => navTo('MasterPhotoGalleryScreen')}
          icon={<PhotoGalleryIcon />}
          label='Фотогалерея'
        />
        <SubScreenLink
          onPress={() => navTo('MasterFeedbackScreen')}
          icon={<FeedbackIcon />}
          label='Відгуки'
        />
        <SubScreenLink
          onPress={() => navTo('MasterExperienceScreen')}
          icon={<ExperienceIcon />}
          label='Мій досвід'
        />
      </View>
      <Divider height={15}/>
      <HighlightMain title={data.highlight?.title} description={data.highlight?.description} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.defaultContainerColor
  },
  subLinks: { paddingHorizontal: 5, flexDirection: 'row', justifyContent: 'space-around' }
})
