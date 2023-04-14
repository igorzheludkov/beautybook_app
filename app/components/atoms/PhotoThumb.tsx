import { View, Image, Text, TouchableOpacity, StyleSheet, Pressable, Dimensions } from 'react-native'
import React from 'react'
import RemoveIcon from '../../assets/icons/RemoveIcon'

interface Props {
  id: string | undefined
  url: string | undefined
  onRemove?: ((arg0: string | undefined) => void)
  size?: number
}

export default function PhotoThumb({ url, id, onRemove, size }: Props) {
  const windowWidth = Dimensions.get('window').width
  const imageWidth = (windowWidth - 20) / 2
  return (
    <View style={styles.wrapper}>
      <Image
        style={[styles.image, { width: size ?? imageWidth, height: size ?? imageWidth }]}
        source={{ uri: url }}
      />
      {onRemove && (
        <Pressable style={styles.removeIcon} onPress={() => onRemove(id)}>
          <RemoveIcon fill={'white'} />
        </Pressable>
      )}
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
