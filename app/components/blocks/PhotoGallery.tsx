import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import PhotoThumb from '../atoms/PhotoThumb'

interface Props {
  data: Array<{ id: string; timeUpdated: number; url: string }>
  onRemove: (arg0: string) => void
}

export default function PhotoGallery({ data, onRemove }: Props) {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {data.map((element) => {
            return <PhotoThumb key={element.id} url={element.url} onRemove={onRemove} id={element.id} />
          })}
          {data.length % 2 !== 0 && <View style={{ flex: 1, padding: 2 }} />}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
})
