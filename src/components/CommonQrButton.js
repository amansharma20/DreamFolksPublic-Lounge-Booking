/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, icons, images} from '../../constants';

export default function CommonQrButton(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.qrViewContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.qrContainer}>
          <View>
            <Image source={images.qr} style={styles.qrSize} />
          </View>
          <View>
            <Text style={styles.qrText}>{props.title}</Text>
          </View>
          <View style={styles.fakeView} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  qrViewContainer: {
    paddingHorizontal: 52,
  },

  qrContainer: {
    paddingVertical: 6,
    borderRadius: 26,
    backgroundColor: COLORS.orangeText,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 6,
  },

  qrSize: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  qrText: {
    paddingLeft: 10,
    fontSize: 17,
    color: COLORS.white,
    fontFamily: FONTS.poppinsMedium,
  },

  fakeView: {
    width: 40,
  },
});
