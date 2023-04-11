import { ScrollView, StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'
import colors from '../../../constants/colors'
import { ProfileStackTypes } from '../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<ProfileStackTypes, 'ServicesScreen'>

export default function ServicesScreen({ navigation }: Props) {
  return (
    <>
      <FAB
        animated
        style={styles.fab}
        icon='plus'
        onPress={() => navigation.navigate('ServiceAddScreen')}
      />
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.defaultContainerColor
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
})
