import {
  View,
  Alert,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import styles from './style';
import {Login_Api} from '../../helpers/Api';
import axios from 'axios';
import Montserrat from '../../components/Montserrat';

const Login = () => {
  const navigation = useNavigation();
  // const focussed = useIsFocused();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [emailFocussed, setEmailFocussed] = useState(false);
  // const [passwordFocussed, setPasswordFocussed] = useState(false);

  // const checkers = () => {
  //   const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   const emailStat = regexEmail.test(email);

  //   const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  //   const passwordStat = regexPassword.test(email);

  //   if (email.length === 0 && password.length === 0) {
  //     Alert.alert('ERROR', "this can't be empty");
  //   } else {
  //     if (emailStat && passwordStat === true) {
  //       // navigation.navigate('MainRouter');
  //     } else {
  //       Alert.alert('ERROR');
  //     }
  //   }
  // };

  const postLogin = async () => {
    try {
      const body = {
        email: email, // dodidido2022@gmail.com
        password: password, // Dodidido2022.
      };

      const res = await axios.post(`${Login_Api}`, body, {
        validateStatus: status => status < 501,
      });
      console.log(res.status);
      if (res.status <= 201) {
        // navigation.navigate('Home');
      } else {
        return alert('ERROR!!!, wrong username or password');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        // status={focussed}
      />
      <Image
        source={require('../../assets/image/Buku.png')}
        style={styles.logo}
      />
      <View style={styles.containerInput}>
        <View style={styles.containnerLoginText}>
          <Montserrat style={styles.LoginText}>Login</Montserrat>
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
            // secureTextEntry={true}
          />
        </View>
        <View>
          <TouchableOpacity onPress={postLogin} style={styles.buttonLogin}>
            <Montserrat style={styles.textbuttonLogin}>LOGIN</Montserrat>
          </TouchableOpacity>
          <Montserrat style={styles.ask}>Don't have an account</Montserrat>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Montserrat style={styles.Register}>REGISTER</Montserrat>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
