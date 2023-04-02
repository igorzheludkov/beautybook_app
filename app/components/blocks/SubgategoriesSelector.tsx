import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Checkbox from '../atoms/Checkbox'
import { ActivityIndicator } from 'react-native-paper'

const SubgategoriesSelector = ({ data, onCheckedChange, checkedItem }: IProps) => {
  const [checkedId, setCheckedId] = useState<string>('')
  console.log('~~~~~~~~~~~~~~ checkedIds', checkedId)

  useEffect(() => {
    checkedItem && setCheckedId(checkedItem)
  }, [checkedItem])

  const handleCheckedChange = (id: string) => {
    setCheckedId(id)
    onCheckedChange(id)
  }

  if (!data) return <ActivityIndicator />

  return (
    <ScrollView horizontal>
      <View style={styles.wrapper}>
        {data?.map(({ id, title }: Category) => (
          <View style={styles.item} key={id}>
            <Checkbox
              key={`checkbox-${id}`}
              label={title}
              checked={checkedId === id}
              onPress={() => handleCheckedChange(id)}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row' },
  item: { padding: 2 }
})

interface IProps {
  data: any
  onCheckedChange: (arg0: string) => void
  checkedItem: string | undefined
}

interface Category {
  id: string
  title: string
  description: string
  image: string
  subCategories: Category[]
}

export default SubgategoriesSelector
