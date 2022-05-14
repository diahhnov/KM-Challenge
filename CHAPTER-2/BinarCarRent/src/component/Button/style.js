import {StyleSheet} from 'react-native';
import {COLOR} from '../../helpers/color';
import {moderateScale} from 'react-native-size-matters';

export const Stylebutton = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primaryGreen,
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
