import { useNavigation } from '@react-navigation/core';
import React,{useState} from 'react';
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

export default function FandBPayment() {
    const [checkboxState, setCheckboxState] = React.useState(false);
    const navigation = useNavigation();
    const[i,setI]=useState(1);
  const[j,setJ]=useState(1);
  const[k,setK]=useState(1);

    const increment=()=>{
       setI(i+1);
    }
    const decrement=()=>{
      i<2?
      setI(1)
      :
        setI(i-1);
     }
     const incrementone=()=>{
      
      setJ(j+1);
   }
   const decrementone=()=>{
    j<2?
    setJ(1):
       setJ(j-1);
    }
    const incrementtwo=()=>{
      setK(k+1);
   }
   const decrementtwo=()=>{
     k<2?
      setK(1)
      :
       setK(k-1);
    }
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
                <View style={styles.imageContainer}>
                    <Image source={images.foodImage}
                        style={styles.imageSize}
                    />
                    <View style={styles.hotelHeadingContainer}>
                        <Text style={styles.hotelText}>
                            Aroma’s hyderabad house
                        </Text>
                        <Text style={styles.addressText}>
                            Mumbai chatrapati shivaji intl. {'\n'}terminal 1
                        </Text>
                    </View>
                </View>
                <View style={styles.headingInputContainer}>
                    <Text style={styles.addressText}>
                        Menu
                    </Text>
                    <View style={styles.MenuContainer}>
                        <View style={styles.innerMenuContainer}>
                            <View style={styles.innerMenu}>
                            <Text style={styles.vegText}>
                                Veg biryani combo
                            </Text>
                            </View>
                            <View style={styles.innerAdultContainer}>
                                <TouchableOpacity onPress={decrement}>
                                    <Image source={icons.iconRemovePicker}
                                        style={styles.addRemoveIconSize}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.memberNumberText}>
                                    {i}
                                </Text>
                                <TouchableOpacity onPress={increment}>
                                    <Image source={icons.iconAddPicker}
                                        style={styles.addRemoveIconSize}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.innerMenuMiddleContainer}>
                        <View style={styles.innerMenu}>
                            <Text style={styles.vegText}>
                            Chicken biryani combo
                            </Text>
                            </View>
                            <View style={styles.innerAdultContainer}>
                                <TouchableOpacity onPress={decrementone}>
                                    <Image source={icons.iconRemovePicker}
                                        style={styles.addRemoveIconSize}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.memberNumberText}>
                                    {j}
                                </Text>
                                <TouchableOpacity onPress={incrementone}>
                                    <Image source={icons.iconAddPicker}
                                        style={styles.addRemoveIconSize}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.innerMenuContainer}>
                        <View style={styles.innerMenu}>
                            <Text style={styles.vegText}>
                            Mutton biryani combo
                            </Text>
                            </View>
                            <View style={styles.innerAdultContainer}>
                                <TouchableOpacity onPress={decrementtwo}>
                                    <Image source={icons.iconRemovePicker}
                                        style={styles.addRemoveIconSize}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.memberNumberText}>
                                    {k}
                                </Text>
                                <TouchableOpacity onPress={incrementtwo}>
                                    <Image source={icons.iconAddPicker}
                                        style={styles.addRemoveIconSize}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>
                </View>

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
                                        ₹ 2000
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
                                        ₹ 2000
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
                    <TouchableOpacity onPress={() => navigation.navigate('PurchaseMembership')}>
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
                        Food & beverage
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
                        Veg biryani combo
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
                        ₹ 200
                        </Text>
                    </View>
                    <View style={styles.subTotalView}>
                        <Text style={styles.tableMiddleText}>
                        ₹ 200
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
                        ₹ 200
                        </Text>
                    </View>
                    <View style={styles.subTotalView}>
                        <Text style={styles.tableHeadingText}>
                        ₹ 200
                        </Text>
                    </View>
                </View>

                <View style={styles.applyCodeContainer}>
                    <Text style={styles.addressText}>
                        Apply promo code
                    </Text>
                    <View style={styles.codeInputContainer}>
                        <TextInput
                            placeholder="Code"
                            //textAlign= 'center'
                            style={styles.inputCode}
                            keyboardType="default"
                            maxLength={15}
                            placeholderTextColor={COLORS.brownText}
                            fontSize={17}
                        />
                        <TouchableOpacity>
                            <View style={styles.iconApplyContainer}>
                                <Text style={styles.applyText}>
                                    Apply
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
                        ₹ 200
                        </Text>
                    </View>
                    <View style={styles.innerWhiteMiddle}>
                        <Text style={styles.addressText}>
                            GST (18%)
                        </Text>
                        <Text style={styles.addressText}>
                        ₹ 20
                        </Text>
                    </View>
                    <View style={styles.innerWhiteHeader}>
                        <Text style={styles.addressText}>
                            Promo code applied
                        </Text>
                        <Text style={styles.minusRupeeText}>
                        - ₹ 40
                        </Text>
                    </View>
                    <View style={styles.innerWhiteHeaderLast}>
                        <Text style={styles.paidText}>
                            To pay
                        </Text>
                        <Text style={styles.paidText}>
                            ₹ 200
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
                        ₹ 200
                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('FandBOrderDetails')}>
                        <View style={styles.iconApplyContainer}>
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
        justifyContent: 'space-between'
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

    imageContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 10,
    },

    imageSize: {
        width: 100,
        height: 80,
        borderRadius: 14
    },

    hotelHeadingContainer: {
        justifyContent: 'space-between',
        paddingLeft: 11,
        width: '70%'
    },

    hotelText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 17,
        
    },

    headingInputContainer: {
        paddingBottom: 10
    },

    addressText: {
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.greyText,
        paddingBottom: 10
    },

    MenuContainer: {
        backgroundColor: COLORS.background,
        borderRadius: 14,
        padding: 18,
    },

    innerMenuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    innerMenu:{
        width: '60%',
    },

    innerMenuMiddleContainer:{
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },

    vegText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 15
    },

    innerAdultContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    addRemoveIconSize: {
        width: 29,
        height: 29,
        resizeMode: 'contain'
    },

    memberNumberText: {
        fontFamily: FONTS.poppinsSemiBold,
        color: COLORS.brownText,
        fontSize: 22,
        paddingHorizontal: 19
    },

    flightDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    flightContainer: {
        width: '45%'
    },

    input: {
        height: 58,
        backgroundColor: COLORS.background,
        borderRadius: 14,
        paddingLeft: 18,
        color: COLORS.brownText,
        fontSize: 17,
    },

    upperCardContainer: {
        paddingTop: 30,
        width: '100%'
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
        //paddingHorizontal: 71,
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

    addIconSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
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
        height: 66,
        borderRightWidth: 0.5,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:COLORS.white
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
        backgroundColor:COLORS.lightPink,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        height: 66
    },

    tableRupeeText: {
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsSemiBold,
    },

    codeInputContainer: {
        backgroundColor: COLORS.background,
        borderRadius: 29,
        height: 58,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 8,

    },
    inputCode: {
        height: 58,
        color: '#023373',
        borderRadius: 15,
        fontSize: 24,
        paddingLeft: 25
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

    applyCodeContainer: {
        paddingVertical: 30
    },

    whiteContainer: {
        height: 250,
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

    termsContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    termText: {
        color: COLORS.greyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        lineHeight: 24
    },

    footer: {
        backgroundColor: COLORS.white,
        height: 76,
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        elevation:10,
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