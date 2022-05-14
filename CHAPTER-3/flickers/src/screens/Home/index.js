/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {BaseUrl} from '../../helpers/ApiAcess';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';

export default function Home(props) {
  const [listMovieData, setListMovieData] = useState({});
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    try {
      setLoding(true);
      const results = await axios.get(`${BaseUrl}`);
      console.log(results);
      setListMovieData(results.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoding(false);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#36485f',
        }}>
        <ActivityIndicator />
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>loading</Text>
      </View>
    );
  }

  const SlideMovie = ({item}) => {
    return (
      <View>
        <Image source={{uri: `${item.poster_path}`}} style={styles.rec} />
      </View>
    );
  };
  const navigation = useNavigation();

  const CardMovie = ({item}) => {
    const movieId = item.id;

    return (
      <View style={styles.scroll}>
        <Image source={{uri: `${item.poster_path}`}} style={styles.picscroll} />
        <View style={{marginStart: 10, flex: 1}}>
          <Text style={styles.judul}>{item.title}</Text>
          <Text style={styles.releas}>Release Date: {item.release_date}</Text>
          <Text style={styles.rat}>Rating: {item.vote_average}</Text>
          <View style={styles.areatom}>
            <TouchableOpacity
              style={{
                borderRadius: 5,
              }}>
              <Button
                titleStyle={{textAlign: 'center'}}
                title="Show More"
                onPress={() => {
                  navigation.navigate('MovieDetail', {params: {movieId}});
                }}
                type="solid"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#36485f'}}>
      <View
        style={{
          padding: 5,
        }}>
        <Text style={styles.textrecom}>Recommendation</Text>
        <FlatList
          horizontal
          data={listMovieData}
          keyExtractor={(item, index) => index}
          renderItem={SlideMovie}
        />
      </View>
      <View
        style={{
          padding: moderateScale(10),
        }}>
        <Text style={styles.textlatest}>Latest Upload</Text>
        <FlatList
          data={listMovieData}
          keyExtractor={(item, index) => index}
          renderItem={CardMovie}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rec: {
    height: 255,
    width: 171,
    borderRadius: 5,
    marginEnd: 10,
  },
  scroll: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 30,
  },
  picscroll: {
    height: 255,
    width: 171,
    borderRadius: 5,
    marginEnd: 10,
  },
  judul: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  releas: {
    fontSize: 12,
    marginTop: 10,
    textAlign: 'auto',
    color: '#fff',
  },
  rat: {
    fontSize: 10,
    marginTop: 10,
    textAlign: 'auto',
    color: '#fff',
  },
  areatom: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textrecom: {
    fontSize: 20,
    paddingTop: 10,
    color: '#FFF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  textlatest: {
    fontSize: 20,
    paddingTop: 10,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
