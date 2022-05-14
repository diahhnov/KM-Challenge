import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

export const AkunStyle = StyleSheet.create({
  tampilanbar: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(4),
    backgroundColor: 'white',
  },
  teksAkun: {marginTop: moderateScale(20)},
  latartampilan: {justifyContent: 'space-evenly', flex: 1},
  gambar: {height: moderateScale(192)},
  teks: {marginTop: moderateScale(20)},
  button: {alignSelf: 'center', marginTop: moderateScale(10)},
});
