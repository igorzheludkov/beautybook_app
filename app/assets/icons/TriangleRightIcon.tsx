import React from 'react'
import { Svg, Path, Circle } from 'react-native-svg'

const TriangleRightIcon = ({ size = 40, fill = 'gray' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 31 31">
      <Circle cx="15.0588" cy="15.0587" r="15" transform="rotate(-180 15.0588 15.0587)" fill={fill} />
      <Path d="M20.5573 14.1089C21.196 14.4954 21.2014 15.4199 20.5674 15.8139L12.146 21.0461C11.4821 21.4586 10.6229 20.9842 10.6183 20.2026L10.5573 9.83754C10.5527 9.05595 11.4063 8.57146 12.075 8.9761L20.5573 14.1089Z" fill="white" />
    </Svg>
  );
}

export default TriangleRightIcon
