import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../assets/color';

const styles = StyleSheet.create({
  containner: {
    flex: 1,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: moderateScale(10),
  },
  containnerImage: {
    marginBottom: moderateScale(10),
  },
  Image: {
    width: moderateScale(300),
    height: moderateScale(150),
    resizeMode: 'contain',
  },
  containnerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.white,
  },
  containnerButtonList: {
    backgroundColor: COLOR.white,
  },
  buttonList: {
    backgroundColor: COLOR.Secondary_Color,
    height: moderateScale(30),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(300),
    borderRadius: moderateScale(10),
  },
  button: {
    backgroundColor: COLOR.Secondary_Color,
    height: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(200),
    borderRadius: moderateScale(30),
  },
});

export default styles;
