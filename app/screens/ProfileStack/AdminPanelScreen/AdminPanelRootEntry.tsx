import React from 'react'
import { View, ActivityIndicator, SafeAreaView, Pressable, StyleSheet } from 'react-native'
import { useProfileDataQuery } from '../../../store/modules/user/userSlice'
import NewUserBlock from './blocks/NewUserBlock'
import AdminPanelPage from './AdminPanelScreen'
import colors from '../../../constants/colors'

export default function AdminPanelEntry({ navigation }: any) {
  const { data, error, isLoading } = useProfileDataQuery({})

  console.log('~~~~~~~~~~~~~~  data?.galleryPhotos?.length', data?.galleryPhotos?.length)

  if (isLoading)
    return (
      <View style={{ justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    )

  if (!data) {
    navigation.navigate('ProfileScreen')
    return (
      <View style={styles.wrapper}>
        <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
          <NewUserBlock />
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <AdminPanelPage data={data} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.defaultContainerColor
  }
})
