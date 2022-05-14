import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export const DaftarStyle = StyleSheet.create({
  latarDaftar: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(4),
    backgroundColor: 'white',
  },
  teksdaftar: {marginVertical: moderateScale(20)},
});
