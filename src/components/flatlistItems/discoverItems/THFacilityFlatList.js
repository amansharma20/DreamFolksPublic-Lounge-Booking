import { useNavigation } from '@react-navigation/core';
import { StyleSheet, 
    Text, 
    View, 
    Image,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, icons, images } from '../../../../constants';

export default function THFacilityFlatList() {
    const navigation = useNavigation();
  return (
      <View style={styles.container}>
          <View style={{paddingRight: 10}}>

         
          <View style={styles.whiteContainer}>
              <Text style={styles.facilitiesText}>
              Disabled access
              </Text>
          </View>
          </View>
      </View>
  );
}


const styles = StyleSheet.create({
    container:{
        paddingVertical: 20
    },

    whiteContainer:{
        width: 88,
        height: 104,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },

    facilitiesText:{
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        color: COLORS.muddyText
    }
})