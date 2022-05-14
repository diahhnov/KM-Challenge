import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  _View,
  Alert,
  ImageBackground,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Montserrat from '../../components/Montserrat';
import axios from 'axios';
import {Register_Api} from '../../helpers/Api';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import styles from './style';

export default function Register({}) {
  const navigation = useNavigation();
  const focus = useIsFocused();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fullnamefocussed, setFullnamefocussed] = useState(false);
  const [emailfocussed, setEmailfocussed] = useState(false);
  const [passwordfocussed, setPasswordfocussed] = useState(false);

  // const checkers = () => {
  //   const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   const emailStat = regexEmail.test(email);

  //   const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  //   const passwordStat = regexPassword.test(email);

  //   if (email.length === 0 && password.length === 0) {
  //     Alert.alert('ERROR', "this can't be empty");
  //   } else {
  //     if (emailStat && passwordStat === true) {
  //       navigation.navigate('SuccessScreen');
  //     } else {
  //       Alert.alert('ERROR');
  //     }
  //   }
  // };

  const postRegister = async () => {
    try {
      const body = {
        email: email,
        password: password,
        name: name,
      };
      const res = await axios.post(`${Register_Api}`, body, {
        validateStatus: status => status < 501,
      });
      console.log(res.status);
      if (res.status <= 201) {
        navigation.navigate('SuccessScreen');
      } else {
        return alert('ERROR!!!, wrong username or password');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground source={require('../../assets/image/latar.png')}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          // status={focussed}
        />
        <Image
          source={require('../../assets/image/Buku.png')}
          style={styles.logo}
        />
        <ScrollView style={{marginTop: -100}}>
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
              // secureTextEntry={true}
            />
          </View>
          <View>
            <TouchableOpacity onPress={postRegister} style={styles.buttonLogin}>
              <Montserrat style={styles.textbuttonLogin}>REGISTRASI</Montserrat>
            </TouchableOpacity>
            <Text style={styles.ask}>Already have an account</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Montserrat style={styles.Register}>LOGIN</Montserrat>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
