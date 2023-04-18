import React from 'react'
import { StyleSheet, View, Text, ScrollView, Pressable, Linking } from 'react-native'

interface IProps {}

export default function TermsAndConditions(props: IProps) {
  function readTermsOfService() {
    Linking.openURL(
      'https://doc-hosting.flycricket.io/beautybook-terms-of-use/9ce60323-8e00-4e49-a75c-f2201a3b7bab/terms'
    )
  }

  function readPrivacyPolicy() {
    Linking.openURL(
      'https://doc-hosting.flycricket.io/beautybook-privacy-policy/7d10c5fe-da09-4e59-b783-a39d746be4f0/privacy'
    )
  }
  return (
    <View style={styles.wrapper}>
      <Text>Реєструючись, ви погоджуєтесь з </Text>
      <Pressable onPress={readTermsOfService}>
        <Text style={styles.link}>Умовами використання</Text>
      </Pressable>
      <Text> та </Text>
      <Pressable onPress={readPrivacyPolicy}>
        <Text style={styles.link}>Політикою конфіденційності</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', flexWrap: 'wrap' },
  link: { textDecorationLine: 'underline', color: 'blue' }
})
