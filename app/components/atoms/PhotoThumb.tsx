import { View, Image, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

interface Props {
  id: string
  url: string
  onRemove: (arg0: string) => void
}

export default function PhotoThumb({ url, id, onRemove }: Props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 2 }}>
      <Image style={styles.image} source={{ uri: url }} />
      <Pressable>
        <Button onPress={() => onRemove(id)}>Видалити</Button>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  image: { width: 80, height: 80 }
})
