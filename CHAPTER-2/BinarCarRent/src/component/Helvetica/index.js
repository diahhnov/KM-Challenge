import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLOR} from '../../helpers/color';

export default function Helvetica({
  type = 'Regular',
  size = 12,
  color = COLOR.primaryBlack,
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
