import React from 'react';
import {DaftarStyle} from './style';
import {moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import Helvetica from '../../component/Helvetica';
import ListMobil from '../../component/Card/ListMobil';

const Daftarmobil = () => {
  return (
    <SafeAreaView style={DaftarStyle.latarDaftar}>
      <Helvetica
        style={DaftarStyle.teksdaftar}
        type="Bold"
        size={moderateScale(14)}>
        Daftar Mobil
      </Helvetica>
      <ListMobil />
    </SafeAreaView>
  );
};

export default Daftarmobil;
