import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { IProfileForm } from '../../../../../models/IProfileForm'
import { Avatar, Button, Modal, Portal } from 'react-native-paper'
import Location from '../../../../../assets/icons/Location'
import { useGetPhotosQuery } from '../../../../../store/modules/api/photoGallery/photoGallerySlice'
import { useState } from 'react'

interface IProps {
  user: IProfileForm
  onPress: (arg0: string) => void
}

export default function UserCard({ user, onPress }: IProps) {
  const { data: photos } = useGetPhotosQuery({ userId: user.id, page: 0 })
  const [showPhoto, setShowPhoto] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const photosPlaceholder = Array(3)
    .fill('')
    .map((_, index) => ({ id: index, url: '' }))
  const photosData = photos ? photos : photosPlaceholder

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => onPress(user.id as string)}>
        <View key={user.phone} style={styles.container}>
          <Avatar.Image size={90} source={{ uri: user.avatar }} />
          <View style={styles.cardContent}>
            <View style={{}}>
              <Text style={styles.title}>{user.name}</Text>
              <Text>{user.aboutMe}</Text>
            </View>
            <Pressable style={styles.location}>
              <Location fill={'gray'} />
              <Text style={styles.locationText}>{user.street}</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
      <ScrollView horizontal style={styles.photoGallery}>
        {photosData?.map((pic, index) => (
          <Pressable
            style={{ left: -10 * index }}
            key={pic.id}
            onPress={() => {
              setPhotoIndex(index)
              setShowPhoto(true)
            }}
          >
            {pic.url ? (
              <Avatar.Image size={45} source={{ uri: pic.url }} />
            ) : (
              <View style={styles.photoPlaceholder} />
            )}
          </Pressable>
        ))}
      </ScrollView>
      <Portal>
        <Modal
          visible={showPhoto}
          onDismiss={() => setShowPhoto(false)}
          contentContainerStyle={styles.photoGalleryContent}
        >
          {photos && <Avatar.Image size={350} source={{ uri: photos[photoIndex].url }} />}
          <Button onPress={() => setShowPhoto(false)}>Close</Button>
        </Modal>
      </Portal>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { paddingBottom: 30 },
  container: { flexDirection: 'row', marginVertical: 10 },
  cardContent: { marginLeft: 10, flex: 1, marginRight: 10, justifyContent: 'space-between' },
  title: { fontSize: 20, paddingBottom: 10 },
  aboutMe: {},
  location: { width: '90%', flexDirection: 'row', alignItems: 'center' },
  locationText: { marginLeft: 5 },
  photoGallery: {},
  photoGalleryContent: { alignItems: 'center' },
  photoPlaceholder: { width: 45, height: 45, backgroundColor: 'lightgray', borderRadius: 50 }
})
