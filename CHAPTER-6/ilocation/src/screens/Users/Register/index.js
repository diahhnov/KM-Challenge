import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import Montserrat from '../../../helpers/Montserrat';
import {Register_Api} from '../../../helpers/Api';
import styles from './style';
import {setLoading} from '../../utils/globalAction';

export default function Register({navigation}) {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.global);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* eslint-disable no-useless-escape */
  /* eslint-comments/no-unlimited-disable */
  const regexEmail = /^[a-zA-z0-9._-]+@[a-zA-z0-9]+\.[a-zA-]/;
  // const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const onLogScreenView = async () => {
    try {
      await analytics().logScreenView({
        screen_name: 'Register',
        screen_class: 'Register',
      });
    } catch (error) {}
  };

  useEffect(() => {
    onLogScreenView();
  }, []);

  const postRegister = async () => {
    if (name.length === 0) {
      Alert.alert('Error', 'Full Name tidak boleh kosong!');
    } else if (email === 0) {
      Alert.alert('Error', 'email tidak boleh kosong!');
    } else if (password === 0) {
      Alert.alert('Error', 'Password tidak boleh kosong!');
    } else {
      if (!email.match(regexEmail)) {
        Alert.alert('Error, email tidak valid');
      }
      // else if (!password.match(regexPassword)) {
      //   alert('Error, password tidak valid');
      else {
        try {
          dispatch(setLoading(true));
          const body = {
            email,
            password,
            name,
          };
          const res = await axios.post(`${Register_Api}`, body, {
            validateStatus: status => status < 501,
          });
          console.log(res);
          console.log(res.status);
          if (res.status <= 201) {
            navigation.navigate('SuccessScreen');
          } else {
            return Alert.alert('ERROR!!!, check again');
          }
        } catch (error) {
          console.log(error);
        } finally {
          dispatch(setLoading(false));
        }
      }
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
    <View
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      <View style={styles.wrapper}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          // status={focussed}
        />
        <Image
          source={require('../../../assets/image/frankly esoteric.jpeg')}
          style={styles.logo}
        />
        <View style={{marginTop: -100}}>
          <View style={styles.containnerRegistText}>
            <Montserrat style={styles.RegistText}>Register</Montserrat>
          </View>
          <View
          // style={styles.emailInput(emailFocussed)}
          >
            <TextInput
              style={styles.input}
              placeholder="Enter FullName"
              onChangeText={text => setName(text)}
              // onFocus={setFullnamefocussed(true)}
              // onBlur={setFullnamefocussed(false)}
            />
          </View>
          <View
          // style={styles.emailInput(emailFocussed)}
          >
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              onChangeText={text => setEmail(text)}
              // onFocus={setEmailFocussed(true)}
              // onBlur={setEmailFocussed(false)}
            />
          </View>
          <View
          // style={styles.passwordInput(passwordFocussed)}
          >
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              onChangeText={text => setPassword(text)}
              // onFocus={setPasswordFocussed(true)}
              // onBlur={setPasswordFocussed(false)}
              secureTextEntry={true}
            />
          </View>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <TouchableOpacity onPress={postRegister} style={styles.buttonLogin}>
              <Montserrat style={styles.textbuttonLogin}>REGISTRASI</Montserrat>
            </TouchableOpacity>
          )}

          <Text style={styles.ask}>Already have an account</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Montserrat style={styles.Register}>LOGIN</Montserrat>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
