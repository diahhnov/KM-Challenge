import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import {BaseUrlApi} from '../../helpers/ApiAcess';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoding] = useState(false);
  const postLogin = async () => {
    try {
      setLoding(true);
      const body = {
        username: username, // mor_2314
        password: password, // 83r5^_
      };

      const res = await axios.post(`${BaseUrlApi}/auth/login`, body, {
        validateStatus: status => status < 501,
      });
      console.log(res.status);
      if (res.status <= 201) {
        navigation.navigate('Home');
      } else {
        return alert('ERROR!!!, wrong username or password');
      }
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

  return (
    <View
      style={{
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#0000',
      }}>
      <ImageBackground
        source={require('../../assets/bioskop.jpg')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
        <View style={{marginTop: -150}}>
          <Text
            style={{
              margin: 20,
              textAlign: 'center',
              fontSize: 50,
              fontWeight: 'bold',
              color: '#5D8BF4',
            }}>
            Sign In
          </Text>
          <View
            style={{
              margin: 10,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Input
              style={{height: 50, color: '#5D8BF4'}}
              label="Username"
              placeholder=" "
              onChangeText={text => setUsername(text)}
            />
            <Input
              style={{height: 50, color: '#5D8BF4'}}
              label="Password"
              placeholder=" "
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              buttonStyle={{borderWidth: 2, borderRadius: 20}}
              containerStyle={{
                width: 200,
              }}
              onPress={postLogin}
              title={'Sign in'}
              titleStyle={{fontWeight: 'bold'}}
            />
            <TouchableOpacity
              style={{marginVertical: 10}}
              onPress={() => navigation.navigate('Register')}>
              <Text style={{color: 'white'}}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
