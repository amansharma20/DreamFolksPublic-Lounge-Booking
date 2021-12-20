import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../constants';

export default function PaymentSuccessful() {
    return(
        <View style={styles.container}>
            <Image source={images.paymentSuccessful}
            style={styles.imageSize}
            />
            <View style={styles.textContainer}>
            <Text style={styles.successfulText}>
            Payment
            </Text>
            <Text style={styles.successfulText}>
            successful!
            </Text>
            </View>

        </View>
    )}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackground,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageSize:{
        width: 137,
        height: 143,
    },

    textContainer:{
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },

    successfulText:{
        color: COLORS.brownText,
        fontSize: 30,
        fontFamily: FONTS.poppinsBold,
        
    }
})