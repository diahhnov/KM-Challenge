import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Datacar from './Datacar';
import Helvetica from '../Helvetica';
import Feather from 'react-native-vector-icons/Feather';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../helpers/color';
import mobil from '../../assets/image/mobil.png';

export default function ListMobil() {
  return (
    <FlatList
      data={Datacar}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity>
          <View style={styles.containner}>
            <View style={styles.sisi}>
              <Image style={styles.gambar} source={mobil} />
            </View>
            <View style={styles.sisi}>
              <View>
                <Helvetica style={styles.tekstitle}>{item.title}</Helvetica>
              </View>
              <View style={styles.tampilanicon}>
                <View style={styles.user}>
                  <Feather name="users" size={13} />
                  <Helvetica> {item.people}</Helvetica>
                </View>
                <View style={styles.tampilanicon}>
                  <Feather name="briefcase" size={14} />
                  <Helvetica> {item.bagasi}</Helvetica>
                </View>
              </View>
              <View>
                <Helvetica style={styles.harga}>{item.harga}</Helvetica>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  containner: {
    height: moderateScale(100),
    flexDirection: 'row',
    elevation: moderateScale(3),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    alignItems: 'center',
    backgroundColor: COLOR.white,
    marginHorizontal: 1,
  },
  sisi: {
    padding: moderateScale(10),
  },
  gambar: {
    width: moderateScale(50),
    height: moderateScale(35),
  },
  tekstitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLOR.primaryBlack,
  },
  tampilanicon: {flexDirection: 'row'},
  user: {
    flexDirection: 'row',
    marginRight: moderateScale(10),
  },
  harga: {
    color: COLOR.primaryGreen,
    fontWeight: 'bold',
  },
});
