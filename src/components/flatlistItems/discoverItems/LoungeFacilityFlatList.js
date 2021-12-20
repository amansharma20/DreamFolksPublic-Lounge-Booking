import { useNavigation } from '@react-navigation/core';
import { StyleSheet, 
    Text, 
    View, 
    Image,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, icons, images } from '../../../../constants';

export default function LoungeFacilityFlatList() {
    const navigation = useNavigation();
  return (
      <View style={styles.container}>
          <View style={{paddingRight: 10}}>

         
          <View style={styles.whiteContainer}>
          <Image source={icons.timeIcon}
                        style={styles.locationIconSize}
                    />
              <Text style={styles.facilitiesText}>
              Disabled access
              </Text>
          </View>
          </View>
      </View>
  );
}

//export default LoungeFacilityFlatList;

const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        flexDirection:'row'
        
    },
    whiteContainer:{
        width: 88,
        paddingVertical: 17,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 14
    },
    locationIconSize: {
        width: 15,
        height: 18,
        resizeMode: 'contain',
        alignSelf:'center',
        padding: 10,
        marginBottom:10
        
    },
    facilitiesText:{
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        color: COLORS.muddyText
    }
})