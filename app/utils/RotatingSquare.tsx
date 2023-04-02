import React, { useRef } from 'react';
import { View, Animated, StyleProp, ViewStyle } from 'react-native';

interface RotatingSquareProps {
  size: number;
  degree: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const RotatingSquare = ({ size, degree, children, style }: RotatingSquareProps) => {
  const rotation = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(rotation, {
      toValue: degree,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [degree]);

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[
        {
          width: size,
          height: size,
          transform: [{ rotate: interpolatedRotation }],
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default RotatingSquare;
