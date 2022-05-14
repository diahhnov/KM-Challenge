import React, {useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Scanscreen from '../../screens/Scanscreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Button = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Button.Navigator
      initialRouteName="Profile"
      activeColor="#fff"
      inactiveColor="grey"
      barStyle={{backgroundColor: '#712B75'}}>
      <Button.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome name="home" size={20} color={color} />;
          },
        }}
      />
      <Button.Screen
        name="Scan"
        component={Scanscreen}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome name="qrcode" size={20} color={color} />;
          },
        }}
      />
      <Button.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome name="user" size={20} color={color} />;
          },
        }}
      />
    </Button.Navigator>
  );
};

export default BottomTab;
