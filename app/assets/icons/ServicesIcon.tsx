import * as React from 'react'
import Svg, { Path, Circle, Rect } from 'react-native-svg'
export default function ServicesIcon(props: any) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      className='icon line-color'
      data-name='Line Color'
      viewBox='0 0 24 24'
      {...props}
    >
      <Path
        d='M7.45 8h.1'
        style={{
          fill: 'none',
          stroke: '#2ca9bc',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2
        }}
      />
      <Path
        d='M7.45 12h.1M7.45 16h.1'
        data-name='secondary-upstroke'
        style={{
          fill: 'none',
          stroke: '#2ca9bc',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2
        }}
      />
      <Path
        d='M12 8h5m-5 4h5m-5 4h5'
        style={{
          fill: 'none',
          stroke: '#2ca9bc',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2
        }}
      />
      <Rect
        width={20}
        height={20}
        x={2}
        y={2}
        rx={4}
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 1
        }}
      />
    </Svg>
  )
}
