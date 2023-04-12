import { useState } from 'react'
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker'

type ImagePickerHookReturnType = [
  ImagePickerResponse['assets'],
  () => void, // handlePickImageFromCamera
  (selectionLimit?: number) => void, // handlePickImagesFromGallery
  () => void, // resetState
  (id: string | undefined) => void // remove Element
]

const useImagePicker = (): ImagePickerHookReturnType => {
  const [images, setImages] = useState<ImagePickerResponse['assets']>([])

  const resetState = () => setImages([])

  const removeTempImage = (id: string | undefined) => {
    id && setImages(images?.filter((item) => item.fileName !== id))
  }

  const handlePickImageFromCamera = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.errorCode) {
        console.log(`ImagePicker Error: ${response.errorCode}`)
      } else {
        // @ts-ignore
        setImages((prev) => [...prev, ...response?.assets])
      }
    })
  }

  const handlePickImagesFromGallery = (selectionLimit?: number) => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: selectionLimit ?? 0, // set to 0 for no limit
        maxWidth: 500,
        maxHeight: 500
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker')
        } else if (response.errorCode) {
          console.log(`ImagePicker Error: ${response.errorCode}`)
        } else {
          setImages((prev) => [...prev, ...response?.assets])
        }
      }
    )
  }

  return [images, handlePickImageFromCamera, handlePickImagesFromGallery, resetState, removeTempImage]
}

export default useImagePicker
