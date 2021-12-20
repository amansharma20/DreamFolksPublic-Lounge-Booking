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

const Offer = () => {
    const navigation = useNavigation();
    return (
        // <View style={styles.whitecontainer}>
        <ImageBackground imageStyle=
            {{ borderRadius: 14 }} source={images.offerImage}
            style={styles.cutImageSize}>
                <View style={{}}>
                    <Image source={icons.SBI}
                        style={styles.logoSize}
                    />
                </View>
                <View style={styles.offersTextView}>
                    <Text style={styles.discountText}>
                        Get flat 20% off using SBI bank card
                    </Text>
                    <Text style={styles.maximumDiscountText}>
                        Maximum discount up to ₹ 500 on orders above ₹3000
                    </Text>
                </View>

                <View style={styles.iconContainer}>
                    <View style={styles.promoCodeContainer}>
                        <Text style={styles.discountText}>
                            MYDFAPP5
                        </Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.iconApplyContainer}>
                            <Text style={styles.applyText}>
                                Apply
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
        // </View>
    );
}

const styles = StyleSheet.create({
    cutImageSize: {
        resizeMode: 'contain',
        padding: 20,
        marginBottom: 20,
    },

    logoSize: {
        width: 40,
        height: 16,
        resizeMode: 'contain',
    },

    offersTextView: {
        paddingVertical: 14
    },

    discountText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14
    },

    maximumDiscountText: {
        color: COLORS.greyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14
    },

    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconApplyContainer: {
        backgroundColor: COLORS.brownText,
        borderRadius: 21,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
        width: 109,
    },

    applyText: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular
    },

    promoCodeContainer: {
        backgroundColor: COLORS.lightPink,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
        width: 123,
    }

})

export default Offer;