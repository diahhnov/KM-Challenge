import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../assets/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR.Secondary_Color,
  },
  name: {
    color: COLOR.Primer_Color,
  },
  avatar: {
    width: moderateScale(200),
    height: moderateScale(200),
    alignSelf: 'center',
    borderRadius: moderateScale(100),
    margin: moderateScale(15),
  },
  progressBar: {
    flexDirection: 'row',
    marginVertical: moderateScale(15),
    marginHorizontal: moderateScale(15),
  },
  progressBarText: {
    color: COLOR.Primer_Color,
    alignSelf: 'center',
  },
  speed: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(50),
  },
  speedItem: {
    width: moderateScale(50),
  },
  actionButtonsOther: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: moderateScale(15),
  },
  pauseOrPlayButton: {
    marginRight: moderateScale(10),
    marginLeft: moderateScale(10),
    width: moderateScale(50),
  },
  button: {
    justifyContent: 'center',
  },
});

export default styles;
