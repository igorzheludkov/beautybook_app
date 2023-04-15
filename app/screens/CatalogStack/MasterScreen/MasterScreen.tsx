import React from 'react'
import { ActivityIndicator, StyleSheet, View, ScrollView, Text } from 'react-native'
import Bio from './blocks/Bio'
import { useMasterDataQuery } from '../../../store/modules/api/masterData/masterDataSlice'
import SubScreenLink from './blocks/SubScreenLink'
import ServicesIcon from '../../../assets/icons/ServicesIcon'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CatalogStackTypes, FavoritesStackTypes } from '../../../models/INavigationStack'
import colors from '../../../constants/colors'
import PhotoGalleryIcon from '../../../assets/icons/PhotoGalleryIcon'
import FeedbackIcon from '../../../assets/icons/FeedbackIcon'
import ExperienceIcon from '../../../assets/icons/ExperienceIcon'
import HighlightMain from '../../../components/atoms/HighlightMain'
import Divider from '../../../components/atoms/Divider'
import SubscribeBlock from './blocks/SubscribeBlock'
import { useGetItemsQuery } from '../../../store/modules/api/goodsAndServices/goodsAndServicesSlice'
import TitleHeader from '../../ProfileStack/Services/ServicesScreen/blocks/TitleHeader'
import ServiceItem from './SubScreens/MasterServices/ServicesScreen/blocks/ServiceItem'
import LocationAndSchedule from './blocks/LocationAndSchedule'
import { Button } from 'react-native-paper'

type Props = NativeStackScreenProps<CatalogStackTypes | FavoritesStackTypes, 'MasterScreen'>

export default function MasterScreen({ route }: Props) {
  const nav = useNavigation<Props['navigation']>()
  const { data } = useMasterDataQuery(route.params.masterId)
  const { data: servicesData } = useGetItemsQuery({ userId: route.params.masterId })

  const servicesOnPage = 3

  if (!data) return <ActivityIndicator />

  function navTo(screen: string) {
    nav.navigate(screen, { masterId: data?.id })
  }

  return (
    <ScrollView style={styles.wrapper}>
      <Bio data={data} />
      <SubscribeBlock masterData={data} />
      <Divider height={10} />
      <View style={styles.locationAndTime}>
        <LocationAndSchedule masterData={data} />
      </View>
      <Divider height={20} />
      <View style={styles.subLinks}>
        <SubScreenLink onPress={() => navTo('MasterServScreen')} icon={<ServicesIcon />} label='Послуги' />
        <SubScreenLink
          onPress={() => navTo('MasterPhotoGalleryScreen')}
          icon={<PhotoGalleryIcon />}
          label='Фотогалерея'
        />
        <SubScreenLink
          onPress={() => navTo('MasterFeedbackScreen')}
          icon={<FeedbackIcon />}
          label='Відгуки'
        />
        <SubScreenLink
          onPress={() => navTo('MasterExperienceScreen')}
          icon={<ExperienceIcon />}
          label='Мій досвід'
        />
      </View>
      <Divider height={15} />
      {data.highlight && (
        <HighlightMain title={data.highlight?.title} description={data.highlight?.description} />
      )}
      <Divider height={15} />

      {Boolean(servicesData?.length) && (
        <>
          <View style={styles.servicesContainer}>
            <TitleHeader />
            {servicesData?.slice(0, servicesOnPage).map((item) => (
              <ServiceItem key={item.id} item={item} onPress={() => {}} />
            ))}
          </View>
          <Button style={styles.allServicesButton} mode='contained' onPress={() => navTo('MasterServScreen')}>
            Дивитись всі послуги
          </Button>
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.defaultContainerColor
  },
  locationAndTime: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 },
  subLinks: { paddingHorizontal: 5, flexDirection: 'row', justifyContent: 'space-around' },
  servicesContainer: { paddingHorizontal: 10 },
  allServicesButton: { marginHorizontal: 10, marginVertical: 20 }
})
