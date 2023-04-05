import React from 'react'
import { StyleSheet, View } from 'react-native'
import Bio from './blocks/Bio'
import { IProfileForm } from '../../../../models/IProfileForm'

interface IProps {
  data: IProfileForm
}

const MasterPage = (props: IProps) => {
  const { data } = props
  return (
    <View style={styles.wrapper}>
      <Bio data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

export default MasterPage
