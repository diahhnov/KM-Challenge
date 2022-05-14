import {
  View,
  Alert,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import AsyncStorage from 'react-native';
import styles from './style';
import {Login_Api} from '../../helpers/Api';
import Montserrat from '../../components/Montserrat';
import {setLoading} from '../utils/globalAction';
import {setToken} from './utils/action';
import {navigate} from '../../helpers/navigate';

function Login({navigation}) {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.login);
  const {loading} = useSelector(state => state.global);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* eslint-disable no-useless-escape */
  /* eslint-comments/no-unlimited-disable */
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const postLogin = async () => {
    if (email.length === 0) {
      Alert.alert('Error', 'Email tidak boleh kosong!');
    } else if (password === 0) {
      Alert.alert('Error', 'Password tidak boleh kosong!');
    } else if (!email.match(regexEmail)) {
      Alert.alert('Error, email tidak valid');
    } else {
      try {
        dispatch(setLoading(true));
        const body = {
          email, // dodidido2022@gmail.com
          password, // Dodidido2022.
        };

        const res = await axios.post(`${Login_Api}`, body, {
          validateStatus: status => status < 501,
        });
        console.log(res);
        console.log(res.status);
        if (res.status <= 201) {
          dispatch(setToken(res.data.tokens.access.token));
          navigate('MainRoot');
        } else {
          return Alert.alert('ERROR!!!, wrong username or password');
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    }
  };

  const [refresh, setRefresh] = useState(false);
  const onRefreshing = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };
  /* eslint no-shadow: ["error", { "hoist": "functions" }] */
  /* eslint-env es6 */
  useEffect(() => {
    const tokenCheck = async () => {
      try {
        const res = await AsyncStorage.getItem('@token');
        if (res !== null) {
          dispatch(setToken(res));
          navigation.navigate('MainRoot');
        }
      } catch (error) {
        console.log(error);
      }
    };
    tokenCheck();
  }, [token, dispatch, navigation]);

  return (
    <View
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefreshing} />
      }
      style={styles.wrapper}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Image
        source={require('../../assets/image/Buku.png')}
        style={styles.logo}
      />
      <View style={styles.containerInput}>
        <View style={styles.containnerLoginText}>
          <Montserrat style={styles.LoginText}>Login</Montserrat>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <TouchableOpacity
              onPress={postLogin}
              style={styles.buttonLogin}
              testID="loginButton">
              <Montserrat style={styles.textbuttonLogin}>LOGIN</Montserrat>
            </TouchableOpacity>
          )}
          <Montserrat style={styles.ask}>Don't have an account</Montserrat>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Montserrat style={styles.Register}>REGISTER</Montserrat>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
