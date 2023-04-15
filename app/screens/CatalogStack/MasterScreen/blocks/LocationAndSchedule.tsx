import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { IProfileForm } from '../../../../models/IProfileForm'
import Location from '../../../../assets/icons/Location'

interface IProps {
  masterData: IProfileForm
}

export default function LocationAndSchedule(props: IProps) {
  return (
    <View style={styles.wrapper}>
      <Location fill={'gray'} />
      <Text>
        {props.masterData.city?.name_uk}, {props.masterData.street}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }
})
