import { ScrollView, StyleSheet } from 'react-native'
import colors from '../../../../../../constants/colors'
import { CatalogStackTypes } from '../../../../../../models/INavigationStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useGetItemsQuery } from '../../../../../../store/modules/api/goodsAndServices/goodsAndServicesSlice'
import ServiceItem from './blocks/ServiceItem'
import { IUserServiceDocument } from '../../../../../../store/modules/api/goodsAndServices/types'
import TitleHeader from '../../../../../ProfileStack/Services/ServicesScreen/blocks/TitleHeader'

type Props = NativeStackScreenProps<CatalogStackTypes, 'MasterServScreen'>

export default function MasterServScreen({ navigation, route }: Props) {
  const { data } = useGetItemsQuery({ userId: route.params.masterId })

  function onServicePress(data: IUserServiceDocument) {
    // navigation.navigate('ServiceInfoScreen', { item: data })
  }
  return (
    <>
      <ScrollView style={styles.wrapper}>
        <TitleHeader />
        {data?.map((item) => (
          <ServiceItem key={item.id} item={item} onPress={onServicePress} />
        ))}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.defaultContainerColor
  }
})
