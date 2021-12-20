/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, images } from '../../../constants';

const UpcomingTripsFlatlistItem = props => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{ backgroundColor: '#ffffff', borderRadius: 14, padding: 20 }}>
          <View style={{ justifyContent: 'space-around' }}>
            <Text>
              21 Oct, 2021
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 }}>
              <Text style={{ fontSize: 20, fontFamily: FONTS.poppinsSemiBold }}>
                Delhi
              </Text>
              <Image source={images.plane} style={{ width: 89, height: 20, resizeMode: 'contain' }} />

              <Text style={{ fontSize: 20, fontFamily: FONTS.poppinsSemiBold }}>
                Mumbai
              </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>
                09:40 AM IST
              </Text>
              <Text>
                11:30 AM IST
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: 120,
    marginBottom: 20,
    borderRadius: 14,
  },
});

export default UpcomingTripsFlatlistItem;
