import * as React from 'react'
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg'

export default function FacebookIcon(props: any) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 46 46"
    {...props}
  >
    <Circle cx={24} cy={24} r={20} fill="#3B5998" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M29.315 16.958c-.623-.125-1.465-.218-1.995-.218-1.433 0-1.526.623-1.526 1.62v1.776h3.583l-.312 3.678h-3.271V35h-4.488V23.814H19v-3.678h2.306v-2.275c0-3.116 1.465-4.861 5.142-4.861 1.277 0 2.212.187 3.427.436l-.56 3.522Z"
      clipRule="evenodd"
    />
  </Svg>
  )
}
