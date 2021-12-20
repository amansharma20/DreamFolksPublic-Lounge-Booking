import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  Modal,
} from 'react-native';
import { COLORS, FONTS, images, icons } from '../../../constants';

export default function All() {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  return (

    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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

          {/* <Image source={require('../../assets/yesbankcard.png')} style={{ paddingLeft: 18,paddingRight: 18 }}/> */}
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
        <View style={styles.gapTwoContainers}>
          <View style={styles.container2}>
            <View style={styles.header2}>

              <Text style={styles.innerHeaderText}>
                DF card
              </Text>
              <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <Image source={icons.bin}
                  style={styles.binIconStyle} />
              </TouchableOpacity>
            </View>

            <View style={styles.cardColor1}>
              <View style={styles.cardColor3}>

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

            {/* <Image source={require('../../assets/yesbankcard.png')} style={{ paddingLeft: 18,paddingRight: 18 }}/> */}
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
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddNewCard')}>

          <View style={styles.bottomIconInnerContainer}>
            <View>
              <Image
                source={icons.add}
                style={styles.addCardIcon}
              />
            </View>
            <View>
              <Text
                style={
                  styles.addCardText
                }>
                Add new card
              </Text>
            </View>

          </View>
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
            }}>
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
                  <TouchableOpacity>
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
    </ScrollView>
     );
    }

    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#FDF8F5',
          flex: 1,
          paddingTop: (Platform.OS === 'ios') ? 10 : 0,
        },

        body: {
            paddingHorizontal: 20,
          },
        
          gapTwoContainers: {
            paddingVertical: 20
          },
        
          container2: {
            backgroundColor: COLORS.mainBackground,
            paddingVertical: 20,
            borderRadius: 14,
            paddingHorizontal: 18,
            elevation: 2
          },
        
          header2: {
            flexDirection: 'row',
            justifyContent: 'space-between',
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
        
          cardColor1: {
            paddingTop: 12
          },
        
          cardColor2: {
            backgroundColor: COLORS.orangeText,
            height: 180,
            padding: 15,
            borderRadius: 10
          },
        
          cardColor3: {
            backgroundColor: 'black',
            height: 180,
            padding: 15,
            borderRadius: 10
          },
        
          bankIconChipView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        
          bankIconChipView2: {
            flexDirection: 'row',
            justifyContent: 'space-between'
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
        
          DetailsTextContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        
          benefitsText: {
            fontSize: 14,
            color: COLORS.brownText,
            fontFamily: FONTS.poppinsMedium,
            paddingTop: 20,
            paddingBottom: 10,
          },
        
          benefitsOption: {
            color: COLORS.greyText,
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
        
          footer: {
            flexDirection: 'row',
            backgroundColor: COLORS.white,
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            marginTop:10,
            elevation:5
          },
        
          bottomIconInnerContainer: {
             flexDirection: 'row', 
             justifyContent: 'space-between', 
             alignItems: 'center',
          },
        
          addCardIcon: {
            width: 20,
            height: 20,
            resizeMode: 'contain',
          },
        
          addCardText: {
            fontFamily: FONTS.poppinsMedium,
            fontSize: 17,
            padding: 25,
            color: COLORS.orangeText,
            lineHeight: 24
          },
        
          popupBackground: {
            paddingTop:'80%',
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
          removePicContainer: {
            paddingTop: 50,
            paddingBottom: 30
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
            paddingBottom: 80,
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