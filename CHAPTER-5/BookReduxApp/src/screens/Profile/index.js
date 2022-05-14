import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {setToken} from '../Login/utils/action';
import Montserrat from '../../components/Montserrat';
import styles from './style';

export default function Profile({navigation}) {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setToken(''));
    navigation.navigate('Login');
  };

  return (
    <View style={styles.containner}>
      <View style={styles.wrapper}>
        <View style={styles.containnerImage}>
          <Image style={styles.Image} />
        </View>
        <Montserrat size={moderateScale(20)}>Haii Diah</Montserrat>
      </View>
      <View style={styles.containnerButtonList}>
        <Montserrat style={{margin: 10, padding: 5, textAlign: 'left'}}>
          MAIN STORY
        </Montserrat>
        <View style={{margin: 2, padding: 5, textAlign: 'left'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('List')}
            style={styles.buttonList}>
            <Montserrat style={{color: '#fff', fontSize: moderateScale(15)}}>
              Harry Potter and the Philosopher's Stone
            </Montserrat>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containnerButton}>
        <TouchableOpacity onPress={() => logout()} style={styles.button}>
          <Montserrat style={{color: '#fff', fontSize: moderateScale(15)}}>
            Logout
          </Montserrat>
        </TouchableOpacity>
      </View>
    </View>
  );
}
