import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Checkbox from '../../../../../components/atoms/Checkbox'
import CheckboxSub from '../../../../../components/atoms/CheckboxSub'
import { IServicesCategories } from '../../../../../models/IServicesCategories'
import { ISkillsItem } from '../../../../../models/IProfileForm'

interface IProps {
  subId: 'sub_1' | 'sub_2'
  data: any
  onCheckedChange: (arg0: IServicesCategories) => void
  checkedItem: ISkillsItem | undefined
}

const SubgategoriesSelector = ({ data, onCheckedChange, checkedItem, subId }: IProps) => {
  const [checkedId, setCheckedId] = useState<ISkillsItem | null>(null)
  useEffect(() => {
    data && setCheckedId(null)
  }, [data])

  useEffect(() => {
    checkedItem && setCheckedId(checkedItem)
  }, [checkedItem])

  const handleCheckedChange = (item: IServicesCategories) => {
    setCheckedId(item)
    onCheckedChange(item)
  }

  return (
    <ScrollView horizontal>
      <View style={styles.wrapper}>
        {data?.map((item: IServicesCategories) => (
          <View style={styles.item} key={item.id}>
            {subId === 'sub_1' ? (
              <Checkbox
                key={`checkbox-${item.id}`}
                label={item.title}
                checked={checkedId?.id === item.id}
                onPress={() => handleCheckedChange(item)}
              />
            ) : (
              <CheckboxSub
                key={`checkbox-${item.id}`}
                label={item.title}
                checked={checkedId?.id === item.id}
                onPress={() => handleCheckedChange(item)}
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
  item: { padding: 2 }
})

export default SubgategoriesSelector
