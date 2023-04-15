import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import colors from '../../../../../constants/colors'
import ClockIcon from '../../../../../assets/icons/ClockIcon'

interface IProps {}

export default function TitleHeader(props: IProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Послуга</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.priceText}>Ціна</Text>
      </View>
      <View style={styles.duration}>
        <ClockIcon />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.textInputBg,
    borderRadius: 10
  },
  titleText: {},
  price: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    marginLeft: 2,
    backgroundColor: colors.textInputBg,
    borderRadius: 10
  },
  priceText: {},
  duration: {
    padding: 4,
    marginLeft: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    backgroundColor: colors.textInputBg,
    borderRadius: 10
  },
  durationText: {}
})
