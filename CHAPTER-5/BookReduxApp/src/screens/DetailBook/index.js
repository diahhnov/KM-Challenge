import {
  View,
  Share,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NumberFormat from 'react-number-format';
import {moderateScale} from 'react-native-size-matters';
import {Rating} from 'react-native-ratings';
import PushNotification from 'react-native-push-notification';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Montserrat from '../../components/Montserrat';

function DetailBook(props) {
  const {detailBook} = useSelector(state => state.home);
  const navigation = useNavigation();

  const loveFitur = value => {
    PushNotification.localNotification({
      channelId: 'notification-channel',
      title: 'You loved it',
      message: value,
    });
  };

  const shareIt = async () => {
    try {
      const res = await Share.share({
        message: 'ayoo bagikan',
      });
      if (res.action === Share.sharedAction) {
        if (res.activityType) {
          // activity type of result.activityType
        } else {
          // shared
        }
      } else if (res.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const [refresh, setRefresh] = useState(false);
  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
      style={styles.scrollContainner}>
      <View style={styles.headerTombol}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-circle"
            size={moderateScale(35)}
            style={styles.goback}
          />
        </TouchableOpacity>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => loveFitur(props.title)}>
            <Ionicons name="heart-circle" size={moderateScale(35)} />
          </TouchableOpacity>
          <TouchableOpacity onPress={shareIt}>
            <Ionicons name="share-outline" size={moderateScale(35)} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerDetail}>
        <View>
          <Image
            source={{uri: `${detailBook.cover_image}`}}
            style={styles.coverBook}
          />
        </View>
        <View style={styles.headerBook}>
          <Montserrat style={styles.titleBook}>{detailBook.title}</Montserrat>
          <Montserrat>Author : {detailBook.author}</Montserrat>
          <Montserrat>Publisher : {detailBook.publisher}</Montserrat>
          <Montserrat>Stock : {detailBook.stock_available}</Montserrat>
        </View>
      </View>
      <View style={styles.headerBuy}>
        <View style={styles.Rating}>
          <Montserrat>Rating</Montserrat>
          <View style={styles.headerRat}>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={moderateScale(14)}
              startingValue={detailBook.average_rating / 2}
              readonly={true}
            />
          </View>
        </View>
        <View>
          <Montserrat>Total Sale</Montserrat>
          <Montserrat style={styles.detailBook}>
            {detailBook.total_sale}
          </Montserrat>
        </View>
        <TouchableOpacity style={styles.Buying}>
          <NumberFormat
            value={detailBook.price}
            displayType="text"
            thousandSeparator={true}
            prefix="Buy Rp. "
            renderText={formattedValue => (
              <Montserrat style={{color: '#fff'}}>{formattedValue}</Montserrat>
            )}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerSip}>
        <Montserrat style={{fontSize: moderateScale(14), fontWeight: 'bold'}}>
          Overview
        </Montserrat>
        <Montserrat style={styles.synopsis}>{detailBook.synopsis}</Montserrat>
      </View>
    </ScrollView>
  );
}

export default DetailBook;
