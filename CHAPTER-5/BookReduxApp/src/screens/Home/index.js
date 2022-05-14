import {
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import NumberFormat from 'react-number-format';
import {Rating} from 'react-native-ratings';
import {FlatList} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import Montserrat from '../../components/Montserrat';
import {getBookData, getDetailBooks} from './utils/action';
import styles from './style';
import {useCallback} from 'react';

function Home() {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.global);
  const {bookPopular = []} = useSelector(state => state.home);

  /* eslint no-shadow: ["error", { "hoist": "functions" }] */
  /* eslint-env es6 */
  useEffect(() => {
    getData();
    sortRec();
  }, [getData, sortRec]);

  const getData = useCallback(() => {
    // fetching
    dispatch(getBookData());
  }, [dispatch]);

  const sortRec = useCallback(() => {
    const res = bookPopular.sort(function (a, b) {
      return b.average_rating - a.average_rating;
    });
    return res.slice(0, 6);
  }, [bookPopular]);

  const getBookId = item => {
    dispatch(getDetailBooks(item.id));
  };

  const bookRecommended = ({item}) => {
    return (
      <TouchableOpacity onPress={() => getBookId(item)}>
        <View style={styles.containner}>
          <Image
            source={{uri: `${item.cover_image}`}}
            resizeMode="contain"
            style={styles.coverbook}
          />
          <View style={styles.conntainDetail}>
            <View>
              <Montserrat style={styles.titleRec}>{item.title}</Montserrat>
            </View>
            <View>
              <NumberFormat
                value={item.price}
                thousandSeparator={true}
                prefix="Rp."
                displayType="text"
                renderText={formatValue => (
                  <Montserrat>{formatValue}</Montserrat>
                )}
              />
            </View>
            <View style={styles.ratRec}>
              <Rating
                ratingCount={5}
                type="star"
                startingValue={item.average_rating / 2}
                imageSize={moderateScale(12)}
                readonly={true}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const onHeader = () => {
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Montserrat style={styles.headerTeks}>Good Morning, Aldi!</Montserrat>
        </View>
        <View style={styles.headerRec}>
          <Montserrat style={styles.teksRec}>Recommended</Montserrat>
        </View>
        <FlatList
          data={sortRec(bookPopular)}
          keyExtractor={item => item.id}
          renderItem={bookRecommended}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.headerRecPop}>
          <Montserrat style={styles.teksRecPop}>Popular</Montserrat>
        </View>
      </SafeAreaView>
    );
  };

  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    getData();
    setRefresh(false);
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
        <Text style={styles.teksLoad}>loading</Text>
      </View>
    );
  }

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
      data={bookPopular}
      keyExtractor={(item, index) => index}
      ListHeaderComponent={onHeader}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.containnerPic}
          onPress={() => getBookId(item)}>
          <View>
            <Image
              source={{uri: `${item.cover_image}`}}
              resizeMode="cover"
              style={styles.pic}
            />
          </View>
          <View style={styles.popContainer}>
            <View style={styles.containnerTittle}>
              <Montserrat style={styles.titlePop}>{item.title}</Montserrat>
            </View>
            <Montserrat>Penulis: {item.author}</Montserrat>
            <Montserrat>Penerbit: {item.publisher}</Montserrat>
            <View>
              <NumberFormat
                value={item.price}
                thousandSeparator={true}
                prefix="Rp."
                displayType="text"
                renderText={formatValue => (
                  <Montserrat>{formatValue}</Montserrat>
                )}
              />
            </View>
            <View style={styles.containnerRat}>
              <Rating
                ratingCount={5}
                type="star"
                startingValue={item.average_rating / 2}
                imageSize={moderateScale(12)}
                readonly={true}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
export default Home;
