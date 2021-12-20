import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../constants';

const Notifications = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.loungeBookContainer}>
            <View style={styles.innerContainer}>
            <View style={styles.iconContainer}>
        <Image source={icons.lounge}
        style={styles.loungeIconSize}
        />
        </View>
        <View style={styles.innerTextContainer}>
            <Text style={styles.loungeText}>
            Lounge booked
            </Text>
            <Text style={styles.dateText}>
            Monday, 3 July 2021 - The rose hotel
            </Text>
        </View>
        </View>

        <View>
            <Text style={styles.viewText}>
            View
            </Text>
        </View>

        </View>

    </View>
  );
}

export default Notifications;

const styles = StyleSheet.create({
    loungeBookContainer:{
        width: '100%',
        height: 80,
        backgroundColor: COLORS.background,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    innerContainer:{
        flexDirection: 'row',
    },

    iconContainer:{
        alignItems: 'center',
        justifyContent: 'center'
    },

    loungeIconSize:{
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },

    innerTextContainer:{
        paddingLeft: 13
    },

    loungeText:{
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    dateText: {
        color: COLORS.greyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    viewText:{
        color: COLORS.orangeText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        textDecorationLine: 'underline'
    }
})