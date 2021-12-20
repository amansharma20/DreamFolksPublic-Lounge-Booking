import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    Alert,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../../constants';

const MandAItems = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.innerHeader}>
                    <ImageBackground imageStyle={{ borderTopLeftRadius: 14, borderTopRightRadius: 14 }}
                        source={images.platinumMandAImage}
                        style={styles.platinumImageSize}>
                        <View style={styles.innerPartImage}>
                            <View>
                                <Text style={styles.innerContainerHeading}>
                                    Platinum M&A
                                </Text>
                                <Text style={styles.arrivalText}>
                                    Arrival, Domestic
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('MandADetails')}>
                                <View style={styles.iconContainer}>
                                    <Text style={styles.arrivalText}>
                                        Book now
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.innerBody}>
                    <View style={styles.bodyTextContainer}>
                        <Image source={icons.completedIcon}
                            style={styles.completedIconSize}
                        />
                        <Text style={styles.bodyText}>
                            Warm welcome by dedicated staff on at arrival hall
                        </Text>
                    </View>

                    <View style={styles.bodyTextContainer}>
                        <Image source={icons.completedIcon}
                            style={styles.completedIconSize}
                        />
                        <Text style={styles.bodyText}>
                            Porter service for collections of baggage from belt and escort till car park
                        </Text>
                    </View>

                    <View style={styles.bodyTextContainer}>
                        <Image source={icons.completedIcon}
                            style={styles.completedIconSize}
                        />
                        <Text style={styles.bodyText}>
                            Guiding passenger for various facilities available at airports.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default MandAItems;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    innerContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 14,
    },

    innerHeader: {
        backgroundColor: COLORS.white,
        borderRadius: 14
    },
    platinumImageSize: {
        resizeMode: 'contain',
        padding: 27,
        paddingLeft: 30,
    },

    innerPartImage:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    innerContainerHeading: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily: FONTS.poppinsSemiBold,
    },

    arrivalText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        lineHeight: 24,
    },

    iconContainer: {
        backgroundColor: COLORS.brownText,
        borderRadius: 21,
        height: 42,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },

    innerBody: {
        paddingBottom: 22,
        paddingLeft: 20,
        paddingRight: 12,
        paddingTop: 7,
    },

    bodyTextContainer: {
        flexDirection: 'row',
        paddingRight: 12,
        paddingTop: 15
    },

    completedIconSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    bodyText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingLeft: 12,
        lineHeight: 18

    }


}
)
