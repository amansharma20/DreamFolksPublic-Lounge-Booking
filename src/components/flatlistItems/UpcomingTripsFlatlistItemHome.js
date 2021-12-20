/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, images } from '../../../constants';

const UpcomingTripsFlatlistItemHome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{width: '100%'}} onPress={() => navigation.navigate('UpcomingTrips')}>
                <View style={styles.whiteContainer}>
                    <View style={styles.innerWhiteContainer}>
                        <Text style={styles.dateText}>
                            21 Oct, 2021
                        </Text>
                        <View style={styles.innerTextContainer}>
                            <Text style={styles.areaText}>
                                Delhi
                            </Text>
                            <View style={styles.planeImageConatainer}>
                                <Image source={images.plane} style={styles.planeSize} />
                            </View>
                            <Text style={styles.areaText}>
                                Mumbai
                            </Text>
                        </View>

                        <View style={styles.innerBottomTextContainer}>
                            <Text style={styles.dateText}>
                                09:40 AM IST
                            </Text>
                            <Text style={styles.dateText}>
                                11:30 AM IST
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default UpcomingTripsFlatlistItemHome;

const styles = StyleSheet.create({
    container:{ 
        paddingBottom: 20 
    },
    whiteContainer: {
         backgroundColor: COLORS.white, 
         borderRadius: 14, 
         padding: 20 
    },
    innerWhiteContainer: {
     justifyContent: 'space-around'
    },
    innerBottomTextContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    dateText:{
        color: COLORS.lightGreyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular
    },
    innerTextContainer:{
         flexDirection: 'row', 
         justifyContent: 'space-between', 
         paddingVertical: 6 
    },

    areaText: {
         fontSize: 20, 
         fontFamily: FONTS.poppinsSemiBold, 
         color: COLORS.brownText
    },

    planeImageConatainer: {
         paddingLeft: 12 
    },

    planeSize: {
         width: 100,
         height: 20, 
         resizeMode: 'contain' 
    }

}
);
