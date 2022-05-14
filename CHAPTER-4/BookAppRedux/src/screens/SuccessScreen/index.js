import {View, TouchableOpacity, StatusBar, Image} from 'react-native';
import React from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import styles from './style';
import Montserrat from '../../components/Montserrat';

const SuccessScreen = () => {
  const navigation = useNavigation();
  // const focus = useIsFocused();
  return (
    <View style={styles.wrapper}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        // status={focussed}
      />
      <View style={styles.teksRegis}>
        <Montserrat style={styles.Regis}>Registration Completed!</Montserrat>
      </View>
      <View style={styles.ImageCeklis}>
        <Image
          style={styles.Ceklis}
          source={require('../../assets/image/ceklis.png')}
        />
        <View style={styles.teksVerf}>
          <Montserrat style={styles.Verf}>
            We sent email verification to your email
          </Montserrat>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Montserrat style={styles.teksbutton}>Back to Login</Montserrat>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessScreen;
