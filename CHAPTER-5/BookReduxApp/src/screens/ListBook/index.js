import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Pdf from 'react-native-pdf';
import {moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

export default class ListBook extends React.Component {
  render() {
    const source = {uri: 'bundle-assets://pdf/Buku1.pdf'};
    // cache: true
    // const source = require('./tconst est.pdf');  // ios only
    // const source = {uri:'bundle-assets://test.pdf' };
    // const source = {uri:'file:///sdcard/test.pdf'};
    // const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
    // const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
    // const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

    return (
      <View style={styles.container}>
        <View style={styles.headerTombol}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Ionicons
              name="arrow-back-circle"
              size={moderateScale(35)}
              style={styles.goback}
            />
          </TouchableOpacity>
        </View>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
    );
  }
}
