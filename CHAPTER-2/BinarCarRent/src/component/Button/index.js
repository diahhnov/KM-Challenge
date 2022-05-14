import React from 'react';
import Helvetica from '../Helvetica';
import {Stylebutton} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';

const Button = ({title, width = 0, style = {}}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[Stylebutton.container, {width: width}, {...style}]}>
      <Helvetica size={moderateScale(14)} type="ExtraBold" color="white">
        {title}
      </Helvetica>
    </TouchableOpacity>
  );
};

export default Button;
