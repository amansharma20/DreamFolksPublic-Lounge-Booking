import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS, FONTS, icons, images } from '../../../constants';

export default function MandAPayment() {
    const [checkboxState, setCheckboxState] = React.useState(false);
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={icons.back}
                                style={styles.backSize}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.headerText}>Payment</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.helpText}>
                            Help?
                        </Text>
                    </View>
                </View>

                <View style={styles.detailsContainer}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.detailsText}>
                            Destination:
                        </Text>
                        <Text style={styles.detailsText}>
                            Arrival date:
                        </Text>
                        <Text style={styles.detailsText}>
                            Terminal no.:
                        </Text>
                        <Text style={styles.detailsText}>
                            Pax details:
                        </Text>
                        <Text style={styles.detailsText}>
                            Flight no.:
                        </Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.detailsText}>
                            Mumbai airport
                        </Text>
                        <Text style={styles.detailsText}>
                            03 - 07 - 2021
                        </Text>
                        <Text style={styles.detailsText}>
                            Terminal 1
                        </Text>
                        <Text style={styles.detailsText}>
                            2
                        </Text>
                        <Text style={styles.detailsText}>
                            6E 8246
                        </Text>
                    </View>
                </View>
                {/* <View style={styles.imageContainer}>
          <Image source={images.image}
            style={styles.imageSize}
          />
          <View style={styles.hotelHeadingContainer}>
            <Text style={styles.hotelText}>
              The rose hotel
            </Text>
            <Text style={styles.addressText}>
              Mumbai chatrapati shivaji intl. {'\n'}terminal 1
            </Text>
          </View>
        </View> */}
                {/* <View style={styles.headingInputContainer}>
          <Text style={styles.addressText}>
            Total guest including the member
          </Text>
          <View style={styles.adultInputContainer}>
            <Text style={styles.adultText}>
              Adults
            </Text>
            <View style={styles.innerAdultContainer}>
              <TouchableOpacity>
                <Image source={icons.iconRemovePicker}
                  style={styles.addRemoveIconSize}
                />
              </TouchableOpacity>
              <Text style={styles.memberNumberText}>
                1
              </Text>
              <TouchableOpacity>
                <Image source={icons.iconAddPicker}
                  style={styles.addRemoveIconSize}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View> */}

                {/* <View style={styles.flightDateContainer}>
          <View style={styles.flightContainer}>
            <Text style={styles.addressText}>
              Flight no. (Optional)
            </Text>

            <TextInput
              placeholder="6E 8246i"
              style={styles.input}
              keyboardType="default"
              maxLength={10}
              placeholderTextColor="#5E423D"
            />
          </View>
          <View style={styles.flightContainer}>
            <Text style={styles.addressText}>
              Date (Optional)
            </Text>
            <TextInput
              placeholder="03 - 07 - 2021"
              style={styles.input}
              keyboardType="default"
              maxLength={25}
              placeholderTextColor="#5E423D"
            />
          </View>
        </View> */}

                <View style={styles.upperCardContainer}>
                    <Text style={styles.addressText}>
                        Select card
                    </Text>
                    <View style={styles.blackCardContainer}>
                    </View>
                </View>

                <View style={styles.cardsContainer}>
                    <View style={styles.upperCardContainer}>
                        <Text style={styles.addressText}>
                            You can choose one more card from below
                        </Text>
                        <View style={styles.cardsContainer}>
                            <View style={styles.greenCardContainer}>
                                <View>
                                    <Image source={icons.SBI}
                                        style={styles.BanklogoSize}
                                    />
                                    <View style={styles.cardsContainer}>
                                        <Text style={styles.cardNumberText}>
                                            **** 9843
                                        </Text>
                                        <Image source={icons.masterCard}
                                            style={styles.logoSize}
                                        />
                                    </View>
                                </View>

                                <View style={styles.cardsContainer}>
                                    <Text style={styles.inCardRupeeText}>
                                    ₹ 3200
                                    </Text>
                                    <View
                                        style={{
                                            width: 16, height: 16, alignItems: "center",
                                            backgroundColor: checkboxState ? "" : "",
                                        }
                                        }>
                                        <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                                            fillColor={COLORS.brownText}
                                            iconStyle={{ borderColor: COLORS.brownText }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.orangeContainer}>
                                <View>
                                    <Image source={icons.yesBankk}
                                        style={styles.BanklogoSize}
                                    />
                                    <View style={styles.cardsContainer}>
                                        <Text style={styles.cardNumberText}>
                                            **** 9843
                                        </Text>
                                        <Image source={icons.masterCard}
                                            style={styles.logoSize}
                                        />
                                    </View>
                                </View>

                                <View style={styles.cardsContainer}>
                                    <Text style={styles.inCardRupeeText}>
                                        ₹ 3000
                                    </Text>
                                    <View
                                        style={{
                                            width: 16, height: 16, alignItems: "center",
                                            backgroundColor: checkboxState ? "" : "",
                                        }
                                        }>
                                        <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)
                                        }
                                            fillColor={COLORS.brownText}
                                            iconStyle={{ borderColor: COLORS.brownText }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.buttonViewContainer}>
                    <TouchableOpacity>
                        <View style={styles.buttoncontainer}>
                            <Text
                                style={styles.buttonTextContainer}>
                                Add new card/Purchase membership
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.tableHeadingContainer}>
                    <View style={styles.loungeView}>
                        <Text style={styles.tableHeadingText}>
                            M&A
                        </Text>
                    </View>
                    <View style={styles.complimentaryView}>
                        <Text style={styles.tableHeadingText}>
                            Complimentary
                        </Text>
                    </View>
                    <View style={styles.paidView}>
                        <Text style={styles.tableHeadingText}>
                            Paid
                        </Text>
                    </View>
                    <View style={styles.unitPriceView}>
                        <Text style={styles.tableHeadingText}>
                            Unit price
                        </Text>
                    </View>
                    <View style={styles.subTotalView}>
                        <Text style={styles.tableHeadingText}>
                            Sub total
                        </Text>
                    </View>
                </View>

                <View style={styles.tableMiddleContainer}>
                    <View style={styles.loungeView}>
                        <Text style={styles.tableMiddleText}>
                            Platinum M&A
                        </Text>
                    </View>
                    <View style={styles.complimentaryView}>
                        <Text style={styles.tableMiddleText}>
                            1
                        </Text>
                    </View>
                    <View style={styles.paidView}>
                        <Text style={styles.tableMiddleText}>
                            1
                        </Text>
                    </View>
                    <View style={styles.unitPriceView}>
                        <Text style={styles.tableMiddleText}>
                            ₹ 3000
                        </Text>
                    </View>
                    <View style={styles.subTotalView}>
                        <Text style={styles.tableMiddleText}>
                            ₹ 3000
                        </Text>
                    </View>
                </View>

                <View style={styles.tableRupeeContainer}>
                    <View style={styles.loungeView}>
                        <Text style={styles.tableRupeeText}>
                            Total amount
                        </Text>
                    </View>
                    <View style={styles.complimentaryView}>
                        <Text style={styles.tableHeadingText}>
                            1
                        </Text>
                    </View>
                    <View style={styles.paidView}>
                        <Text style={styles.tableHeadingText}>
                            1
                        </Text>
                    </View>
                    <View style={styles.unitPriceView}>
                        <Text style={styles.tableHeadingText}>
                            ₹ 3000
                        </Text>
                    </View>
                    <View style={styles.subTotalView}>
                        <Text style={styles.tableHeadingText}>
                            ₹ 3000
                        </Text>
                    </View>
                </View>
                <View style={styles.emptyView}>
                </View>

                <View style={styles.whiteContainer}>
                    <Text style={styles.billText}>
                        Bill details
                    </Text>
                    <View style={styles.innerWhiteMiddle}>
                        <Text style={styles.addressText}>
                            Item total
                        </Text>
                        <Text style={styles.addressText}>
                            ₹ 3000
                        </Text>
                    </View>
                    <View style={styles.innerWhiteHeader}>
                        <Text style={styles.addressText}>
                            GST (18%)
                        </Text>
                        <Text style={styles.addressText}>
                            ₹ 300
                        </Text>
                    </View>
                    <View style={styles.innerWhiteHeaderLast}>
                        <Text style={styles.paidText}>
                            To pay
                        </Text>
                        <Text style={styles.paidText}>
                            ₹ 3300
                        </Text>
                    </View>
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
                            iconStyle={{ borderColor: COLORS.brownText, borderRadius: 6}}
                            size={20}
                        />
                    </View>
                    <View style={styles.termContainer}>
                    <Text style={styles.termText}>
                        I accept all 
                    </Text>
                    <Text style={styles.termUnderlineText}>
                    terms
                    </Text>
                    <Text style={styles.termTextone}>
                    &
                    </Text>
                    <Text style={styles.termUnderlineText}>
                    conditions
                    </Text>
                    </View>
                    </View>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.footerText}>
                        Total amount
                    </Text>
                    <Text style={styles.lastAmountText}>
                        ₹ 3300
                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('MandABookingSummary')}>
                        <View style={styles.iconPayNowContainer}>
                            <Text style={styles.applyText}>
                                Pay now
                            </Text>
                        </View>
                    </TouchableOpacity>
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
        paddingTop: 40
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15
    },

    backSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    headerText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        lineHeight: 22,
        paddingLeft: 15
    },

    helpText: {
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.orangeText,
        textDecorationLine: 'underline'
    },

    detailsContainer: {
        flexDirection: 'row',
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderColor: COLORS.greyBorderLine
    },

    infoContainer: {
        width: '33%',
    },

    detailsText: {
        color: COLORS.lightGreyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingTop: 10
    },

    imageContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 10
    },

    addressText: {
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.greyText,
        paddingBottom: 10
    },


    upperCardContainer: {
        paddingTop: 30,
        width: '100%',
    },

    blackCardContainer: {
        height: 110,
        backgroundColor: COLORS.black,
        width: '47%',
        borderRadius: 14,
    },

    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    cardNumberText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 12
    },

    greenCardContainer: {
        height: 110,
        backgroundColor: COLORS.lightGreenText,
        borderRadius: 14,
        width: '47%',
        padding: 12,
        justifyContent: 'space-between'
    },

    BanklogoSize: {
        width: 64,
        height: 12,
        resizeMode: 'contain',
        paddingBottom: 6
    },

    logoSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    inCardRupeeText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 14
    },

    orangeContainer: {
        height: 110,
        backgroundColor: COLORS.cardOrange,
        borderRadius: 14,
        width: '47%',
        padding: 12,
        justifyContent: 'space-between'
    },

    buttonViewContainer: {
        paddingVertical: 30,
    },

    buttoncontainer: {
        borderRadius: 26,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: COLORS.orangeText
    },

    buttonTextContainer: {
        fontFamily: FONTS.poppinsMedium,
        fontSize: 16,
        color: COLORS.orangeText,
    },

    loungeView: {
        borderRightWidth: 0.5,
        width: '18%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    complimentaryView: {
        borderRightWidth: 0.5,
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    paidView: {
        borderRightWidth: 0.5,
        width: '13%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    unitPriceView: {
        borderRightWidth: 0.5,
        width: '13%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    subTotalView: {
        borderRightWidth: 0,
        width: '13%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    tableHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 0.5,
        borderBottomWidth: 0,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        backgroundColor:COLORS.white,
        height: 66,
        borderRightWidth: 0.5
    },

    tableHeadingText: {
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsSemiBold,
    },

    tableMiddleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 0.5,
        borderBottomWidth: 0,
        height: 66
    },

    tableMiddleText: {
        color: COLORS.muddyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
    },

    tableRupeeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 0.5,
        borderBottomWidth: 0.5,
        height: 66,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        backgroundColor:COLORS.lightPink
    },
     termContainer:{
        flexDirection: 'row'
    },
    
      termText: {
        fontFamily: FONTS.poppinsRegular,
        paddingLeft: 8,
        fontSize: 14,
    
        color: COLORS.muddyText
    },
    termTextone:{
        color: COLORS.greyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        lineHeight: 24,
        paddingLeft:5
      },
    termUnderlineText: {
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        color: COLORS.muddyText,
        textDecorationLine: 'underline',
        paddingLeft: 5
    },

    tableRupeeText: {
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsSemiBold,
    },

    iconPayNowContainer: {
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

    emptyView: {
        paddingVertical: 20
    },

    whiteContainer: {
        padding: 21,
        backgroundColor: COLORS.white,
        borderRadius: 15
    },

    billText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        borderWidth: 0,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: COLORS.greyBorderLine
    },

    innerWhiteMiddle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        borderWidth: 0,
        borderBottomWidth: 0.5,
        borderColor: COLORS.greyBorderLine
    },

    innerWhiteHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.greyBorderLine
    },

    innerWhiteHeaderLast: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },

    minusRupeeText: {
        color: COLORS.redText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
    },

    paidText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
    },

    termsText: {
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.greyText,
        paddingLeft: 12,
        paddingTop: 8
    },

    termsContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    footer: {
        backgroundColor: COLORS.white,
        height: 76,
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
        paddingHorizontal: 20,
        elevation:5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    lastAmountText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 17,
    },

    footerText: {
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.greyText,
    }

})