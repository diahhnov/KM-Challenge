import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setToken} from '../Users/Login/utils/action';
import {COLOR} from '../../assets/color';
import {moderateScale} from 'react-native-size-matters';

export default function profileScreen({navigation}) {
  const dispatch = useDispatch();

  const onLogScreenView = async () => {
    try {
      await analytics().logScreenView({
        screen_name: 'profileScreen',
        screen_class: 'profileScreen',
      });
    } catch (error) {}
  };

  useEffect(() => {
    onLogScreenView();
  }, []);

  const logout = () => {
    dispatch(setToken(''));
    navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => logout()}
        style={{
          backgroundColor: COLOR.Secondary_Color,
          height: moderateScale(50),
          alignItems: 'center',
          justifyContent: 'center',
          width: moderateScale(200),
          borderRadius: moderateScale(30),
        }}>
        <Text style={{color: '#fff', fontSize: moderateScale(15)}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
