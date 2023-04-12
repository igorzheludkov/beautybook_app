import storage from '@react-native-firebase/storage'
import { IPhotoGallery } from '../../../../../models/IPhotoGallery'
import { IGetPhotosQuery } from '../types'

export default async function getPhotoGallery(params: IGetPhotosQuery) {
  const { userId, page, rootFolder, groupFolder, itemFolder = '' } = params
  if (!userId) return null

  const toTimestamp = (time: string) => new Date(time).getTime()

  const photosRef = storage().ref(`${rootFolder}/${userId}/${groupFolder}/${itemFolder}`)

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
