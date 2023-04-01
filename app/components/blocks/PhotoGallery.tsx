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
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, alignItems: 'center' },
  container: {
    width: '96.5%',
    flexDirection: 'row',
    // alignItems: 'flex-start',
    // padding: 5,
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }
})
