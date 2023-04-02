import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Checkbox from '../atoms/Checkbox'
import CheckboxSub from '../atoms/CheckboxSub'

const SubgategoriesSelector = ({ data, onCheckedChange, checkedItem, subId }: IProps) => {
  const [checkedId, setCheckedId] = useState<string | null>(null)
  useEffect(() => {
    data && setCheckedId(null)
  }, [data])

  useEffect(() => {
    checkedItem && setCheckedId(checkedItem)
  }, [checkedItem])

  const handleCheckedChange = (id: string) => {
    setCheckedId(id)
    onCheckedChange(id)
  }

  return (
    <ScrollView horizontal>
      <View style={styles.wrapper}>
        {data?.map(({ id, title }: Category) => (
          <View style={styles.item} key={id}>
            {subId === 'sub_1' ? (
              <Checkbox
                key={`checkbox-${id}`}
                label={title}
                checked={checkedId === id}
                onPress={() => handleCheckedChange(id)}
              />
            ) : (
              <CheckboxSub
                key={`checkbox-${id}`}
                label={title}
                checked={checkedId === id}
                onPress={() => handleCheckedChange(id)}
              />
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row' },
  item: { padding: 2 },
})

interface IProps {
  subId: 'sub_1' | 'sub_2'
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
