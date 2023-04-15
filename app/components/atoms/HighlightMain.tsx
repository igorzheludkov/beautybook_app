import React from 'react'
import { StyleSheet, View, Text, ScrollView, StyleSheetProperties } from 'react-native'
import colors from '../../constants/colors'

interface IProps {
  styles?: any
  title: string | undefined
  description: string | undefined
}

export default function HighlightMain(props: IProps) {
  return (
    <>
      {Boolean(props.title || props.description) && (
        <View style={[styles.wrapper, { ...props.styles }]}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: colors.palette.pinkLight,
    borderRadius: 10
  },
  title: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
  description: {}
})
