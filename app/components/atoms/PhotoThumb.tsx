import { View, Image, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import RemoveIcon from '../../assets/icons/RemoveIcon'

interface Props {
  id: string
  url: string
  onRemove: (arg0: string) => void
}

export default function PhotoThumb({ url, id, onRemove }: Props) {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{ uri: url }} />
      <Pressable style={styles.removeIcon} onPress={() => onRemove(id)}>
        <RemoveIcon fill={'white'} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'center', margin: 4, position: 'relative' },
  image: { width: 180, height: 180, borderRadius: 5 },
  removeIcon: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  }
})