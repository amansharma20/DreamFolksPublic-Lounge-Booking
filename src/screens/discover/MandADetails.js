import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../constants';
import StarRating from 'react-native-star-rating';
import CommonButton from '../../components/CommonButton';


export default function MandADetails() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.back}
                            style={styles.backSize}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                        Mumbai airport
                    </Text>
                </View>
                <ImageBackground imageStyle={{ borderRadius: 20 }}
                    source={images.platinumMandAImage}
                    style={styles.platinumImageSize}>
                    <Text style={styles.meetHeadingText}>
                        Platinum meet & assist
                    </Text>
                    <Text style={styles.arrivalText}>
                        Arrival, Domestic
                    </Text>
                </ImageBackground>
                <Text style={styles.mainHeadingText}>
                    Shivaji international airport
                </Text>
                <View style={styles.starContainer}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        starSize={14}
                        fullStarColor={'#FFCF44'}
                        rating={4}
                    //rating={starCount}
                    //selectedStar={(rating) => onStarRatingPress(rating)}
                    />
                </View>

                <ImageBackground imageStyle=
                    {{ borderRadius: 14 }} source={images.sbiImage}
                    style={styles.cutImageSize}>
                    <View style={styles.offContainer}>
                        <Text style={styles.percentageText}>
                            20%
                        </Text>
                        <Text style={styles.offText}>
                            OFF
                        </Text>
                    </View>
                    <Text style={styles.debitCardText}>
                        On SBI debit card/ credit card
                    </Text>
                    <Text style={styles.validText}>
                        Valid on orders above Rs.2000.
                    </Text>
                </ImageBackground>

                <Text style={styles.facilityText}>
                    Facilities
                </Text>

                <View style={styles.bodyTextContainer}>
                    <Image source={icons.completedIcon}
                        style={styles.completedIconSize}
                    />
                    <Text style={styles.bodyText}>
                        Everything included in Silver package
                    </Text>
                </View>


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

                <View style={styles.lineContaienr}>
                </View>

                <Text style={styles.conditionHeadingText}>
                    Conditions
                </Text>
                <Text style={styles.conditionText}>
                    Lorem ipsum dolor sit amet, consetetur{'\n'} sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et…
                </Text>
                <View style={styles.footer}>
                    <CommonButton onPress={() => navigation.navigate('MandAForm')}
                        title={'Book Now'}
                    />
                </View>

            </View>
        </ScrollView>

    );
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
        paddingBottom: 30
    },

    backSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    headerText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 22,
        paddingLeft: 15
    },
    platinumImageSize: {
        resizeMode: 'contain',
        paddingVertical: 25,
        paddingLeft: 30,
        marginBottom: 20,
    },

    meetHeadingText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 20
    },

    arrivalText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14
    },

    mainHeadingText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 20,
        paddingTop: 30
    },

    starContainer: {
        paddingTop: 10,
        paddingBottom: 30,
        width: '25%'
    },

    offContainer: {
        flexDirection: 'row',
    },
    cutImageSize: {
        resizeMode: 'contain',
        padding: 5,
        paddingLeft: 15
    },

    percentageText: {
        fontSize: 32,
        fontFamily: FONTS.poppinsBold,
        color: COLORS.white
    },

    offText: {
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.white,
        lineHeight: 56,
        paddingLeft: 10
    },

    debitCardText: {
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        color: 'blue'
    },

    validText: {
        fontSize: 10,
        fontFamily: FONTS.poppinsRegular,
        color: 'blue'
    },

    facilityText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        paddingVertical: 30
    },

    bodyTextContainer: {
        flexDirection: 'row',
        paddingRight: 12,
        paddingBottom: 15
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
        lineHeight: 18,
        paddingRight: 30
    },

    lineContaienr: {
        borderWidth: 0,
        borderBottomWidth: 1,
        paddingTop: 30,
        borderColor: COLORS.greyBorderLine
    },

    conditionHeadingText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        paddingTop: 30,
        paddingBottom: 10
    },

    conditionText: {
        color: COLORS.greyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14
    },

    footer: {
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconContainer: {
        backgroundColor: COLORS.orangeText,
        borderRadius: 26,
        height: 52,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconText: {
        color: COLORS.white,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
    }

}
)