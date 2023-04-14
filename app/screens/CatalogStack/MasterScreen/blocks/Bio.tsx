import React from 'react'
import { StyleSheet, View, Text, Pressable, Linking } from 'react-native'
import { Avatar } from 'react-native-paper'
import InstagramIcon from '../../../../assets/icons/instagram'
import PhoneIcon from '../../../../assets/icons/phone'
import TelegramIcon from '../../../../assets/icons/telegram'
import { IProfileForm } from '../../../../models/IProfileForm'
import FacebookIcon from '../../../../assets/icons/facebook'
import TikTokIcon from '../../../../assets/icons/tiktok'
import socialLinks from '../../../../constants/links'

interface IProps {
  data: IProfileForm
}

const Bio = (props: IProps) => {
  const { data } = props
  return (
    <View style={styles.wrapper}>
      <View style={styles.cardContainer}>
        <Avatar.Image size={130} source={{ uri: data?.avatar }} />
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.title}>{data?.name}</Text>
            <Text style={styles.aboutMe}>{data?.aboutMe}</Text>
          </View>
          <View style={styles.contacts}>
            {data?.phone && (
              <Pressable onPress={() => Linking.openURL(`tel:${data.phone}`)}>
                <PhoneIcon style={styles.marginRight} />
              </Pressable>
            )}
            {data?.instagram && (
              <Pressable onPress={() => Linking.openURL(`${socialLinks.instagram}${data.instagram}`)}>
                <InstagramIcon style={styles.marginRight} />
              </Pressable>
            )}
            {data?.telegram && (
              <Pressable onPress={() => Linking.openURL(`${socialLinks.telegram}${data.telegram}`)}>
                <TelegramIcon style={styles.marginRight} />
              </Pressable>
            )}
            {data?.facebook && (
              <Pressable onPress={() => Linking.openURL(`${socialLinks.facebook}${data.facebook}`)}>
                <FacebookIcon style={styles.marginRight} />
              </Pressable>
            )}
            {data?.tiktok && (
              <Pressable onPress={() => Linking.openURL(`${socialLinks.tiktok}${data.tiktok}`)}>
                <TikTokIcon style={styles.marginRight} />
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: 10 },
  cardContainer: { flexDirection: 'row', marginVertical: 10 },
  cardContent: { marginLeft: 10, flex: 1, marginRight: 10, justifyContent: 'space-between' },
  title: { fontSize: 24, paddingBottom: 10 },
  contacts: { flexDirection: 'row' },
  marginRight: { marginRight: 10 },
  aboutMe: {}
})

export default Bio
