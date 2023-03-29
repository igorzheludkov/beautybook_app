import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import colors from '../../config/colors'

interface IProps {}

const Logo = (props: IProps) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={require('../../assets/images/logo.png')} />
      <Text style={styles.text}>Каталог краси</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: colors.palette.yellow,
    width: 150,
    height: 50,
    backgroundColor: colors.defaultContainerColor
  },
  image: { width: 40, height: 40, marginRight: 5 },
  text: { fontSize: 14, textTransform: 'uppercase', width: 100 }
})

export default Logo
