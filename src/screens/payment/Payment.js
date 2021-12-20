import { useNavigation } from '@react-navigation/core';
import React,{useState} from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS, FONTS, icons, images } from '../../../constants';
// import Calendar from 'react-calendar';
export default function Payment() {
  const [showModal, setShowModal] = useState(false);
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [checkboxStateone, setCheckboxStateone] = React.useState(false);

  const[i,setI]=useState(1);
  const increment=()=>{
     setI(i+1);
  }
  const decrement=()=>{
    {
      i<2?
      setI(1):
      setI(i-1);
    }
      
   }
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
       {
         icons.bookk==2?

        <View style={styles.headerone}>
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
        :
        <View style={styles.headerone}>
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
        {
          icons.bookk==2?
          null:
        <View>
        <View style={styles.imageContainer}>
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
        </View>
        <View style={styles.headingInputContainer}>
          <Text style={styles.addressText}>
            Total guest including the member
          </Text>
          <View style={styles.adultInputContainer}>
            <Text style={styles.adultText}>
              Adults
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
        </View>

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
          <TouchableOpacity onPress={() =>
          showDatePicker(true)
         }>
            <Text style={styles.addressText}>
              Date (Optional)
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
         showDatePicker(true)}>
            <View>

            <TextInput
              placeholder={'29-01-2020'}
              style={styles.input}
              keyboardType="default"
              maxLength={25}
              placeholderTextColor="#5E423D"
            />
            </View>
            </TouchableOpacity>
            <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
        </View>
}

        <View style={styles.tableHeadingContainer}>
          <View style={styles.loungeView}>
            <Text style={styles.tableHeadingText}>
              Lounges
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
              The rose hotel
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
              ₹ 2500
            </Text>
          </View>
          <View style={styles.subTotalView}>
            <Text style={styles.tableHeadingText}>
              ₹ 2500
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
            {
              icons.bookk==2?
              <TouchableOpacity>
              <View style={styles.iconApplyContainer}>
                <Text style={styles.applyText}>
                  Applied
                </Text>
              </View>
            </TouchableOpacity>
              :
            <TouchableOpacity>
              <View style={styles.iconApplyContainer}>
                <Text style={styles.applyText}>
                  Apply
                </Text>
              </View>
            </TouchableOpacity>
}
          </View>
        </View>

        <View style={styles.whiteContainer}>
          <Text style={styles.billText}>
            Bill details
          </Text>
          <View style={styles.innerWhiteHeader}>
            <Text style={styles.addressText}>
              Item total
            </Text>
            <Text style={styles.addressText}>
              ₹ 2500
            </Text>
          </View>
          <View style={styles.innerWhiteHeader}>
            <Text style={styles.addressText}>
              GST (18%)
            </Text>
            <Text style={styles.addressText}>
              ₹ 150
            </Text>
          </View>
          <View style={styles.innerWhiteMiddle}>
            <Text style={styles.addressText}>
              Promo code applied
            </Text>
            <Text style={styles.minusRupeeText}>
              - ₹ 150
            </Text>
          </View>
          <View style={styles.innerWhiteHeaderLast}>
            <Text style={styles.paidText}>
              To pay
            </Text>
            <Text style={styles.paidText}>
              ₹ 2500
            </Text>
          </View>
        </View>
     {icons.bookk==2?null:   <View style={styles.termsContainer}>
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
      {icons.bookk==2?null:
      <View style={styles.footer}>
        <View>
        <Text style={styles.footerText}>
          Total amount
        </Text>
        <Text style={styles.lastAmountText}>
          ₹ 2500
        </Text>
        </View>
        <View>
        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
              <View style={styles.iconApplyContainer}>
                <Text style={styles.applyText}>
                Pay now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
}
      {showModal &&
      <GestureRecognizer
      onSwipeDown={ () => setShowModal(!showModal)}
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
                    <View style={styles.popupBackground}>
                      
                      <ScrollView>
                        
                        <View style={styles.popUpScreen}>
                        <TouchableOpacity >
                        <View style={{
                           borderBottomWidth: 3,
                           width:50,
                           marginTop: 10,
                           borderColor: COLORS.greyBorderLine,
                           alignContent:'center',
                           justifyContent:'center',
                           alignItems:'center',
                           alignSelf:'center'
                        }}>
                          </View>

                                </TouchableOpacity>
                            <View style={styles.removePicContainer}>
                                <Image source={images.paymentFailedImage}
                                    style={styles.paymentCardSize}
                                />
                            </View>
                            <View>
                                <Text style={styles.removeCardText}>
                                Payment failed!
                                </Text>
                            </View>
                            <View style={styles.middleContainer}>
                                <Text style={styles.middleText}>
                                Looks like we are having some
                                </Text>
                                <Text style={styles.middleText}>
                                issues with your Yes bank card
                                </Text>
                            </View>

                            <View>
                              <Text style={styles.suggestText}>
                              We suggest trying again some time later{"\n"}              or using a different card.
                              </Text>
                            </View>

                            <View style={styles.footerContainer}>
                            <View style={styles.innerFooter}>
                                <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
                                  
                                    <View style={styles.keepIcon}>
                                        <Text style={styles.keepText}>
                                        Change card
                                        </Text>
                                        
                                    </View>
                                </TouchableOpacity>
                                </View>
                                <View style={styles.innerFooter}>
                                <TouchableOpacity onPress={() => setShowModal(!showModal)}>                            
                                    <View style={styles.yesIcon}>
                                        <Text style={styles.yesIconText}>
                                        Retry
                                        </Text>
                                    </View> 
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        </ScrollView>
                    </View>
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
  },

  innerContainer: {
    paddingHorizontal: 20,
    paddingTop: 40
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom:30,

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
    paddingBottom: 10
  },

  imageSize: {
    width: 100,
    height: 80,
    resizeMode: 'contain'
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
  headingInputContainer: {
    paddingVertical: 30
  },

  addressText: {
    fontSize: 14,
    fontFamily: FONTS.poppinsRegular,
    color: COLORS.lightGreyText,
    paddingBottom: 10
  },

  adultInputContainer: {
    height: 58,
    backgroundColor: COLORS.background,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },

  adultText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 17
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
    paddingHorizontal: 20,
  },

  flightDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  flightContainer: {
    width: '47%'
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
    justifyContent: 'space-between',
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
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderRightWidth: 0.5,
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
    borderBottomEndRadius:10,
    borderBottomLeftRadius:10,
    backgroundColor:COLORS.background,
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
    padding: 21,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    elevation: 1
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

  innerWhiteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderColor: COLORS.greyBorderLine
  },
  innerWhiteMiddle:{
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

  termText:{
    color: COLORS.muddyText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    lineHeight: 24
  },
  termTextone:{
    color: COLORS.muddyText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    lineHeight: 24,
    paddingLeft:5
  },

  footer: {
    backgroundColor: COLORS.white,
    elevation:25,
    height: 76,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
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
    color: COLORS.lightGreyText,
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
    alignSelf: 'flex-end'
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
    paddingVertical: 28,
    alignItems: 'center',
},
middleText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 17,
},
paymentCardSize: {
    width: 89,
    height: 93,
},
suggestText:{
color: COLORS.muddyText,
fontFamily: FONTS.poppinsRegular,
fontSize: 14,

},
footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 40,
    width: '100%',
    paddingHorizontal: 20,
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