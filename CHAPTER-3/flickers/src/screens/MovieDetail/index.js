import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BaseUrl} from '../../helpers/ApiAcess';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

export default function MovieDetail({route}) {
  const {params} = route.params;
  const movieId = params.movieId;

  const [loading, setLoding] = useState(false);
  const [details, setDetails] = useState({});
  const [casts, setCasts] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      setLoding(true);
      const results = await axios.get(`${BaseUrl}/${movieId}`);
      console.log(movieId);
      console.log(results);
      setDetails(results.data);
      setCasts(results.data.credits.cast);
    } catch (error) {
      console.log(error);
    } finally {
      setLoding(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.load}>
        <ActivityIndicator />
        <Text style={styles.teksload}>loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.screendetails}>
      <View>
        <ImageBackground
          style={styles.poster}
          source={{uri: details.backdrop_path}}>
          <View style={styles.latarback}>
            <TouchableOpacity style={styles.back}>
              <Ionicons
                name="ios-arrow-back-circle-outline"
                size={40}
                style={{alignSelf: 'center', color: '#fff'}}
                onPress={() => {
                  navigation.navigate('Home');
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.latarlovshar}>
            <TouchableOpacity style={styles.lovsher}>
              <Ionicons
                name="ios-heart-circle-outline"
                size={40}
                style={{color: '#fff'}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.lovsher}>
              <Ionicons
                name="ios-arrow-redo-circle-outline"
                size={40}
                style={{color: '#fff'}}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      {/* Bar Data */}
      <View>
        <View style={styles.containner}>
          <Image
            source={{uri: `${details.poster_path}`}}
            style={styles.picFilm}
          />
          <View style={styles.tekscont}>
            <Text style={styles.teksJudul}>{details.title}</Text>
            <View style={{marginTop: moderateScale(10)}}>
              <Text style={{fontSize: 14}}>Date: {details.release_date}</Text>
              <Text style={{fontSize: 14}}>Vote: {details.vote_average}</Text>
              <Text style={{fontSize: 14}}>Available: {details.status}</Text>
              <Text style={{fontSize: 14}}>Viewers: {details.popularity}</Text>
            </View>
          </View>
        </View>
        {/* tampilan Genre */}
        <View style={styles.contGenres}>
          <Text style={styles.teksGenre}>Genre</Text>
          <FlatList
            horizontal
            data={details.genres}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <View style={styles.contgenresName}>
                <Text style={styles.nameGenres}>{item.name}</Text>
              </View>
            )}
          />
        </View>
        {/* sinopsis */}
        <View style={styles.containnerSipnosis}>
          <Text style={styles.teksSinopsis}>Synopshis</Text>
          <Text style={styles.sinopsis}>{details.overview}</Text>
        </View>
        {/* aktor dan aktris */}
        <View>
          <Text style={styles.teksTokoh}>Actor/Artist</Text>
          <FlatList
            data={casts}
            numColumns={3}
            columnWrapperStyle={styles.areaTokoh}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <View style={styles.containnerCasts}>
                <Image
                  source={{uri: `${item.profile_path}`}}
                  style={styles.picTokoh}
                />
                <Text style={styles.nameTokoh}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  load: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36485f',
  },
  teksload: {color: '#FFF', fontWeight: 'bold'},
  screendetails: {flex: 1, backgroundColor: '#36485f'},
  poster: {
    height: 200,
    weight: 176,
  },
  latarback: {
    flexDirection: 'row',
    margin: moderateScale(10),
  },
  back: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
  },
  latarlovshar: {
    flexDirection: 'row',
    marginStart: moderateScale(258),
    marginVertical: moderateScale(-55),
  },
  lovsher: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
  },
  containner: {
    marginTop: moderateScale(-100),
    width: moderateScale(320),
    height: moderateScale(162),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  picFilm: {
    height: 150,
    width: 90,
    borderRadius: 5,
    margin: 10,
  },
  tekscont: {
    alignSelf: 'center',
    width: moderateScale(200),
    height: moderateScale(200),
    marginTop: moderateScale(80),
  },
  teksJudul: {
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contGenres: {margin: moderateScale(15)},
  teksGenre: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contgenresName: {
    marginTop: moderateScale(10),
    marginRight: moderateScale(15),
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    backgroundColor: '#fff',
  },
  nameGenres: {
    textAlign: 'center',
    color: '#000',
  },
  containnerSipnosis: {
    margin: moderateScale(15),
    marginTop: moderateScale(5),
  },
  teksSinopsis: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  sinopsis: {
    fontSize: 14,
    color: '#fff',
  },
  teksTokoh: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  areaTokoh: {justifyContent: 'space-around'},
  containnerCasts: {
    padding: moderateScale(12),
  },
  picTokoh: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: moderateScale(2),
  },
  nameTokoh: {
    fontSize: moderateScale(10),
    textAlign: 'center',
    color: '#fff',
  },
});
