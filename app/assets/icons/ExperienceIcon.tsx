import * as React from 'react'
import Svg, { Path, Circle, G } from 'react-native-svg'

export default function ExperienceIcon(props: any) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      className='icon'
      viewBox='0 0 1024 1024'
      {...props}
    >
      <Path fill='#E8EAF6' d='M85.333 192h853.334v640H85.333z' />
      <Path
        fill='#5C6BC0'
        d='M640 725.333h59.733L593.067 618.667 533.333 678.4 640 785.067zm-256 0h-59.733l106.666-106.666 59.734 59.733L384 785.067z'
      />
      <Path
        fill='#9FA8DA'
        d='M234.667 320h554.666v85.333H234.667zM512 490.667c-59.733 0-106.667 46.933-106.667 106.666S452.267 704 512 704s106.667-46.933 106.667-106.667S571.733 490.667 512 490.667zm0 170.666c-36.267 0-64-27.733-64-64s27.733-64 64-64 64 27.734 64 64-27.733 64-64 64z'
      />
      <Path
        fill='#9FA8DA'
        d='M64 170.667v682.666h896V170.667H64zm853.333 576c-36.266 0-64 27.733-64 64H170.667c0-36.267-27.734-64-64-64V277.333c36.266 0 64-27.733 64-64h682.666c0 36.267 27.734 64 64 64v469.334z'
      />
    </Svg>
  )
}
