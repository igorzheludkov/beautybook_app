import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import colors from '../../../constants/colors'
import { useForm } from 'react-hook-form'
import { IUserServiceData } from '../../../models/IGoodsAndService'
import Form from './blocks/Form'
import { FAB } from 'react-native-paper'
import { ProfileStackTypes } from '../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import definedValuesFilter from '../../../utils/definedValuesFilter'
import CategoriesSelector from './blocks/CategorySelector/CategoriesSelector'
import { useGetServiceCategoriesQuery } from '../../../store/modules/api/filterCategories/filterCategoriesSlice'
import { IServicesCategories } from '../../../models/IServicesCategories'

type Props = NativeStackScreenProps<ProfileStackTypes, 'ServiceAddScreen'>

export default function ServiceAddScreen({ navigation }: Props) {
  const { data: categoryData } = useGetServiceCategoriesQuery({})
  const [selectedCategory, setSelectedCategory] = useState<{
    categoryId: string
    categoryData: IServicesCategories
  }>()

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty }
  } = useForm<IUserServiceData>()

  function saveData(data: IUserServiceData) {
    const notEmtyFields = definedValuesFilter({ ...data, ...selectedCategory })

    console.log('~~~~~~~~~~~~~~ notEmtyFields', notEmtyFields)
  }

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <Form control={control} errors={errors} />
        <CategoriesSelector data={categoryData || []} onPress={(cat) => setSelectedCategory(cat)} />
      </ScrollView>
      {isDirty && (
        <FAB animated style={styles.fab} icon='content-save-outline' onPress={handleSubmit(saveData)} />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.defaultContainerColor
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
})
