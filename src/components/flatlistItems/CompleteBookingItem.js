import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../constants';

const CompleteBookingItem = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.paddingContainer}>
            <View style={styles.whiteContainer}>
                <View style={styles.whiteInnerHeader}>
                    <View style={styles.whiteHeader}>
                        <Image source={icons.bookingCompletedIcon}
                            style={styles.bookingIconSize}
                        />
                        <Text style={styles.successfulTitleText}>
                        Booking completed
                        </Text>
                    </View>
                </View>

                <View style={styles.innerWhiteContainer}>
                    <View style={styles.borderContainer}>

                        <View>
                            <Image source={images.image}
                                style={styles.imageSize}
                            />
                        </View>
                        <View style={styles.headingContainer}>
                            <Text style={styles.loungeText}>
                                Lounge booking
                            </Text>
                            <Text style={styles.hotelText}>
                                The rose hotel
                            </Text>
                            <Text style={styles.loungeText}>
                                Terminal 1, International
                            </Text>
                        </View>

                    </View>

                    <View style={styles.whiteInnerContainer2}>
                        <View style={styles.whiteMiddleContainer2}>
                            <Text style={styles.loungeText}>
                            Date & time
                            </Text>
                            <Text style={styles.loungeText}>
                                Book transaction id
                            </Text>
                            
                        </View>
                        <View style={styles.whiteMiddleContainer2}>
                            
                            <Text style={styles.dateIdText}>
                                21 Aug, 2021 | 5:00 PM
                            </Text>
                            <Text style={styles.dateIdText}>
                                #A7283K829
                            </Text>
                        </View>
                    </View>

                   <View style={styles.innerWhiteFooter}>
                    <TouchableOpacity onPress={() => navigation.navigate('BookingSummary')}>  
                            <Text style={styles.viewDetailsText}>
                                View details
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('WriteReview')}>
                            <Text style={styles.writeReviewText}>
                                Write review
                            </Text>
                    </TouchableOpacity>

                    </View>
                </View>
           </View>
           
        </View>
    );
}

export default CompleteBookingItem;

const styles = StyleSheet.create({
    paddingContainer: {
        paddingBottom: 20
    },
    whiteContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 14,
        elevation: 1
    },

    whiteInnerHeader: {
        height: 52,
        backgroundColor: COLORS.lightGreenText,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        alignContent: 'center',
        justifyContent: 'center'
    },

    whiteHeader: {
        flexDirection: 'row',
        paddingLeft: 15
    },

    bookingIconSize: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    },

    successfulTitleText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        paddingLeft: 10
    },

    innerWhiteContainer: {
        paddingHorizontal: 12,
        paddingVertical: 15,

    },

    whiteInnerContainer2: {
        borderWidth: 0,
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderColor: COLORS.greyBorderLine
    },

    whiteMiddleContainer2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    borderContainer: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.greyBorderLine,
        flexDirection: 'row',
        paddingBottom: 20
    },


    imageSize: {
        width: 100,
        height: 80
    },

    loungeText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14
    },

    dateIdText: {
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium
    },

    hotelText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17
    },

    headingContainer: {
        paddingLeft: 20,
        justifyContent: 'center',
    },

    viewDetailsText: {
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium,
        textDecorationLine: 'underline'
    },
    
    innerWhiteFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },

    writeReviewText:{
        color: COLORS.orangeText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        textDecorationLine: 'underline'
    }

}
)