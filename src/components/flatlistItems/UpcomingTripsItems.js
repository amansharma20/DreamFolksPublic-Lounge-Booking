import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../constants';
import CommonQrButton from '../CommonQrButton';

const UpcomingTripsItems = () => {
    const navigation = useNavigation();
    return (
         <View style={styles.whiteContainer}>
            <ImageBackground imageStyle=
            {{borderRadius: 14}} source={images.cutImage}
                style={styles.cutImageSize}>
                <View style={styles.upperWhiteContainer}>
                    <View style={styles.upperWhiteHeader}>
                        <Text style={styles.nameText}>
                            Naman Rathi
                        </Text>
                        <Text style={styles.dateText}>
                            02 July 2021
                        </Text>
                    </View>

                    <View style={styles.downWhiteHeader}>
                        <View style={styles.seatClassView}>
                            <Text style={styles.dateText}>
                                Seat :
                            </Text>
                            <Text style={styles.windowText}>
                                Window
                            </Text>
                        </View>
                        <View style={styles.seatClassView}>
                            <Text style={styles.dateText}>
                                Class :
                            </Text>
                            <Text style={styles.windowText}>
                                Business
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.middleWhiteContainer}>
                    <View>
                        <Image source={icons.planeTrip}
                            style={styles.planeSize}
                        />
                    </View>
                    <View style={styles.verticalLineContainer}>

                    </View>
                    <View>
                        <Text style={styles.timeText}>
                            10:30 am
                        </Text>
                        <Text style={styles.locationText}>
                            Mumbai
                        </Text>
                    </View>
                    <View style={{ paddingBottom: 25 }}>
                        <Image source={icons.arrowRight}
                            style={styles.arrowSize}
                        />
                    </View>
                    <View>
                        <Text style={styles.timeText}>
                            1:00 pm
                        </Text>
                        <Text style={styles.locationText}>
                            New Delhi
                        </Text>
                    </View>
                </View>

                <View style={styles.lastWhiteContainer}>
                    <CommonQrButton
                        title={'View QR code'} />
                </View>
            </ImageBackground>
         </View>
    );
}

const styles = StyleSheet.create({
    whiteContainer: {
        paddingHorizontal: 20,
    },

    cutImageSize: {
        resizeMode: 'contain',
        padding: 5,
        marginBottom: 20,
    },

    upperWhiteContainer: {
        borderRadius: 14,
        backgroundColor: COLORS.mainBackground,
        padding: 19,
    },

    upperWhiteHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.greyBorderLine,
        paddingBottom: 14
    },

    downWhiteHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 14
    },

    nameText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium
    },

    seatClassView: {
        flexDirection: 'row'
    },

    dateText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    windowText: {
        color: COLORS.greyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingLeft: 5
    },

    middleWhiteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 34,
        height: 116,
        alignItems: 'center'
    },

    verticalLineContainer: {
        width: 1,
        height: 60,
        color: COLORS.greyBorderLine,
        backgroundColor: COLORS.greyBorderLine
    },

    timeText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
    },
    locationText: {
        color: COLORS.greyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    planeSize: {
        width: 29,
        height: 20,
        resizeMode: 'contain'
    },

    arrowSize: {
        width: 22,
        height: 11,
        resizeMode: 'contain',
    },

    lastWhiteContainer: {
        flex: 1,
        marginBottom: 25,
        marginTop: 50
    },

})

export default UpcomingTripsItems;