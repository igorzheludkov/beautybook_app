import { Pressable, Text, StyleSheet, View, ScrollView } from 'react-native'
import { useState } from 'react'
import ArrowRightIcon from '../../../../../../assets/icons/ArrowRight'
import { IServicesCategories } from '../../../../../../models/IServicesCategories'

interface IProps {
  data: IServicesCategories[]
  closeMenu: (i: IServicesCategories) => void
}

export default function CategoriesList({ data, closeMenu }: IProps) {
  const [renderLevel, setRenderLevel] = useState<IServicesCategories[] | undefined>(data)

  return (
    <ScrollView style={{ maxHeight: 400 }}>
      {renderLevel?.map((item) => (
        <View key={item.id} style={styles.wrapper}>
          {item?.subCategories ? (
            <Pressable style={styles.item} onPress={() => setRenderLevel(item.subCategories)}>
              <Text style={styles.text}>{item.title}</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.item} onPress={() => closeMenu(item)}>
              <Text style={styles.text}>{item.title}</Text>
            </Pressable>
          )}
          {item?.subCategories && (
            <Pressable style={styles.icon} onPress={() => setRenderLevel(item.subCategories)}>
              <ArrowRightIcon />
            </Pressable>
          )}
        </View>
      ))}
    </ScrollView>
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
  icon: { marginRight: 10 }
})
