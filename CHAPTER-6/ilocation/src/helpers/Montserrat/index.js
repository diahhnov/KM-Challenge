import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../assets/color';

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
      color,
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
