import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import PhotoThumb from '../atoms/PhotoThumb'

interface Props {
  data: Array<{ id: string; timeUpdated: number; url: string }>
  onRemove: (arg0: string) => void
}

export default function PhotoGallery({ data, onRemove }: Props) {
  return (
    <View style={styles.wrapper}>
      {data.map((element) => {
        return <PhotoThumb key={element.id} url={element.url} onRemove={onRemove} id={element.id} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'center', padding: 2 }
})
