import React from 'react'
import { View, ActivityIndicator, SafeAreaView, Pressable, StyleSheet } from 'react-native'
import { useProfileDataQuery } from '../../../../store/modules/api/userData/userDataSlice'
import { useAppDispatch } from '../../../../store/hooks'
import NewUserBlock from './blocks/NewUserBlock'
import AdminPanelPage from '../../../pages/adminPage/AdminPanelPage'
import colors from '../../../../config/colors'


export default function AdminPanelScreen({ navigation }: any) {
  const dispatch = useAppDispatch()
  const { data, error, isLoading, refetch: fetchProfile } = useProfileDataQuery({})
  
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
      <SafeAreaView />
      <AdminPanelPage data={data} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.defaultContainerColor
  }
})
