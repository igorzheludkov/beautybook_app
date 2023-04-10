import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { IServicesCategories } from '../../../../models/IServicesCategories'
import { Avatar, Button } from 'react-native-paper'
import colors from '../../../../constants/colors'
import { IFilters } from '../../CategoryScreen/types'

interface IProps {
  onPress: (arg: IFilters) => void
  data: IServicesCategories[]
}

const CategoryBlock = ({ data, onPress }: IProps) => {
  return (
    <View style={styles.wrapper}>
      {data?.map(({ id, title, image, subCategories }: IServicesCategories) => (
        <View key={id} style={styles.cardContainer}>
          <Avatar.Image size={100} source={{ uri: image }} />
          <View style={styles.cardContent}>
            <Pressable onPress={() => onPress({ root: { id, title } })}>
              <Text style={styles.title}>{title}</Text>
            </Pressable>
            <View style={styles.subCat}>
              {subCategories?.map((subCat) => (
                <Button
                  style={styles.subCatBtn}
                  labelStyle={styles.subCatBtnLabel}
                  key={subCat.id}
                  onPress={() =>
                    onPress({ root: { id, title }, sub_1: { id: subCat.id, title: subCat.title } })
                  }
                  mode='outlined'
                >
                  {subCat.title}
                </Button>
              ))}
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  cardContainer: { flexDirection: 'row', marginVertical: 10 },
  cardContent: { marginLeft: 10, flex: 1 },
  title: { fontSize: 20, paddingBottom: 10 },
  subCat: { flexDirection: 'row', flexWrap: 'wrap' },
  subCatBtn: { marginRight: 4, marginVertical: 3, borderColor: colors.palette.yellow, borderWidth: 2 },
  subCatBtnLabel: { paddingVertical: 2, marginVertical: 0, color: colors.palette.black }
})

export default CategoryBlock
