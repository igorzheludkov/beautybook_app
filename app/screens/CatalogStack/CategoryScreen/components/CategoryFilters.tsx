import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { IServicesCategories } from '../../../../models/IServicesCategories'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import RootCategories from './blocks/RootCategories'
import SubgategoriesSelector from './blocks/SubgategoriesSelector'
import CitySelector from './blocks/CitySelector'
import { setCityReducer } from '../../../../store/modules/app/slice'

export default function CategoryFilters({ data, cities, checkedItems, onSelectFilters }: Props) {
  const dispatch = useAppDispatch()
  const [filters, setFilters] = useState<IFilters>(checkedItems)
  const [filtersLocal, setFiltersLocal] = useState<IFilters>(checkedItems)

  const selectedCity = useAppSelector((state) => state.appSlice.city)

  useEffect(() => {
    onSelectFilters(filters)
  }, [filters])

  const subData_1 = data.find((i) => i.id === filtersLocal.root)?.subCategories
  const subData_2 = subData_1?.find((i) => i.id === filtersLocal.sub_1)?.subCategories

  return (
    <View style={styles.wrapper}>
      <View style={styles.topCategories}>
        <RootCategories
          data={data}
          onPress={(i) => {
            setFilters({ root: i })
            setFiltersLocal((prev) => ({ ...prev, root: i }))
          }}
          checkedItems={filters}
        />
        <CitySelector
          data={cities}
          onPress={(i) => {
            dispatch(setCityReducer(i))
            setFiltersLocal((prev) => ({ ...prev, city: i }))
          }}
          checkedItems={selectedCity}
        />
      </View>

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
  wrapper: { marginTop: 10, marginBottom: 10 },
  topCategories: { flexDirection: 'row', justifyContent: 'space-between' }
})

interface IFilters {
  root?: string
  sub_1?: string
  sub_2?: string
}

interface Props {
  data: IServicesCategories[]
  cities: any[]
  checkedItems: IFilters
  onSelectFilters: (arg0: IFilters) => void
}
