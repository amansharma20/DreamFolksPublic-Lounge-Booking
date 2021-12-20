import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
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
export default function Offers() {
  const [checkboxState, setCheckboxState] = React.useState(false);
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
  const navigation = useNavigation();
  console.log('books is',+icons.bookk)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        {icons.bookk==5?
        null
        :
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
}
{icons.bookk==5
?
null
:
        <View style={styles.imageContainer}>
          <Image source={images.spaImage2}
            style={styles.imageSize}
          />
          <View style={styles.hotelHeadingContainer}>
            <Text style={styles.hotelText}>
            Ubon thai spa
            </Text>
            <Text style={styles.addressText}>
              Mumbai chatrapati shivaji intl. {'\n'}terminal 1
            </Text>
          </View>
        </View>
}
      {icons.bookk==5?
      null:  <View style={styles.headingInputContainer}>
            
          <Text style={styles.addressText}>
            Total guest including the member
          </Text>
          <View style={styles.adultInputContainer}>
          <View style={styles.massageTypeContainer}>
            <Text style={styles.adultText}>
            Foot reflexology
            </Text>
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

            <View style={styles.massageTypeMiddleContainer}>
            <Text style={styles.adultText}>
            Upper body massage
            </Text>
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

            <View style={styles.massageTypeContainer}>
            <Text style={styles.adultText}>
            Head massage
            </Text>
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

          </View>
        </View>
}
{icons.bookk==5?
null:
        <View style={styles.flightDateContainer}>
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
        </View>
}
{
  icons.bookk==5?
  null:
        <View style={styles.upperCardContainer}>
          <Text style={styles.addressText}>
            Select card
          </Text>
          <View style={styles.blackCardContainer}>

          </View>
        </View>
}
{icons.bookk==5?
null
:
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
                    fillColor= {COLORS.brownText}
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
                    fillColor= {COLORS.brownText}
                    iconStyle={{ borderColor: COLORS.brownText}}
                    />
                </View>
              </View>
              </View>
            </View>
          </View>
        </View>
}
{
  icons.bookk==5?
  null:
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
}
     
        <View style={styles.tableHeadingContainer}>
          <View style={styles.loungeView}>
            <Text style={styles.tableHeadingText}>
            Spa services
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
            Foot Reflexology
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
              ₹ 2500
            </Text>
          </View>
          <View style={styles.subTotalView}>
            <Text style={styles.tableMiddleText}>
              ₹ 2500
            </Text>
          </View>
        </View>

        <View style={styles.tableRupeeContainer}>
          <View style={styles.loungeView}>
            <Text style={styles.tableRupeeText}>
              ₹ 2500
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
              ₹ 2500
            </Text>
          </View>
          <View style={styles.subTotalView}>
            <Text style={styles.tableHeadingText}>
              ₹ 2500
            </Text>
          </View>
        </View>

        {/* <View style={styles.applyCodeContainer}>
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
        </View> */}
        
        <View style={styles.fakeView}>
            </View>

        <View style={styles.whiteContainer}>
          <Text style={styles.billText}>
            Bill details
          </Text>
          <View style={styles.innerWhiteMiddle}>
            <Text style={styles.addressText}>
            Authorization charge
            </Text>
            <Text style={styles.addressText}>
              ₹ 2
            </Text>
          </View>
          <View style={styles.innerWhiteHeader}>
            <Text style={styles.addressText}>
              GST (18%)
            </Text>
            <Text style={styles.addressText}>
            ₹ 00
            </Text>
          </View>
          <View style={styles.innerWhiteHeaderLast}>
            <Text style={styles.paidText}>
              To pay
            </Text>
            <Text style={styles.paidText}>
            ₹ 2
            </Text>
          </View>
        </View>
        {icons.bookk==5?
        null:
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
}
      </View>
      {icons.bookk==5?
      null
      :
      <View style={styles.footer}>
        <View>
        <Text style={styles.footerText}>
          Total amount
        </Text>
        <Text style={styles.lastAmountText}>
          ₹ 2
        </Text>
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('SpaSummary')}>
              <View style={styles.iconApplyContainer}>
                <Text style={styles.applyText}>
                Pay now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
}
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
  },

  imageSize: {
    width: 100,
    height: 80,
    borderRadius: 14
  },

  hotelHeadingContainer: {
    justifyContent: 'space-between',
    paddingLeft: 11
  },

  hotelText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsSemiBold,
    fontSize: 20
  },

  headingInputContainer: {
    paddingVertical: 30
  },

  addressText: {
    fontSize: 14,
    fontFamily: FONTS.poppinsRegular,
    color: COLORS.greyText,
    paddingBottom: 10
  },

  adultInputContainer: {
    height: 174,
    backgroundColor: COLORS.background,
    borderRadius: 14,
    padding: 16
  },

  massageTypeContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  termTextone:{
    color: COLORS.greyText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    lineHeight: 24,
    paddingLeft:5
  },

  massageTypeMiddleContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },

  adultText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 17,
    alignItems:'center',
    justifyContent:'center',
    

  },

  innerAdultContainer: {
    flexDirection: 'row'
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

  flightContainer: {
    width: '47%'
  },

  input: {
    paddingVertical: 17,
    backgroundColor: COLORS.background,
    borderRadius: 14,
    paddingLeft: 18,
    color: COLORS.brownText,
    fontSize: 17,
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

  cardNumberText:{
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

  BanklogoSize:{
    width: 64,
    height: 12,
    resizeMode: 'contain',
    paddingBottom: 6
  },

  logoSize:{
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },

  inCardRupeeText:{
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
    justifyContent: 'center',
    
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
    backgroundColor:COLORS.white,
    borderTopRightRadius:10
  },

  tableHeadingText: {
    color: COLORS.brownText,
    fontSize: 13,
    alignItems:'center',
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
    alignSelf:'center',
    alignItems:'center'
  },

  tableRupeeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 0.5,
    borderBottomWidth: 0.5,
    height: 66,
    backgroundColor:COLORS.lightPink,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  tableRupeeText: {
    color: COLORS.brownText,
    fontSize: 14,
    fontFamily: FONTS.poppinsSemiBold,
  },

  fakeView:{
    paddingVertical: 20
  },

  whiteContainer: {
    height: 210,
    padding: 21,
    backgroundColor: COLORS.white,
    borderRadius: 15,
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
  termContainer:{
    flexDirection: 'row'
},

  termText: {
    fontFamily: FONTS.poppinsRegular,
    paddingLeft: 8,
    fontSize: 14,

    color: COLORS.muddyText
},
termUnderlineText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    color: COLORS.muddyText,
    textDecorationLine: 'underline',
    paddingLeft: 5
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
    elevation:25,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },

  lastAmountText:{
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsSemiBold,
    fontSize: 17,
  },
  
  footerText:{
    fontSize: 14,
    fontFamily: FONTS.poppinsRegular,
    color: COLORS.greyText,
  },

  iconApplyContainer:{
      height: 42,
      width: 110,
      backgroundColor: COLORS.brownText,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 21
  },

  applyText:{
      color: COLORS.white,
      fontFamily: FONTS.poppinsMedium,
      fontSize: 14,
      lineHeight: 18
  }
  
})