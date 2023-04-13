import * as React from 'react'
import Svg, { Path, Circle, G } from 'react-native-svg'

export default function FeedbackIcon(props: any) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      width={40}
      height={40}
      viewBox='0 0 64 64'
      {...props}
    >
      <G fill='#231F20'>
        <Path d='M60 0H16c-2.211 0-4 1.789-4 4v6H4c-2.211 0-4 1.789-4 4v30c0 2.211 1.789 4 4 4h7a1 1 0 0 1 1 1v11a3.996 3.996 0 0 0 4 4 3.998 3.998 0 0 0 2.828-1.172l14.156-14.156S33.5 48 34.656 48H50c2.211 0 4-1.789 4-4v-8h6c2.211 0 4-1.789 4-4V4c0-2.211-1.789-4-4-4zm-8 44a2 2 0 0 1-2 2H34.656C32.709 46 32 47 32 47L18 61c-2.141 2.141-4 .391-4-1V48a2 2 0 0 0-2-2H4a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h46a2 2 0 0 1 2 2v30zm10-12a2 2 0 0 1-2 2h-6V14c0-2.211-1.789-4-4-4H14V4a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2v28z' />
        <Path d='M13 24h13a1 1 0 1 0 0-2H13a1 1 0 1 0 0 2zM41 28H13a1 1 0 1 0 0 2h28a1 1 0 1 0 0-2zM34 34H13a1 1 0 1 0 0 2h21a1 1 0 1 0 0-2z' />
      </G>
    </Svg>
  )
}
