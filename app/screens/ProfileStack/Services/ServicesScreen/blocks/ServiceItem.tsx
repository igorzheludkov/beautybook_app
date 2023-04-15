import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, Pressable } from 'react-native'
import { IUserServiceDocument } from '../../../../../store/modules/api/goodsAndServices/types'
import colors from '../../../../../constants/colors'

interface IProps {
  item: IUserServiceDocument
  onPress: (arg0: IUserServiceDocument) => void
}

export default function ServiceItem({ item, onPress }: IProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.firstRow}>
        <TouchableOpacity onPress={() => onPress(item)} style={styles.leftCol}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{item.data.title}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.rightCol}>
          <View style={styles.priceDurationContainer}>
            <View style={styles.price}>
              <Text style={styles.priceText}>{item.data.price} грн</Text>
            </View>
            <View style={styles.duration}>
              <Text style={styles.durationText}>{item.data.duration} хв</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal>
          {item.data.images?.map((image) => (
            <Image source={{ uri: image.url }} style={styles.image} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 5,
    backgroundColor: colors.textInputBg,
    borderRadius: 10
  },
  firstRow: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 10
  },
  leftCol: {
    flexDirection: 'row',
    flex: 1
  },
  rightCol: {
    width: '40%',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  priceDurationContainer: { flexDirection: 'row' },
  title: {
    paddingHorizontal: 10
  },
  titleText: {
    fontWeight: '600'
  },
  price: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  priceText: {},
  duration: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  durationText: {},
  image: { width: 80, height: 80, borderRadius: 10, marginRight: 2 },
  imagesContainer: { flexDirection: 'row', overflow: 'hidden', borderRadius: 10 }
})
