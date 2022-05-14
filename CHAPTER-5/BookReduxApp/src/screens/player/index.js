import Slider from '@react-native-community/slider';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
/* istanbul ignore next */
import SoundPlayer from 'react-native-sound';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../assets/color';
import {useAudioHelper} from '../../helpers/audio-helpers.ts';
import styles from './style';

function Player() {
  const video = require('../../assets/video/Harry_Potter_20th_Anniversary.mp4');
  const sound = useAudioHelper({
    listSounds: [
      {
        type: 'app-bundle',
        path: 'sound_harrypotter.mp3',
        name: 'Harry Potter Soundtrack',
        basePath: SoundPlayer.MAIN_BUNDLE,
      },
    ],
    timeRate: 15,
    isLogStatus: true,
  });
  // const RNSound = require('react-native').NativeModules.RNSound;
  // const IsAndroid = RNSound.IsAndroid;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{sound.currentAudioName}</Text>
      <View style={styles.actionButtonsOther}>
        {sound.status === 'play' ? (
          <TouchableOpacity
            onPress={sound.pause}
            style={{marginHorizontal: 20}}>
            <FontAwesomeIcon
              name="volume-up"
              color={COLOR.Primer_Color}
              size={50}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={sound.play} style={{marginHorizontal: 20}}>
            <FontAwesomeIcon name="volume-off" color={COLOR.grey} size={50} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.progressBar}>
        <Text style={styles.progressBarText}>{sound.currentTimeString}</Text>
        <Slider
          style={{width: '70%', height: 40}}
          minimumValue={0}
          maximumValue={sound.duration}
          value={sound.currentTime}
          minimumTrackTintColor={COLOR.Primer_Color}
          maximumTrackTintColor={COLOR.grey}
          thumbTintColor={COLOR.Primer_Color}
          onTouchStart={sound.pause}
          onTouchEnd={sound.play}
          onSlidingComplete={seconds => sound.seekToTime(seconds)}
        />
        <Text style={styles.progressBarText}>{sound.durationString}</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Video
          source={video}
          style={{
            height: moderateScale(300),
            width: moderateScale(300),
          }}
          resizeMode="contain"
          fullscreen={true}
          controls={true}
        />
      </View>
    </View>
  );
}

export default Player;
