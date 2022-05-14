import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import tampil from '../../assets/image/tampil.png';
import Button from '../../component/Button';
import Helvetica from '../../component/Helvetica';
import {AkunStyle} from './style';
import {moderateScale} from 'react-native-size-matters';

const Daftarmobil = () => {
  return (
    <SafeAreaView style={AkunStyle.tampilanbar}>
      <View flex={1}>
        {/* sama halnya dengan style */}
        <Helvetica
          style={AkunStyle.teksAkun}
          type="Bold"
          size={moderateScale(14)}>
          Akun
        </Helvetica>
        <View style={AkunStyle.latartampilan}>
          <View>
            <FastImage source={tampil} style={AkunStyle.gambar} />
            <Helvetica style={AkunStyle.teks} align="center">
              Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di
              BCR lebih mudah
            </Helvetica>
            <Button
              style={AkunStyle.button}
              width={moderateScale(80)}
              title="Register"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Daftarmobil;
