import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, Alert, ScrollView } from 'react-native';
import { COLORS, FONTS, icons, images } from '../.././../constants';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CommonQrButton from '../../components/CommonQrButton';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default function BookingSummary() {
    const [showModal, setShowModal] = useState(false);
    const [checkboxState, setCheckboxState] = React.useState(false);
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.header}>
                    <View style={styles.innerHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={icons.back}
                                style={styles.backSize} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>
                            Booking summary
                        </Text>
                    </View>

                </View>

                <View style={styles.innerHeaderPicHeading}>

                    <Image source={images.spaImage2}
                        style={styles.picSize}
                    />

                    <View style={styles.innerHeaderHeading}>
                        <View>
                            <Text style={styles.hotelText}>
                                Ubon thai spa
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.addressText}>
                                Mumbai chatrapati shivaji intl. {"\n"}terminal 1
                            </Text>
                        </View>

                    </View>
                </View>
            </View>

            <View style={styles.dateDetailContainer}>
                <View style={styles.detailsDirectionContainer}>
                    <View style={styles.leftContent}>
                        <Text style={styles.addressText}>
                            Date:
                        </Text>
                    </View>
                    <View style={styles.rightContent}>
                        <Text style={styles.addressText}>
                            Monday, 3 July 2021
                        </Text>
                    </View>
                </View>
                <View style={styles.flightNumberContainer}>
                    <View style={styles.leftContent}>
                        <Text style={styles.addressText}>
                            Flight no:
                        </Text>
                    </View>
                    <View style={styles.rightContent}>
                        <Text style={styles.addressText}>
                            6E 8246 Delhi
                        </Text>
                    </View>
                </View>
                <View style={styles.detailsDirectionContainer}>
                    <View style={styles.leftContent}>
                        <Text style={styles.addressText}>
                            Travellers:
                        </Text>
                    </View>
                    <View style={styles.rightContent}>
                        <Text style={styles.addressText}>
                            2
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.namingContainer}>
                <View style={styles.detailsDirectionContainer}>
                    <View style={styles.leftContent}>
                        <Text style={styles.addressText}>
                            Name:
                        </Text>
                    </View>
                    <View style={styles.rightContent}>
                        <Text style={styles.addressText}>
                            Naman Rathi
                        </Text>
                    </View>
                </View>
                <View style={styles.flightNumberContainer}>
                    <View style={styles.leftContent}>
                        <Text style={styles.addressText}>
                            Phone:
                        </Text>
                    </View>
                    <View style={styles.rightContent}>
                        <Text style={styles.addressText}>
                            +91 73842 81936
                        </Text>
                    </View>
                </View>
                <View style={styles.detailsDirectionContainer}>
                    <View style={styles.leftContent}>
                        <Text style={styles.addressText}>
                            Booking ID:
                        </Text>
                    </View>
                    <View style={styles.rightContent}>
                        <Text style={styles.addressText}>
                            #A7283K829
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.serviceContainer}>
                <Text>
                    Services
                </Text>
                <View style={styles.servicesContainer}>
                    <Text style={styles.servicesText}>
                        Foot reflexology
                    </Text>
                    <Text style={styles.servicesText}>
                        X1
                    </Text>
                </View>
                <View style={styles.servicesContainer}>
                    <Text style={styles.servicesText}>
                        Upper body massage
                    </Text>
                    <Text style={styles.servicesText}>
                        X1
                    </Text>
                </View>

                <View style={styles.servicesContainer}>
                    <Text style={styles.servicesText}>
                        Head massage
                    </Text>
                    <Text style={styles.servicesText}>
                        X1
                    </Text>
                </View>

            </View>
            <CommonQrButton onPress={() => navigation.navigate('SpaQR')}
                title={'View QR code'} />

            <View style={styles.paidContainer}>
                <View style={styles.paidContainerPart}>
                    <View style={styles.paidContainerPartSame}>
                        <View>
                            <Text style={styles.paidText}>
                                Total paid
                            </Text>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.paidRupeeText}>
                                    ₹ 2500
                                </Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.paidContainerPart2}>
                        <TouchableOpacity onPress={() => {
                            icons.bookk=2
                            navigation.navigate('Payment')}}>
                            <View>
                                <Text style={styles.iconDetailsText}>
                                    View details
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.downloadInvoiceContainer}>

                                <View style={{ paddingRight: 7 }}>
                                    <Image source={icons.download}
                                        style={styles.downloadIconSize}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.downloadInvoiceText}>
                                        Download invoice
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>

                <TouchableOpacity style={{width:'70%'}} onPress={() => setShowModal(!showModal)}>
                    <View style={styles.bottomButton}>
                        <Text style={styles.bottomButtonText}>
                            Cancel booking
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>

            {showModal &&
                <GestureRecognizer
                    onSwipeDown={() => setShowModal(!showModal)}
                >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showModal}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setShowModal(!showModal);
                        }}
                    >
                        <ScrollView>
                            <View style={styles.popupBackground}>

                                <View style={styles.popUpScreen}>
                                    <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                                        <View style={styles.upperSlider}>
                                        </View>

                                    </TouchableOpacity>
                                    <View style={styles.removePicContainer}>
                                        <Image source={images.cancelBooking}
                                            style={styles.removeCardSize}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.removeCardText}>
                                            Cancel booking
                                        </Text>
                                    </View>
                                    <View style={styles.middleContainer}>
                                        <Text style={styles.middleText}>
                                            Are you sure, you want to
                                        </Text>
                                        <Text style={styles.middleText}>
                                            cancel this booking?
                                        </Text>
                                    </View>

                                    <View style={styles.middleContainer2}>
                                        <Text style={styles.middleText2}>
                                            As a cancellation fee, 15% of the paid
                                        </Text>
                                        <Text style={styles.middleText2}>
                                            amount will be deducted
                                        </Text>
                                    </View>

                                    <View style={styles.termsContainer}>
                                        <View
                                            style={{
                                                alignItems: "center",
                                                backgroundColor: checkboxState ? "" : "",
                                            }
                                            }>
                                            <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                                                fillColor={COLORS.orangeText}
                                                iconStyle={{ borderColor: COLORS.brownText, borderRadius: 6, borderColor: COLORS.cardOrange }}
                                                size={20}
                                                sty
                                            />
                                        </View>
                                        <View style={styles.termContainer}>
                                            <Text style={styles.termText}>
                                                I accept all
                                            </Text>
                                            <Text style={styles.termUnderlineText}>
                                                terms
                                            </Text>
                                            <Text style={styles.andText}>
                                                &
                                            </Text>
                                            <Text style={styles.termUnderlineText}>
                                                conditions
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.footerContainer}>
                                        <View style={styles.innerFooter}>
                                            <TouchableOpacity onPress={() => setShowModal(false)}>
                                                <View style={styles.keepIcon}>
                                                    <Text style={styles.keepText}>
                                                        Keep
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.innerFooter}>
                                            <TouchableOpacity>
                                                <View style={styles.yesIcon}>
                                                    <Text style={styles.yesIconText}>
                                                        Yes, cancel
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>

                    </Modal>
                </GestureRecognizer>
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackground,
        paddingVertical: 40,
        paddingHorizontal: 20

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 40 : 0,
        paddingVertical: 10
    },

    headerText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24,
        paddingLeft: 15
    },

    innerHeaderPicHeading: {
        paddingVertical: 10,
        flexDirection: 'row'
    },
    innerHeaderHeading: {
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    flightNumberContainer: {
        flexDirection: 'row',
        paddingVertical: 10
    },

    namingContainer: {
        paddingVertical: 20,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.greyBorderLine
    },

    addressText: {
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        color: COLORS.muddyText,
    },

    hotelText: {
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 20,
        color: COLORS.brownText
    },

    picSize: {
        width: 100,
        height: 80,
        borderRadius: 14
    },

    innerHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    backSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    dateDetailContainer: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.greyLine,
        paddingVertical: 20,
    },

    detailsDirectionContainer: {
        flexDirection: 'row'
    },
    leftContent: {
        flex: 1
    },
    rightContent: {
        flex: 2.3
    },

    serviceContainer: {
        paddingTop: 20,
        paddingBottom: 30
    },

    servicesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    servicesText: {
        paddingTop: 10,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        color: COLORS.muddyText,
    },

    paidContainer: {
        paddingVertical: 30,
    },

    paidContainerPart: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 16,
        height: 86,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    paidContainerPartSame: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    paidText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium
    },

    paidRupeeText: {
        fontSize: 17,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsSemiBold
    },

    paidContainerPart2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconDetailsText: {
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium,
        textDecorationLine: 'underline'
    },

    downloadInvoiceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    downloadIconSize: {
        width: 20,
        height: 20
    },

    downloadInvoiceText: {
        color: COLORS.orangeText,
        fontSize: 13,
        fontFamily: FONTS.poppinsRegular,
        textDecorationLine: 'underline'
    },

    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },

    bottomButton: {
        justifyContent: 'center',
        backgroundColor: COLORS.mainBackground,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: COLORS.orangeText,
        alignItems: 'center',
        paddingVertical: 14
    },

    bottomButtonText: {
        fontSize: 17,
        color: COLORS.orangeText,
        fontFamily: FONTS.poppinsMedium
    },

    popupBackground: {
        paddingTop: '80%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    popUpScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        backgroundColor: COLORS.mainBackground
    },
    upperSlider: {
        borderBottomWidth: 5,
        width: 30,
        marginTop: 20,
        borderColor: COLORS.brownText,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 4
    },

    removePicContainer: {
        paddingVertical: 30,
    },

    removeCardText: {
        color: COLORS.brownText,
        fontSize: 30,
        fontFamily: FONTS.poppinsBoldremoveCardText
    },

    middleContainer: {
        paddingTop: 28,
        alignItems: 'center',
    },

    middleText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 17,
    },

    middleContainer2: {
        paddingVertical: 19,
        alignItems: 'center',
    },

    middleText2: {
        color: COLORS.muddyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    termsContainer: {
        flexDirection: 'row'
    },
    termContainer: {
        flexDirection: 'row',
    },

    termText: {
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        lineHeight: 24,
        color: COLORS.muddyText
    },
    andText: {
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        lineHeight: 24,
        color: COLORS.muddyText,
        paddingLeft: 5
    },
    termUnderlineText: {
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        color: COLORS.muddyText,
        textDecorationLine: 'underline',
        lineHeight: 24,
        paddingLeft: 5
    },


    removeCardSize: {
        width: 120,
        height: 75
    },

    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        width: '100%',
        paddingHorizontal: 20
    },
    innerFooter: {
        width: '47%'
    },

    keepIcon: {
        paddingVertical: 14,
        borderRadius: 26,
        borderColor: COLORS.orangeText,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },

    keepText: {
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        color: COLORS.orangeText,
        lineHeight: 24
    },

    yesIcon: {
        paddingVertical: 14,
        borderRadius: 26,
        backgroundColor: COLORS.orangeText,
        alignItems: 'center',
        justifyContent: 'center',
    },

    yesIconText: {
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        color: COLORS.white,
        lineHeight: 24
    },



})