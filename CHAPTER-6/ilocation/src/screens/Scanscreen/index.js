import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RNCamera} from 'react-native-camera';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';
import styles from './style';

class Scanscreen extends React.Component {
  state = {
    barcode: '',
  };
  render() {
    return (
      <View style={styles.wrapperCam}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.cam}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onBarCodeRead={barcode => {
            console.log(barcode);
            this.setState({
              barcode: barcode.data,
            });
          }}
        />
        <View style={styles.fitur}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.fiturback}>
              <AntDesign
                name="arrowleft"
                style={styles.fitBack}
                size={moderateScale(32)}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bar}>
          <View style={styles.barwrapp}>
            <View style={styles.slidein} />
            <View style={styles.slideout} />
          </View>
          <View>
            <Text style={styles.isicode}>{`${this.state.barcode}`}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Scanscreen;
