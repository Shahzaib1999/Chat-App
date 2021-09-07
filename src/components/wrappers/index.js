import React from 'react';
import * as Animatable from 'react-native-animatable';

export const AnimatedWrapper = props => {
  const {children, style, animation, delay, duration} = props;
  return (
    <Animatable.View
      animation={animation}
      delay={delay}
      duration={duration}
      style={style}>
      {children}
    </Animatable.View>
  );
};
