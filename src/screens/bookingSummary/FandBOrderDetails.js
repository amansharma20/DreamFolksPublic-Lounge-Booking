import { useNavigation } from '@react-navigation/core';
import React,{useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import TextTicker from 'react-native-text-ticker'
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { COLORS, FONTS, icons, images } from '../../../constants';
import CommonButton from '../../components/CommonButton';

export default function FandBOrderDetails() {
    const navigation = useNavigation();
    const[i,setI]=useState('>>>>Verified>>>>Verified>>>>Verified>>>>Verified')
    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <View style={styles.innerHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={icons.back}
                                style={styles.backSize}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>
                            Order details
                        </Text>
                    </View>
                    <Text style={styles.helplineText}>
                        Helpline
                    </Text>
                </View>
                <View style={styles.showContainer}>
                    <Text style={styles.showText}>
                        Show the transaction Id to the cashier to{'\n'}                       get your combo
                    </Text>
                </View>

                <View style={styles.whiteContainer}>
                    <Text style={styles.transactionText}>
                        Transaction ID : RDM77678
                    </Text>
                    <View style={{backgroundColor:COLORS.background,marginTop:20}}>
                    <TextTicker
          style={{ fontSize: 24,color:COLORS.brownText }}
          duration={3000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}
        
          backgroundColor={COLORS.background}
        >
          {i}
        </TextTicker>
        </View>

                    <Text style={styles.validText}>
                        Voucher valid for next: 5 min
                    </Text>
                    <View style={styles.imageContainer}>
                        <Image source={images.foodImage}
                            style={styles.imageSize}
                        />
                    </View>
                    <Text style={styles.hotelNameText}>
                        Aroma’s hyderabad house
                    </Text>
                    <View style={styles.termionalContainer}>
                        <Text style={styles.terminalText}>
                            Terminal 1, Mumbai airport
                        </Text>
                        <Text style={styles.terminalText}>
                            Date - 3 July 2021 | Time - 10 PM
                        </Text>
                    </View>

                    <View style={styles.whiteFooter}>
                        <CommonButton onPress={() => navigation.goBack()}
                            title={'Done'}
                        />
                    </View>

                </View>
                <View style={styles.termContainer}>
                    <Text style={styles.termText}>
                        *Terms & conditions apply
                    </Text>
                </View>


            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackground,
    },

    innerContainer: {
        paddingHorizontal: 20,
        paddingTop: 40,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    innerHeader: {
        flexDirection: 'row'
    },

    backSize: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },

    headerText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        paddingLeft: 15,
        lineHeight: 22
    },

    helplineText: {
        color: COLORS.orangeText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        textDecorationLine: 'underline'
    },

    showContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 30
    },

    showText: {
        color: COLORS.lightGreyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
    },

    whiteContainer: {
        backgroundColor: COLORS.white,
        paddingVertical: 30,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },

    transactionText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17
    },

    validText: {
        color: COLORS.lightGreyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingTop: 30
    },

    imageContainer: {
        paddingVertical: 40
    },

    imageSize: {
        height: 140,
        width: 190,
        borderRadius: 14
    },

    hotelNameText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 20
    },

    termionalContainer: {
        paddingTop: 20,
        paddingBottom: 30,
        alignItems: 'center'
    },

    terminalText: {
        color: COLORS.greyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular
    },

    whiteFooter: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    termContainer: {
        alignItems: 'center'
    },

    termText: {
        color: COLORS.muddyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingTop: 30,
    }
})