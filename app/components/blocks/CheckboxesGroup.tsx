import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Checkbox from '../elements/Checkbox'

interface IProps {
  data: any
  onCheckedChange: (checked: Checked) => void
  checkedItems: string[]
}

interface Checked {
  skills: string[]
}

interface Category {
  id: string
  title: string
  description: string
  image: string
  subcategories: Category[]
}

const CheckboxesGroup = ({ data, onCheckedChange, checkedItems }: IProps) => {
  const [checkedIds, setCheckedIds] = useState<string[]>([])

  useEffect(() => {
    setCheckedIds(checkedItems)
  }, [checkedItems])

  const handleCheckedChange = (id: string) => {
    const newCheckedIds = [...checkedIds]
    const index = newCheckedIds.indexOf(id)
    if (index === -1) {
      newCheckedIds.push(id)
    } else {
      newCheckedIds.splice(index, 1)
    }
    setCheckedIds(newCheckedIds)
    onCheckedChange({ skills: newCheckedIds })
  }
  return (
    <View style={styles.wrapper}>
      {data?.map(({ id, title }: Category) => (
        <Checkbox
          key={id}
          label={title}
          checked={checkedIds.includes(id)}
          onPress={() => handleCheckedChange(id)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'flex-start' }
})

export default CheckboxesGroup
