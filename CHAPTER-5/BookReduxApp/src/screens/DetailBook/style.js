import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../assets/color';

const styles = StyleSheet.create({
  scrollContainner: {
    backgroundColor: COLOR.Secondary_Color,
  },
  headerTombol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: moderateScale(5),
  },
  goback: {
    padding: moderateScale(5),
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: moderateScale(5),
  },
  headerDetail: {
    flexDirection: 'row',
    backgroundColor: COLOR.white,
    padding: moderateScale(10),
    margin: moderateScale(10),
    elevation: 1,
    borderRadius: moderateScale(10),
  },
  coverBook: {
    resizeMode: 'cover',
    width: moderateScale(100),
    height: moderateScale(130),
  },
  headerBook: {
    paddingHorizontal: moderateScale(10),
    backgroundColor: COLOR.white,
    width: moderateScale(230),
  },
  titleBook: {
    fontSize: moderateScale(15),
    marginBottom: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
  },
  headerBuy: {
    flexDirection: 'row',
    backgroundColor: COLOR.white,
    padding: moderateScale(15),
    margin: moderateScale(10),
    elevation: 2,
    borderRadius: moderateScale(10),
    justifyContent: 'space-around',
  },
  Rating: {alignItems: 'center'},
  headerRat: {flexDirection: 'row'},
  detailBook: {textAlign: 'center'},
  Buying: {
    justifyContent: 'center',
    backgroundColor: COLOR.Secondary_Color,
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(7),
    height: moderateScale(37),
  },
  headerSip: {
    marginTop: moderateScale(5),
    backgroundColor: COLOR.white,
    padding: moderateScale(20),
    marginHorizontal: moderateScale(10),
    elevation: 2,
    borderRadius: moderateScale(10),
  },
  synopsis: {
    lineHeight: 25,
    textAlign: 'justify',
  },
});

export default styles;
