import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from '../../assets/color';
import {moderateScale} from 'react-native-size-matters';

export default function Montserrat({
  type = 'Medium',
  size = moderateScale(12),
  color = COLOR.Primer_Color,
  align = 'left',
  style = {},
  children,
}) {
  const Style = StyleSheet.create({
    text: {
      fontFamily: `Helvetica-${type}`,
      fontSize: size,
      textAlign: align,
      color: color,
      ...style,
    },
  });
  return (
    <View>
      <Text ellipsizeMode="tail" style={Style.text}>
        {children}
      </Text>
    </View>
  );
}
