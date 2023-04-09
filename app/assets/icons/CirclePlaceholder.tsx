import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function CirclePlaceholder(props: any) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={45}
      height={45}
      fill='lightgray'
      viewBox='0 0 24 24'
      {...props}
    >
      <Path fill='#fff' d='M0 0h24v24H0z' />
      <Path
        fill='#323232'
        fillRule='evenodd'
        d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z'
        clipRule='evenodd'
      />
    </Svg>
  )
}
