import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IUserServiceDocument } from '../../../../../../../store/modules/api/goodsAndServices/types'

interface IProps {
  item: IUserServiceDocument
  onPress: (arg0: IUserServiceDocument) => void
}

export default function ServiceItem({ item, onPress }: IProps) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => onPress(item)} style={styles.firstRow}>
        <Text style={styles.title}>{item.data.title}</Text>
        <Text style={styles.price}>{item.data.price}</Text>
        <Text style={styles.duration}>{item.data.duration}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { marginVertical: 10, borderWidth: 1, paddingVertical: 10 },
  firstRow: { flexDirection: 'row' },
  title: { width: '60%' },
  price: { width: '20%' },
  duration: { width: '20%' }
})
