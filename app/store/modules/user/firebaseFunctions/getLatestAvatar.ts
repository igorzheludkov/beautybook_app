import storage from '@react-native-firebase/storage'

export default async function getLatestAvatar(userId: string) {
  if (!userId) return null

  const toTimestamp = (time: string) => new Date(time).getTime()

  const avatarFolderRef = storage().ref(`user/${userId}/`)

  let photosArray: Array<{ url: string; timeUpdated: number }> = []

  await avatarFolderRef.list().then((item) => {
    const promises = item.items.map(async (el) => {
      const url = await el.getDownloadURL()
      return el.getMetadata().then((meta) => ({ url, timeUpdated: toTimestamp(meta.updated) }))
    })

    return Promise.all(promises).then((values) => {
      photosArray = values
    })
  })

  return photosArray.sort((a, b) => b.timeUpdated - a.timeUpdated)[0].url
}
