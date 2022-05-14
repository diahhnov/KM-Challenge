import React from 'react';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import MainRoute from './MainRoute';
import {navigationRef} from '../helpers/navigate';
import {NavigationContainer} from '@react-navigation/native';

const Root = () => {
  return (
    <InternetConnectionAlert
      onChange={connectionState => {
        console.log('Connection: ', connectionState);
      }}>
      <NavigationContainer ref={navigationRef}>
        <MainRoute />
      </NavigationContainer>
    </InternetConnectionAlert>
  );
};

export default Root;
