import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Avatar } from 'react-native-paper'
import InstagramIcon from '../../../../assets/icons/instagram'
import PhoneIcon from '../../../../assets/icons/phone'
import TelegramIcon from '../../../../assets/icons/telegram'
import { IProfileForm } from '../../../../models/IProfileForm'

interface IProps {
  data: IProfileForm
}

const Bio = (props: IProps) => {
  const { data } = props
  return (
    <View style={styles.wrapper}>
      <View style={styles.cardContainer}>
        <Avatar.Image size={150} source={{ uri: data?.avatar }} />
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.title}>{data?.name}</Text>
            <Text>{data?.aboutMe}</Text>
          </View>
          <View style={styles.contacts}>
            <InstagramIcon />
            <TelegramIcon />
            <PhoneIcon />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  cardContainer: { flexDirection: 'row', marginVertical: 10 },
  cardContent: { marginLeft: 10, flex: 1, marginRight: 10, justifyContent: 'space-between' },
  title: { fontSize: 24, paddingBottom: 10 },
  contacts: { flexDirection: 'row', width: 120, justifyContent: 'space-between' }
})

export default Bio
