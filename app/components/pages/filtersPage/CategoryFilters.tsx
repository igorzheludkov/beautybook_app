import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { IServicesCategories } from '../../../models/IServicesCategories'
import RootCategories from './blocks/RootCategories'
import SubgategoriesSelector from '../../blocks/SubgategoriesSelector'

export default function CategoryFilters({ data, checkedItems, onSelectFilters }: Props) {
  const [filters, setFilters] = useState<IFilters>(checkedItems)
  const [root, setRoot] = useState<IFilters['root']>(checkedItems.root)

  useEffect(() => {
    onSelectFilters(filters)
  }, [filters])

  const subData_1 = data.find((i) => i.id === root)?.subCategories

  return (
    <View style={styles.wrapper}>
      <RootCategories
        data={data}
        onPress={(i) => {
          setFilters((prev) => ({ root: i }))
          setRoot(i)
        }}
        checkedItems={filters}
      />
      <SubgategoriesSelector
        data={subData_1}
        onCheckedChange={(i) => setFilters({ sub_1: i })}
        checkedItem={filters.sub_1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { marginTop: 10, marginBottom: 10 }
})

interface IFilters {
  root?: string
  sub_1?: string
  sub_2?: string
}

interface Props {
  data: IServicesCategories[]
  checkedItems: IFilters
  onSelectFilters: (arg0: IFilters) => void
}
