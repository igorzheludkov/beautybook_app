import React from 'react'
import { View, ActivityIndicator, SafeAreaView, Pressable, StyleSheet } from 'react-native'
import { useProfileDataQuery } from '../../../store/modules/api/userData/userDataSlice'
import NewUserBlock from './components/blocks/NewUserBlock'
import AdminPanelPage from './components/AdminPanelMain'
import colors from '../../../constants/colors'

export default function AdminPanelEntry({ navigation }: any) {
  const { data, error, isLoading } = useProfileDataQuery({})

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
