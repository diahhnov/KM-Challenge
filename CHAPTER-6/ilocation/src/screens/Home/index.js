import {View, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {useIsFocused} from '@react-navigation/native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

// Geolocation.setRNConfiguration({
//   enableHighAccuracy: false,
//   timeout: 5000,
//   maximumAge: 10000,
// });

const homeScreen = () => {
  const onLogScreen = useIsFocused();
  const [position, setPosition] = useState({
    coords: {
      latitude: 0,
      longitude: 0,
    },
  });

  const onLogScreenView = async () => {
    if (onLogScreen) {
      console.log(onLogScreenView);

      await analytics().logScreenView({
        screen_name: 'homeScreen',
        screen_class: 'homeScreen',
      });
    } else {
      console.log(error);
    }
  };

  onLogScreenView();

  const requestPermissions = React.useCallback(async () => {
    const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    console.log(result);
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This Feature is not available (on this device/ in this context)',
        );
        break;
      case RESULTS.DENIED:
        const resRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        console.log(resRequest);
        console.log(
          'This pemission has not been requested / is denied but requestable',
        );
        break;
      case RESULTS.LIMITED:
        console.log('This pemission is limited: some actions are possible');
        break;
      case RESULTS.GRANTED:
        console.log('This pemission is granted');
        Geolocation.getCurrentPosition(info => {
          setPosition(info);
        });
        break;
      case RESULTS.BLOCKED:
        console.log('This pemission is denied and not requestable anymore');
        break;
    }
  }, []);

  useEffect(() => {
    requestPermissions();
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setPosition(info);
    });
    onLogScreenView();
  }, [requestPermissions, onLogScreenView]);

  RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    interval: 10000,
    fastInterval: 5000,
  })
    .then(data => {
      if (data === 'already-enabled') {
        console.log('already-enabled');
      } else if (data === 'enabled') {
        Alert.alert('Notification', 'Happy Trying the Features!');
      }
    })
    .catch(err => {
      if (err.code === 'ERR00') {
        Alert.alert('Notification', 'GPS Activation Canceled by User');
      } else if (err.code === 'ERR01') {
        Alert.alert('Notification', 'the Settings change are unavailable');
      } else if (err.code === 'ERR02') {
        Alert.alert('Notification', 'the popup has failed to open');
      } else if (err.code === 'ERR03') {
        Alert.alert('Notification', 'Internal error');
      } else {
        Alert.alert('Notification', err);
      }
    });

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" hidden translucent />
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: position.coords.latitude
            ? position.coords.latitude
            : 106.9842432,
          longitude: position.coords.longitude
            ? position.coords.longitude
            : -6.1833216,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}>
        <Marker
          pinColor={'#B22222'}
          key={'user'}
          coordinate={{
            latitude: position.coords.latitude
              ? position.coords.latitude
              : 106.9842432,
            longitude: position.coords.longitude
              ? position.coords.longitude
              : -6.1833216,
          }}
          title={'Lokasi Saya'}
          description={'Lokasi Saya saat ini'}
        />
      </MapView>
    </View>
  );
};

export default homeScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    // width: '100%',
    // height: '100%',
  },
});
