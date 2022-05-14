import {StyleSheet} from 'react-native';
import {COLOR} from '../../helpers/color';
import {moderateScale} from 'react-native-size-matters';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export const HomeStyle = StyleSheet.create({
  bg: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: moderateScale(16),
    backgroundColor: COLOR.lightPurple,
    height: moderateScale(150),
  },
  image: {
    height: moderateScale(28),
    width: moderateScale(28),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  car: {
    backgroundColor: COLOR.darkBlue,
    marginTop: moderateScale(-70),
    paddingLeft: moderateScale(20),
    marginHorizontal: widthPercentageToDP(2),
    borderRadius: moderateScale(8),
    flexDirection: 'row',
  },
  posisi: {
    justifyContent: 'center',
    width: moderateScale(180),
  },
  posisiteks: {marginBottom: moderateScale(10)},
  tampilanmobil: {
    height: moderateScale(140),
    justifyContent: 'flex-end',
  },
  icon: {height: moderateScale(85)},
  barfitur: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 16,
    marginTop: 16,
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  truk: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEF1DF',
  },
  tekstruk: {textAlign: 'center', marginTop: 6},
  box: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEF1DF',
  },
  teksbox: {textAlign: 'center', marginTop: 6},
  key: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEF1DF',
  },
  tekskey: {textAlign: 'center', marginTop: 6},
  camera: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEF1DF',
  },
  tekscamera: {textAlign: 'center', marginTop: 6},
  teksDaftarmobil: {marginBottom: moderateScale(24)},
  latarbar: {paddingHorizontal: 13},
});
