import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    _ScrollView,
    Modal,
} from 'react-native';
import { COLORS, FONTS, images, icons } from '../../../constants';

export default function ViewCards() {
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.back}
                        style={styles.backIconSize} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    My card
                </Text>
            </View>

            <View style={styles.body}>
                <View style={styles.container2}>
                    <View style={styles.header2}>
                        <Text style={styles.innerHeaderText}>
                            Premium card -1
                        </Text>
                        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                            <Image source={icons.bin}
                                style={styles.binIconStyle} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardColor1}>
                        <View style={styles.cardColor2}>
                            <View style={styles.bankIconChipView, { flex: 1 }}>
                                <View style={styles.bankIconChipView2}>
                                    <Image source={icons.yesBankk} style={styles.bankIconView} />
                                    <Image source={icons.chip} style={styles.chipIconView} />
                                </View>
                            </View>

                            <View>
                                <View>
                                    <Text style={styles.cardNameText}>
                                        Noman Rathi
                                    </Text>
                                </View>
                                <View style={styles.cardNumberView}>
                                    <Text style={styles.cardNameText}>
                                        8273 **** **** 9843
                                    </Text>
                                    <Image source={icons.masterCard}
                                        style={styles.masterCardSize} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.DetailsTextContainer}>
                        <Text style={styles.benefitsText}>
                            Card Benefits
                        </Text>
                    </View>

                    <View>

                        <View style={styles.DetailsTextContainer}>
                            <Text style={styles.benefitsOption}>
                                Indian lounges
                            </Text>

                            <Text style={styles.benefitsOptionVisit}>
                                5 visits/yr
                            </Text>
                        </View>

                        <View>
                            <View style={styles.middleBenefitOption}>
                                <Text style={styles.benefitsOption}>
                                    Indian spa
                                </Text>

                                <Text style={styles.benefitsOptionVisit}>
                                    4 visits/qtr
                                </Text>
                            </View>
                        </View>

                        <View style={styles.DetailsTextContainer}>
                            <Text style={styles.benefitsOption}>
                                Food & beverages
                            </Text>
                            <Text style={styles.benefitsOptionVisit}>
                                2 vouchers/qtr
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.allCard}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyCards')}>
                        <Text style={styles.allCardView}>
                            View all cards
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footerTextContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('PurchaseMembership')}>
                    <Image source={icons.add}
                        style={styles.addIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PurchaseMembership')}>
                    <Text style={styles.addCardIconContainer}>
                        Add new card
                    </Text>
                </TouchableOpacity>
            </View>
            {showModal &&
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setShowModal(!showModal);
                    }}
                >
                    <View style={styles.popupBackground}>
                        <View style={styles.popUpScreen}>
                            <View style={styles.removePicContainer}>
                                <Image source={images.removeCard}
                                    style={styles.removeCardSize}
                                />
                            </View>
                            <View>
                                <Text style={styles.removeCardText}>
                                    Remove card
                                </Text>
                            </View>
                            <View style={styles.middleContainer}>
                                <Text style={styles.middleText}>
                                    Are you sure, you want to
                                </Text>
                                <Text style={styles.middleText}>
                                    remove this card?
                                </Text>
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
                                <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
                                    <View style={styles.yesIcon}>
                                        <Text style={styles.yesIconText}>
                                            Yes, remove
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.mainBackground,
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 40 : 0
    },
    headerText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        lineHeight: 22,
        paddingLeft: 15
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },

    backIconSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    body: {
        flex: 1,
        paddingHorizontal: 20,
    },

    container2: {
        backgroundColor: COLORS.mainBackground,
        paddingVertical: 20,
        borderRadius: 14,
        paddingHorizontal: 18,
        elevation: 5
    
    },
    footerTextContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        elevation: 5
    },

    addIconStyle: {
        width: 20,
        height: 20
    },

    innerHeaderText: {
        color: COLORS.greyText,
        fontSize: 14,
        height: 20,
        alignContent: 'space-between',
    },

    binIconStyle: {
        width: 23,
        height: 23
    },


    benefitsText: {
        fontSize: 14,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        paddingTop: 20,
        paddingBottom: 10
    },

    benefitsOption: {
        color: COLORS.lightGreyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular
    },

    benefitsOptionVisit: {
        fontSize: 14,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular
    },

    middleBenefitOption: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    header2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    DetailsTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    allCardView: {
        color: COLORS.brownText,
        textDecorationLine: 'underline',
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium
    },

    allCard: {
        paddingVertical: 36,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardColor1: {
        paddingTop: 12
    },

    cardColor2: {
        backgroundColor: COLORS.orangeText,
        padding: 15,
        borderRadius: 10,
        height: 180
    },

    bankIconChipView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    bankIconChipView2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    bankIconView: {
        width: 80,
        height: 35,
        resizeMode: 'stretch'
    },

    chipIconView: {
        width: 40,
        height: 35,
        resizeMode: 'contain'
    },

    cardNameText: {
        color: COLORS.white
    },

    cardNumberView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5
    },

    masterCardSize: {
        width: 20,
        height: 18,
        resizeMode: 'contain'
    },

    addCardIconContainer: {
        color: COLORS.orangeText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        padding: 20
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
        backgroundColor: COLORS.mainBackground,

    },
    removePicContainer: {
        paddingVertical: 30,
    },
    removeCardText: {
        color: COLORS.brownText,
        fontSize: 30,
        fontFamily: FONTS.poppinsBold
    },
    middleContainer: {
        paddingVertical: 28,
        alignItems: 'center',
    },
    middleText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 17,
    },
    removeCardSize: {
        width: 89,
        height: 93
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
}
)