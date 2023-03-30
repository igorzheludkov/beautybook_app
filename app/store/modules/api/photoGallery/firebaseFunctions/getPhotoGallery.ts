import storage from '@react-native-firebase/storage'
import { IPhotoGallery } from '../../../../../models/IPhotoGallery'

export default async function getPhotoGallery(
  userId: string,
  page: string,
  folder: string,
  subFolder: string
) {
  if (!userId) return null

  const toTimestamp = (time: string) => new Date(time).getTime()

  const photosRef = storage().ref(`${folder}/${userId}/${subFolder}`)

  let photosArray: IPhotoGallery[] = []

  await photosRef.list().then((item) => {
    const promises = item.items.map(async (el) => {
      const url = await el.getDownloadURL()
      return el.getMetadata().then((meta) => ({ url, timeUpdated: toTimestamp(meta.updated), id: el.name }))
    })

    return Promise.all(promises).then((values) => {
      photosArray = values
    })
  })

  return photosArray.sort((a, b) => b.timeUpdated - a.timeUpdated)
}
