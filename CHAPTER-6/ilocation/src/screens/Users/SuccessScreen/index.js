import {
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import Montserrat from '../../../helpers/Montserrat';

function SuccessScreen({navigation}) {
  const onLogScreenView = async () => {
    try {
      await analytics().logScreenView({
        screen_name: 'SuccessScreen',
        screen_class: 'SuccessScreen',
      });
    } catch (error) {}
  };

  useEffect(() => {
    onLogScreenView();
  }, []);

  return (
    <ScrollView style={styles.wrapper}>
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
          source={require('../../../assets/image/ceklis.png')}
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
    </ScrollView>
  );
}

export default SuccessScreen;
