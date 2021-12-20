import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../../constants';
export default function CommonProcessOne(props) {
    return (

        // <TouchableOpacity onPress={props.onPress} style={[{ width: '70%' }, props.style]}>
        //     <View style={styles.buttonContainer}>
        //         <Text style={styles.titleStyle}>
        //             {props.title}
        //         </Text>
        //     </View>
        // </TouchableOpacity>
        <View style={styles.whiteContainer}>
            <View style={styles.innerContainer}>
            <Text style={styles.awaitingText}>
            Awaiting
            </Text>
            <Text style={styles.progressText}>
            In progress
            </Text>
            <Text style={styles.completedText}>
            Cancelled
                </Text>
                </View>
                <View style={styles.iconContainer}>
               <Image source={icons.awaitingIcon}
               style={styles.iconSizeone}
               />
               <View style={styles.lineContainer}>
               </View>
               <Image source={icons.inProgressIcon}
               style={styles.iconSizeone}
               />
                <View style={styles.lineContainer}>
               </View>
               <Image source={icons.cancelledIcon}
               style={styles.iconSize}
               />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    whiteContainer:{
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: COLORS.white,
        borderRadius: 14
    },

    innerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    awaitingText:{
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium,
    },
    progressText:{
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
    },
    completedText:{
        color: 'red',
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
    },
    iconContainer:{
        flexDirection: 'row',
        paddingTop: 12,
        paddingHorizontal: 40
        //justifyContent: 'space-around'
    },
    iconSize:{
        width: 20,
        height: 20,
        tintColor:'red',
        resizeMode: 'contain'
    },
    iconSizeone:{
        width: 20,
        height: 20,
        tintColor:COLORS.brownText,
        resizeMode: 'contain'
    },
    lineContainer:{
    width: 90,
    height: 2,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderTopWidth: 1,
    borderColor: COLORS.greyBorderLine,
    marginTop: 10
    }
});

{/* <CommonButton onPress={() => navigation.navigate('OtpResend')} title={'Get OTP'} style={{ marginTop: 70 }} /> */}