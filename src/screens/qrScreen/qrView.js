import { useNavigation } from '@react-navigation/core';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../constants';
import CommonButton from '../../components/CommonButton';

export default function QRView() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <View style={styles.innerHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={icons.back}
                                style={styles.imageS}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>QR code</Text>
                    </View>
                </View>

                <View style={styles.allowContainer}>
                    <Text style={styles.allowText}>
                        Allow 2 visitors only
                    </Text>
                </View>

                <View style={styles.cardContainer}>
                    <Image source={images.blackCard}
                        style={styles.cardSize}
                    />
                </View>


                <View style={styles.container2}>
                    <ImageBackground source={images.cutImage}
                        style={styles.cutImageSize}>
                            <View style={styles.whiteContainer}>
                                <View style={styles.qrPicContainer}>
                                    <Image source={images.qrBig}
                                        style={styles.qrSize}
                                    />
                                </View>

                                <View style={styles.numberView}>
                                    <Text style={styles.numberText}>
                                        728382965
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.hotelTextContainer}>
                                <Text style={styles.hotelText}>
                                    The rose hotel
                                </Text>
                                <Text style={styles.terminalText}>
                                    Terminal 1, Mumbai airport
                                </Text>
                                <Text style={styles.terminalText}>
                                    Valid till - 3 July 2021, 10 PM
                                </Text>
                            </View>
                    </ImageBackground>
                </View>
                <View style={styles.iconContainer}>
                    <CommonButton onPress={() => navigation.goBack()}
                        title={'Done'}
                    />
                </View>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackground,
        paddingVertical: 20
    },

    innerContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 40 : 0,
    },

    innerHeader: {
        flexDirection: 'row'
    },

    imageS: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    headerText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        paddingLeft: 15,
        lineHeight: 22
    },

    allowContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 30
    },

    cardContainer: {
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    allowText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
    },

    cardSize: {
        height: 168,
        width: 300
    },

    container2: {
        paddingVertical: 10,
    },

    whiteContainer: {
        borderRadius: 8,
        alignSelf: 'center',

    },
    cutImageSize: {
        resizeMode: 'contain',
        width: '100%',
    },

    qrPicContainer: {
        // alignItems: 'center',
        // alignContent: 'center',
        // justifyContent: 'center',
        paddingTop: 34,
        alignSelf: 'center',
    },

    qrSize: {
        width: 180,
        height: 180,
    },

    numberView: {
        paddingVertical: 15,
        alignItems: 'center',
    },

    numberText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
    },

    hotelTextContainer: {
        paddingTop: 40,
        paddingLeft: 47,
        paddingBottom: 25
    },

    hotelText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 20,
        paddingBottom: 4
    },

    terminalText: {
        color: COLORS.greyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingTop: 6
    },

    iconContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
        marginVertical: 30
    }

});