import React from 'react';
import {Alert, TouchableOpacity, Button, View} from 'react-native';
import TouchID from 'react-native-touch-id';
import {COLOR} from '../../../assets/color';
import {navigate} from '../../../helpers/navigate';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  color: COLOR.Primer_Color, // Android,
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
};

class BioAuth extends React.Component {
  touchIdAuth = () => {
    TouchID.isSupported()
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');

          TouchID.authenticate('Authenticate', optionalConfigObject)
            .then(success => {
              Alert.alert('Authenticated Successfully');
              navigate('MainRoot');
            })
            .catch(error => {
              Alert.alert('Authentication Failed', error.toString());
            });
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
      });
  };

  render() {
    return (
      <View
        style={{
          alignSelf: 'center',
        }}>
        <TouchableOpacity>
          <Button
            title="Authenticate"
            color={COLOR.purple}
            onPress={this.touchIdAuth.bind(this)}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export default BioAuth;
