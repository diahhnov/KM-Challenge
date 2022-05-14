import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../../assets/color';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR.white,
    padding: moderateScale(50),
  },
  teksRegis: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Regis: {
    fontWeight: 'bold',
    fontSize: moderateScale(25),
  },
  ImageCeklis: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(100),
  },
  Ceklis: {
    height: moderateScale(100),
    width: moderateScale(100),
  },
  teksVerf: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(50),
  },
  Verf: {
    textAlign: 'center',
    fontSize: moderateScale(25),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(150),
    backgroundColor: COLOR.Secondary_Color,
    borderRadius: moderateScale(8),
  },
  teksbutton: {
    fontSize: moderateScale(25),
    padding: moderateScale(10),
    fontWeight: 'bold',
    color: COLOR.white,
  },
});

export default styles;
