import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { IServicesCategories } from '../../../models/IServicesCategories'
import RootCategories from './blocks/RootCategories'
import SubgategoriesSelector from '../../blocks/SubgategoriesSelector'

export default function CategoryFilters({ data, checkedItems, onSelectFilters }: Props) {
  const [filters, setFilters] = useState<IFilters>(checkedItems)
  const [filtersLocal, setFiltersLocal] = useState<IFilters>(checkedItems)

  useEffect(() => {
    onSelectFilters(filters)
  }, [filters])

  const subData_1 = data.find((i) => i.id === filtersLocal.root)?.subCategories
  const subData_2 = subData_1?.find((i) => i.id === filtersLocal.sub_1)?.subCategories

  console.log('~~~~~~~~~~~~~~ sub 2', filtersLocal)

  return (
    <View style={styles.wrapper}>
      <RootCategories
        data={data}
        onPress={(i) => {
          setFilters({ root: i })
          setFiltersLocal((prev) => ({ ...prev, root: i }))
        }}
        checkedItems={filters}
      />
      <SubgategoriesSelector
        subId='sub_1'
        data={subData_1}
        onCheckedChange={(i) => {
          setFilters({ sub_1: i })
          setFiltersLocal((prev) => ({ ...prev, sub_1: i }))
        }}
        checkedItem={filters.sub_1}
      />
      <SubgategoriesSelector
        subId='sub_2'
        data={subData_2}
        onCheckedChange={(i) => {
          setFilters({ sub_2: i })
          setFiltersLocal((prev) => ({ ...prev, sub_2: i }))
        }}
        checkedItem={filters.sub_2}
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
