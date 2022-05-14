import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../assets/color';

const styles = StyleSheet.create({
  containner: {
    width: moderateScale(130),
    height: moderateScale(220),
    marginVertical: moderateScale(10),
    marginLeft: moderateScale(10),
    borderRadius: moderateScale(2),
    elevation: 5,
    backgroundColor: COLOR.Secondary_Color,
  },
  coverbook: {
    height: moderateScale(120),
    width: moderateScale(120),
    marginHorizontal: moderateScale(5),
  },
  conntainDetail: {
    padding: moderateScale(10),
    alignContent: 'space-around',
  },
  titleRec: {
    fontWeight: 'bold',
  },
  ratRec: {
    width: moderateScale(60),
  },
  header: {
    margin: moderateScale(10),
    flexDirection: 'row',
    marginTop: moderateScale(10),
  },
  headerTeks: {
    fontWeight: 'Bold',
    fontSize: moderateScale(20),
  },
  headerRecPop: {
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  teksRecPop: {
    fontSize: moderateScale(16),
    fontWeight: 'Bold',
  },
  teksRec: {
    fontSize: moderateScale(16),
    fontWeight: 'Bold',
    margin: moderateScale(10),
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.Secondary_Color,
  },
  teksLoad: {
    color: COLOR.white,
    fontWeight: 'bold',
  },
  containnerPic: {
    flexDirection: 'row',
    backgroundColor: COLOR.Secondary_Color,
    padding: moderateScale(10),
    margin: moderateScale(10),
    elevation: 2,
    borderRadius: moderateScale(10),
  },
  pic: {
    height: moderateScale(130),
    width: moderateScale(100),
  },
  popContainer: {
    paddingHorizontal: moderateScale(10),
    width: moderateScale(230),
    backgroundColor: COLOR.Secondary_Color,
  },
  containnerRat: {
    width: moderateScale(50),
  },
  containnerTittle: {
    marginBottom: moderateScale(10),
  },
  titlePop: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
});
export default styles;
