import {
  View,
  Alert,
  StatusBar,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import AsyncStorage from 'react-native';
import styles from './style';
import {Login_Api} from '../../../helpers/Api';
import Montserrat from '../../../helpers/Montserrat';
import {setLoading} from '../../utils/globalAction';
import {setToken} from './utils/action';
import {navigate} from '../../../helpers/navigate';
import BioAuth from '../BioAuth';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {moderateScale} from 'react-native-size-matters';

function Login({navigation}) {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.login);
  const {loading} = useSelector(state => state.global);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* eslint-disable no-useless-escape */
  /* eslint-comments/no-unlimited-disable */
  const regexEmail = /^[a-zA-z0-9._-]+@[a-zA-z0-9]+\.[a-zA-]/;

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
          email,
          password,
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

  GoogleSignin.configure({
    webClientId:
      '659142653539-pm3v8k6fbo1i3da7oet8i3sqhp3i7v45.apps.googleusercontent.com',
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      navigate('MainRoot');
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const loginFb = LoginManager.logInWithPermissions(['public_profile']).then(
    function (result) {
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        console.log(
          'Login success with permissions: ' +
            result.grantedPermissions.toString(),
        );
      }
    },
    function (error) {
      console.log('Login fail with error: ' + error);
    },
  );

  const [refresh, setRefresh] = useState(false);
  const onRefreshing = () => {
    setRefresh(true);
    signIn;
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  const onLogScreenView = async () => {
    try {
      await analytics().logScreenView({
        screen_name: 'Login',
        screen_class: 'Login',
      });
    } catch (error) {}
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
    onLogScreenView();
  }, [token, dispatch, navigation]);

  return (
    <View
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefreshing} />
      }
      style={styles.wrapper}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
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
            secureTextEntry={true}
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
          <BioAuth />
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <GoogleSigninButton
              style={{width: moderateScale(200), height: moderateScale(50)}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
              // disabled={this.state.isSigninInProgress}
            />

            <LoginButton
              onPress={loginFb}
              onLoginFinished={(error, result) => {
                if (error) {
                  console.log('login has error: ' + result.error);
                } else if (result.isCancelled) {
                  console.log('login is cancelled.');
                } else {
                  AccessToken.getCurrentAccessToken().then(data => {
                    console.log(data.accessToken.toString());
                    navigate('MainRoot');
                  });
                }
              }}
              onLogoutFinished={() => console.log('logout.')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;
