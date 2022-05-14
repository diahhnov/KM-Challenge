import React from 'react';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import {NavigationContainer} from '@react-navigation/native';
import MainRouter from './MainRouter';
import {navigationRef} from '../helpers/navigate';

function Root() {
  return (
    <InternetConnectionAlert
      onChange={connectState => {
        console.log('Connection: ', connectState);
      }}>
      <NavigationContainer ref={navigationRef}>
        <MainRouter />
      </NavigationContainer>
    </InternetConnectionAlert>
  );
}

export default Root;
