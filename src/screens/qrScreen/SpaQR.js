import { useNavigation } from '@react-navigation/core';
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
                    <ImageBackground source={images.spaCutImage}
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

                            <View style={styles.hotelTextContainer}>
                                <Text style={styles.hotelText}>
                                    Ubon thai spa
                                </Text>
                                <Text style={styles.terminalText}>
                                    Terminal 1, Mumbai airport
                                </Text>
                                <Text style={styles.terminalText}>
                                    Valid till - 3 July 2021, 10 PM
                                </Text>

                                <Text style={styles.serviceText}>
                                    Services
                                </Text>

                                <View style={styles.servicesDetails}>
                                    <Text style={styles.servicesText}>
                                        Foot reflexology
                                    </Text>
                                    <Text style={styles.servicesText}>
                                        X1
                                    </Text>
                                </View>

                                <View style={styles.servicesDetails}>
                                    <Text style={styles.servicesText}>
                                        Upper body massage
                                    </Text>
                                    <Text style={styles.servicesText}>
                                        X1
                                    </Text>
                                </View>

                                <View style={styles.servicesDetails}>
                                    <Text style={styles.servicesText}>
                                        Head massage
                                    </Text>
                                    <Text style={styles.servicesText}>
                                        X1
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>


                <View style={styles.iconContainer}>
                    <CommonButton onPress={() => navigation.goBack()}
                        title={'Done'}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FDF8F5',
        paddingVertical: 20
    },

    innerContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30
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
        width: 297
    },

    container2: {
        paddingVertical: 10
    },

    cutImageSize: {
        resizeMode: 'contain',
        width: '100%',
    },

    whiteContainer: {
        borderRadius: 8,
    },

    qrPicContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 34
    },

    qrSize: {
        width: 180,
        height: 180
    },

    numberView: {
        paddingVertical: 15,
        alignItems: 'center'
    },

    numberText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium
    },

    hotelTextContainer: {
        paddingTop: 35,
        paddingLeft: 60,
        paddingBottom: 30
    },

    serviceText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        paddingTop: 20
    },

    servicesDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingRight: 35
    },

    servicesText: {
        color: COLORS.greyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
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
        paddingTop: 30

    },

    iconButton: {
        paddingHorizontal: 92,
        height: 52,
        borderRadius: 26,
        backgroundColor: COLORS.orangeText,
        justifyContent: 'center'
    },

    doneText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        lineHeight: 24
    }

});