import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

interface Props {
  fill: string
}

export default function Location(props: Props) {
  return (
    <Svg
    width={15}
    height={15}
    viewBox="2 0 18 17"
    {...props}
  >
    <Path d="M8.5.5A5.506 5.506 0 0 0 3 6c0 4.373 4.913 10.086 5.122 10.328l.378.435.378-.436C9.087 16.086 14 10.373 14 6 14 2.967 11.532.5 8.5.5zm0 14.715C7.354 13.791 4 9.336 4 6c0-2.481 2.019-4.5 4.5-4.5S13 3.519 13 6c0 3.333-3.354 7.791-4.5 9.215zm0-12.076c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
  </Svg>
  )
}
