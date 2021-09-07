import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {height, width} from 'react-native-dimension';

import {colors, sizes} from '../../services';

export const ButtonColored = props => {
  const {text, onPress, buttonColor, buttonStyle, textStyle, tintColor} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          marginHorizontal: width(5),
          borderRadius: sizes.buttonRadius,
          height: height(7),
          backgroundColor: buttonColor ? buttonColor : colors.appColor1,
        },
        buttonStyle,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={[
            {color: tintColor ? tintColor : colors.appTextColor5},
            textStyle,
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
