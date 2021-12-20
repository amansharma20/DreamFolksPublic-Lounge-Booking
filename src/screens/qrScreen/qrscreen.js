import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking,
    TextInput,
    ScrollView
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { COLORS, FONTS, icons, images } from '../../../constants';
export default function Qrscanner() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View>
                            <Image source={icons.back} style={styles.iconSize} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headerText}>
                            QR Code
                        </Text>
                    </View>
                </View>
                <Text style={styles.headerTextt}>Align the QR code within the frame to scan.</Text>
                <View style={{ alignSelf: 'center', height: 500, width: '90%', backgroundColor: COLORS.background }}>
                    <QRCodeScanner cameraStyle={{ height: 50, width: 200, marginLeft: 30, marginBottom: 'auto' }}
                        flashMode={RNCamera.Constants.FlashMode.torch}
                    />
                    <View >
                        <Text style={{ alignSelf: 'center', fontSize: 15, color: COLORS.brownText }}>
                            Or enter your outlet id below.
                        </Text>
                    </View>
                    <View style={[styles.numberInputContainer]}>

                        <TextInput
                            style={styles.textInputStyle}
                            keyboardType='numeric'
                            maxLength={10}
                        />
                        <View style={{ paddingRight: 5, justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('FandBDetails')}>
                                <View style={styles.bookIconConatainer}>
                                    <Text style={{ alignSelf: 'center', justifyContent: 'center', color: COLORS.white }}>
                                        Proceed
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>



            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 20,
        paddingTop: 0,
        backgroundColor: COLORS.black
    },

    innerContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30
    },
    iconSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: COLORS.white

    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 20,
    },

    innerHeader: {
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 17,
        color: COLORS.white,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24,
        paddingLeft: 15
    },
    headerTextt: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        paddingLeft: 15,
        lineHeight: 22,
        justifyContent: 'center',
        marginTop: 60
    },
    numberInputContainer: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 58,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        alignSelf: 'center',
        marginTop:20
    },

    textInputStyle: {
        color: COLORS.black,
        fontSize: 18,
        lineHeight: Platform.select({
            ios: 0,
            android: 1812
        }),
        padding: 5,
        flex: 1,
    },
    fixedNumberText: {
        color: COLORS.white,
        fontSize: 17,
        fontFamily: FONTS.poppinsRegular
    },
    lineContainer: {
        width: 2,
        height: 34,
        paddingHorizontal: 10,
        borderWidth: 0,
        borderRightWidth: 1,
        borderColor: COLORS.white
    },
    phoneNumber: {
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.white,
        fontSize: 14,
        textAlign: 'left',
        marginTop: 43,
    },
    bookIconConatainer: {
        backgroundColor: COLORS.brownText,
        borderRadius: 21,
        paddingHorizontal: 20,
        paddingVertical: 11,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center'
    }
}
)