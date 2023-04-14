import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import PhotoGallery from '../../../../../components/atoms/PhotoGallery'
import { CatalogStackTypes } from '../../../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useMasterDataQuery } from '../../../../../store/modules/api/masterData/masterDataSlice'

type Props = NativeStackScreenProps<CatalogStackTypes, 'MasterFeedbackScreen'>

export default function MasterFeedbackScreen({ route }: Props) {
  const { data } = useMasterDataQuery(route.params.masterId)

  if (!data) return <ActivityIndicator />

  return (
    <View style={styles.wrapper}>
      <PhotoGallery data={data.galleryFeedback || []} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
