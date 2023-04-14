import { View, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import PhotoThumb from '../../../../../../components/atoms/PhotoThumb'

interface Props {
  data: Array<{ id: string; timeUpdated: number; url: string }>
  onRemove: (arg0: string | undefined) => void
}

export default function PhotoGallery({ data, onRemove }: Props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.flatlistContainer}>
          {data.map((element) => {
            return <PhotoThumb key={element.id} url={element.url} onRemove={onRemove} id={element.id} />
          })}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatlistContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
