import React from 'react'
import { StyleSheet, Text, View, Pressable, LayoutAnimation } from 'react-native'
import colors from '../../config/colors'

interface IProps {
  title: string
  rightTitle: string
  onPressRight: () => void
  leftTitle: string
  onPressLeft: () => void
}

const AdminHeader = (props: IProps) => {
  const animateLayout = () => {
    LayoutAnimation.configureNext({
      duration: 250, // Animation duration in milliseconds
      update: {
        type: LayoutAnimation.Types.easeInEaseOut // Animation type
      }
    })
  }
  const { onPressRight, onPressLeft, title, rightTitle, leftTitle } = props
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onPressLeft} style={styles.headerLeftElement}>
        <Text style={styles.leftTitle}>{leftTitle}</Text>
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
      <Pressable onPress={onPressRight} style={styles.headerRightElement}>
        <View onLayout={animateLayout}>
          <Text style={styles.leftTitle}>{rightTitle}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  headerLeftElement: {
    width: '27.33%',
    alignItems: 'flex-start'
  },
  headerTitle: {
    textAlign: 'center',
    width: '43.33%',
    fontSize: 24
  },
  leftTitle: {
    fontSize: 18,
    color: colors.navButtonsHeader
  },
  rightTitle: {
    fontSize: 18,
    color: colors.navButtonsHeader
  },
  headerRightElement: {
    alignItems: 'flex-end',
    width: '27.33%'
  }
})

export default AdminHeader
