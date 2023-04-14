import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import colors from '../../../../constants/colors'
import { useForm } from 'react-hook-form'
import { IUserServiceData } from '../../../../models/IGoodsAndService'
import Form from './blocks/Form'
import { Button, FAB } from 'react-native-paper'
import { ProfileStackTypes } from '../../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import definedValuesFilter from '../../../../utils/definedValuesFilter'
import CategoriesSelector from './blocks/CategorySelector/CategoriesSelector'
import { useGetServiceCategoriesQuery } from '../../../../store/modules/api/filterCategories/filterCategoriesSlice'
import { IServicesCategories } from '../../../../models/IServicesCategories'
import {
  useAddItemMutation,
  useGetOneItemQuery,
  useRemoveItemMutation,
  useUpdateItemMutation
} from '../../../../store/modules/api/goodsAndServices/goodsAndServicesSlice'
import useImagePicker from '../../../../hooks/useImagesPicker'
import {
  useGetPhotosQuery,
  useRemovePhotoMutation,
  useUploadPhotosMutation
} from '../../../../store/modules/api/photoGallery/photoGallerySlice'
import { useProfileDataQuery } from '../../../../store/modules/user/userSlice'
import PhotoGallery from './blocks/PhotoGallery'

type Props = NativeStackScreenProps<ProfileStackTypes, 'ServiceAddScreen'>

export default function ServiceAddScreen({ navigation, route }: Props) {
  const item = route.params?.item
  // data hooks
  const { data: userData, isLoading: userDataLoading } = useProfileDataQuery({})
  const { data: categoryData } = useGetServiceCategoriesQuery({})
  const [itemId, setItemId] = useState<string | undefined>(item?.id)
  const { data: itemData } = useGetOneItemQuery({ id: itemId })

  const [addItem, { data: itemCreated, isSuccess: addItemSuccess }] = useAddItemMutation()
  const [updateItem, { data: itemUpdated, isSuccess: updateItemSuccess }] = useUpdateItemMutation()
  const [removeItem, { isSuccess: itemRemoved }] = useRemoveItemMutation()
  const [uploadPhotos, { isLoading, error, isSuccess: photoUploadSuccess }] = useUploadPhotosMutation()
  const [removePhoto, { isLoading: isRemoving, error: removeError, isSuccess: removePhotoSuccess }] =
    useRemovePhotoMutation()

  const { data: itemPhotos } = useGetPhotosQuery({
    userId: userData?.id,
    page: 1,
    rootFolder: 'user',
    groupFolder: 'services',
    itemFolder: itemId
  })

  // custom hooks
  const [images, handlePickImageFromCamera, handlePickImagesFromGallery, resetState, removeTempImage] =
    useImagePicker()
  const tempImages = images?.map((item) => ({ id: item.fileName, url: item.uri }))

  // state
  const [selectedCategory, setSelectedCategory] = useState<{
    categoryId: string
    categoryData: IServicesCategories
  }>()

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty }
  } = useForm<IUserServiceData>({ defaultValues: item?.data })

  // handlers

  useEffect(() => {
    itemRemoved && navigation.goBack()
  }, [itemRemoved])

  useEffect(() => {
    itemCreated && setItemId(itemCreated.docId)
  }, [itemCreated])

  useEffect(() => {
    if (itemId && images?.length) {
      uploadPhotos({
        userId: userData?.id,
        images,
        rootFolder: 'user',
        groupFolder: 'services',
        itemFolder: itemId
      })
    }
  }, [itemId, images])

  useEffect(() => {
    if (itemId && itemPhotos) {
      onSaveItem({ images: itemPhotos })
      resetState()
    }
  }, [itemPhotos?.length])

  function onSaveItem(data: IUserServiceData) {
    const notEmtyFields = definedValuesFilter({ ...data, ...selectedCategory })
    if (itemId) {
      updateItem({ id: itemId, data: notEmtyFields })
    } else {
      addItem({ data: notEmtyFields })
    }
  }

  function onRemovePhoto(id: string | undefined) {
    if (itemPhotos?.length) {
      removePhoto({
        userId: userData?.id,
        photoId: id,
        rootFolder: 'user',
        groupFolder: 'services',
        itemFolder: itemId
      })
    } else {
      removeTempImage(id)
    }
  }

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.container}>
          <Form control={control} errors={errors} />
          <CategoriesSelector
            data={categoryData || []}
            defaultCategory={itemData?.data.categoryData}
            onPress={(cat) => setSelectedCategory(cat)}
          />
        </View>

        <PhotoGallery
          data={itemData?.data?.images || tempImages || []}
          onRemove={(id) => onRemovePhoto(id)}
        />
        <View style={{ height: 10 }} />
        {<Button onPress={() => handlePickImagesFromGallery(10)}>Додати фото</Button>}
        <View style={{ height: 10 }} />
        {Boolean(itemId) && <Button onPress={() => removeItem({ id: item?.id })}>Видалити послугу</Button>}
      </ScrollView>
      {/* {isDirty && selectedCategory && ( */}
      <FAB animated style={styles.fab} icon='content-save-outline' onPress={handleSubmit(onSaveItem)} />
      {/* )} */}
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.defaultContainerColor
  },
  container: {
    paddingHorizontal: 10,
    marginBottom: 10
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
})
