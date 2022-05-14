import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Player from '../screens/player';

const Button = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Button.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      inactiveColor="grey"
      barStyle={{backgroundColor: '#daaa63'}}>
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
        name="Player"
        component={Player}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesome name="mixcloud" size={20} color={color} />;
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
}

export default BottomTab;
