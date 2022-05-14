import React from 'react';
import {View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import orang from '../../assets/image/org.png';
import {HomeStyle} from './style';
import {moderateScale} from 'react-native-size-matters';
import Button from '../../component/Button';
import iconM from '../../assets/image/icon.png';
import truck from '../../assets/image/truck.png';
import box from '../../assets/image/box.png';
import key from '../../assets/image/key.png';
import camera from '../../assets/image/camera.png';
import Helvetica from '../../component/Helvetica';
import {TouchableOpacity} from 'react-native';
import ListMobil from '../../component/Card/ListMobil';

const Home = () => {
  return (
    <SafeAreaView style={HomeStyle.bg}>
      <View style={HomeStyle.container}>
        <View style={HomeStyle.header}>
          <View>
            <Helvetica>Hi, Nama</Helvetica>
            <Helvetica type="ExtraBold" size={moderateScale(14)}>
              Your Location
            </Helvetica>
          </View>
          <View>
            <FastImage
              source={orang}
              resizeMode="contain"
              style={HomeStyle.image}
            />
          </View>
        </View>
      </View>
      <View style={HomeStyle.car}>
        <View style={HomeStyle.posisi}>
          <Helvetica
            style={HomeStyle.posisiteks}
            color="white"
            size={moderateScale(16)}>
            Sewa Mobil Berkualitas di Kawasanmu
          </Helvetica>
          <Button width={moderateScale(109)} title="Sewa Mobil" />
        </View>
        <View flex={1} style={HomeStyle.tampilanmobil}>
          <FastImage
            source={iconM}
            resizeMode="contain"
            style={HomeStyle.icon}
          />
        </View>
      </View>
      <View style={HomeStyle.barfitur}>
        <TouchableOpacity>
          <View style={HomeStyle.truk}>
            <Image source={truck} />
          </View>
          <Helvetica style={HomeStyle.tekstruk}>Sewa Mobil</Helvetica>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={HomeStyle.box}>
            <Image source={box} />
          </View>
          <Helvetica style={HomeStyle.teksbox}>Oleh-Oleh</Helvetica>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={HomeStyle.key}>
            <Image source={key} />
          </View>
          <Helvetica style={HomeStyle.tekskey}>Penginapan</Helvetica>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={HomeStyle.camera}>
            <Image source={camera} />
          </View>
          <Helvetica style={HomeStyle.tekscamera}>Wisata</Helvetica>
        </TouchableOpacity>
      </View>
      <View>
        <Helvetica
          style={HomeStyle.teksDaftarmobil}
          type="Bold"
          size={moderateScale(16)}>
          Daftar Mobil Pilihan
        </Helvetica>
        <View style={HomeStyle.latarbar}>
          <ListMobil />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
