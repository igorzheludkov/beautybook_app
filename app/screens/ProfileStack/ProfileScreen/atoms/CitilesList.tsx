import { Pressable, Text, StyleSheet, View } from 'react-native'
import { CitiesDataTypes } from '../../../../models/ICities'
import { useState } from 'react'
import ArrowRightIcon from '../../../../assets/icons/ArrowRight'

interface IProps {
  data: CitiesDataTypes[]
  closeMenu: (i: CitiesDataTypes) => void
}

export default function CitiesList({ data, closeMenu }: IProps) {
  const [renderLevel, setRenderLevel] = useState<CitiesDataTypes[] | undefined>(data)

  return (
    <>
      {renderLevel?.map((item) => (
        <View key={item.id} style={styles.wrapper}>
          {item?.cities ? (
            <Pressable style={styles.item} onPress={() => setRenderLevel(item.cities)}>
              <Text style={styles.text}>{item.name_uk}</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.item} onPress={() => closeMenu(item)}>
              <Text style={styles.text}>{item.name_uk}</Text>
            </Pressable>
          )}
          {item?.cities && (
            <Pressable style={styles.icon} onPress={() => setRenderLevel(item.cities)}>
              <ArrowRightIcon />
            </Pressable>
          )}
        </View>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  item: { flex: 1, paddingVertical: 14, paddingHorizontal: 10 },
  text: {},
  icon: {marginRight: 10}
})
