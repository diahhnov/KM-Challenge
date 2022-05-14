import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../../assets/color';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  containnerLoginText: {
    marginTop: moderateScale(-50),
  },
  LoginText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLOR.Secondary_Color,
  },
  containerInput: {
    height: moderateScale(300),
    backgroundColor: COLOR.white,
  },
  inSty: {
    width: moderateScale(200),
    marginBottom: moderateScale(18),
  },
  // emailInput: focussed => ({
  //   ...inSty(focussed),
  // }),
  // passwordInput: focussed => ({
  //   ...inSty(focussed),
  // }),
  input: {
    width: moderateScale(200),
    color: COLOR.purple,
  },
  buttonLogin: {
    width: moderateScale(200),
    padding: moderateScale(12),
    marginVertical: moderateScale(15),
    borderRadius: 5,
    backgroundColor: COLOR.Secondary_Color,
  },
  textbuttonLogin: {
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    textAlign: 'center',
    color: COLOR.white,
  },
  ask: {
    textAlign: 'center',
  },
  Register: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    marginTop: moderateScale(3),
  },
});
export default styles;
