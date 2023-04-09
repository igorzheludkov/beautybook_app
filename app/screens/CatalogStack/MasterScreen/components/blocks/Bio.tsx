import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Avatar } from 'react-native-paper'
import InstagramIcon from '../../../../../assets/icons/instagram'
import PhoneIcon from '../../../../../assets/icons/phone'
import TelegramIcon from '../../../../../assets/icons/telegram'
import { IProfileForm } from '../../../../../models/IProfileForm'
import FacebookIcon from '../../../../../assets/icons/facebook'
import TikTokIcon from '../../../../../assets/icons/tiktok'

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
          </View>
          <View style={styles.contacts}>
            {data?.instagram && <InstagramIcon style={styles.marginRight} />}
            {data?.telegram && <TelegramIcon style={styles.marginRight} />}
            {data?.facebook && <FacebookIcon style={styles.marginRight} />}
            {data?.tiktok && <TikTokIcon style={styles.marginRight} />}
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
  contacts: { flexDirection: 'row' },
  marginRight: { marginRight: 10 }
})

export default Bio
