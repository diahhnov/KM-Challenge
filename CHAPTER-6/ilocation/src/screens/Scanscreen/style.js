import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../assets/color';

const styles = StyleSheet.create({
  wrapperCam: {
    flex: 1,
    backgroundColor: COLOR.grey,
  },
  cam: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  fitur: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(16),
    marginTop: moderateScale(16),
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  fiturback: {
    width: moderateScale(35),
    height: moderateScale(35),
    backgroundColor: COLOR.white,
    borderRadius: moderateScale(35),
  },
  fitBack: {
    color: COLOR.Primer_Color,
  },
  bar: {
    height: moderateScale(200),
    backgroundColor: COLOR.white,
    paddingHorizontal: moderateScale(16),
  },
  barwrapp: {
    marginBottom: moderateScale(10),
    marginTop: moderateScale(8),
    alignItems: 'center',
  },
  slidein: {
    width: moderateScale(40),
    height: moderateScale(3),
    backgroundColor: COLOR.whiteen,
    marginVertical: moderateScale(1),
  },
  slideout: {
    width: moderateScale(40),
    height: moderateScale(3),
    backgroundColor: COLOR.whiteen,
    marginVertical: moderateScale(1),
  },
  isicode: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: COLOR.Primer_Color,
    textAlign: 'center',
  },
});

export default styles;
