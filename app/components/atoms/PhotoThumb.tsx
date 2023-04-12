import { View, Image, Text, TouchableOpacity, StyleSheet, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import RemoveIcon from '../../assets/icons/RemoveIcon'

interface Props {
  id: string | undefined
  url: string | undefined
  onRemove: (arg0: string | undefined) => void
}

export default function PhotoThumb({ url, id, onRemove }: Props) {
  const windowWidth = Dimensions.get('window').width
  const imageWidth = (windowWidth - 20) / 2
  return (
    <View style={styles.wrapper}>
      <Image style={[styles.image, { width: imageWidth, height: imageWidth }]} source={{ uri: url }} />
      <Pressable style={styles.removeIcon} onPress={() => onRemove(id)}>
        <RemoveIcon fill={'white'} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'center', margin: 4, position: 'relative' },
  image: { borderRadius: 5 },
  removeIcon: {
    position: 'absolute',
    right: 5,
    bottom: 5
  }
})
