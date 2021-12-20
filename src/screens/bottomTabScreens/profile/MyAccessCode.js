/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/core';
import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../../../../constants';
import CommonQrButton from '../../../components/CommonQrButton';

export default function MyAccessCode() {
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View>
              <Image source={icons.back} style={styles.iconSize} />
            </View>
          </TouchableOpacity>
          <View style={{paddingLeft: 15}}>
            <Text style={styles.headerText}>My access code</Text>
          </View>
        </View>

        <View style={styles.whiteContainer}>
          <View style={styles.whiteHeader1}>
            <Text style={styles.headerText}>The rose hotel</Text>
            <Text style={styles.activeText}>Active</Text>
          </View>
          <View style={styles.whiteHeader1}>
            <Text style={styles.terminalGreyText}>
              Terminal 1, International
            </Text>
            <Text style={styles.visitorText}>Total visitor -1</Text>
          </View>

          <View style={styles.innerWhiteContainer}>
            <Text style={styles.terminalGreyText}>One time code</Text>
            <Text style={styles.codeNumberText}>2202 -9839</Text>
          </View>

          <View style={styles.whiteHeader2}>
            <View style={styles.whiteHeader1}>
              <Text style={styles.terminalGreyText}>Valid till</Text>
              <Text style={styles.terminalGreyText}>Book transaction id</Text>
            </View>
            <View style={styles.whiteHeader1}>
              <Text style={styles.visitorText}>21 Aug, 2021 | 5:00 PM</Text>

              <Text style={styles.visitorText}>#A7283K829</Text>
            </View>
          </View>

          <View style={styles.qrViewContainer}>
            <CommonQrButton
              onPress={() => navigation.navigate('qrView')}
              title={'View QR code'}
            />
          </View>

          <View style={styles.whiteLastContainer}>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
              <Text style={styles.cancelText}>Cancel access code</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.gapBetweenContainer}>
          <View style={styles.whiteContainer2}>
            <View style={styles.whiteHeader1}>
              <Text style={styles.headerText}>The rose hotel</Text>
              <Text style={styles.cancelledText}>Cancelled</Text>
            </View>
            <View style={styles.whiteHeader1}>
              <Text style={styles.terminalGreyText}>
                Terminal 1, International
              </Text>

              <Text style={styles.visitorText}>Total visitor -1</Text>
            </View>

            <View style={styles.innerWhiteContainer}>
              <Text style={styles.terminalGreyText}>One time code</Text>
              <Text style={styles.codeNumberText}>2202 -9839</Text>
            </View>

            <View style={styles.whiteHeader2}>
              <View style={styles.whiteHeader1}>
                <Text style={styles.terminalGreyText}>Valid till</Text>
                <Text style={styles.terminalGreyText}>Book transaction id</Text>
              </View>
              <View style={styles.whiteHeader1}>
                <Text style={styles.visitorText}>21 Aug, 2021 | 5:00 PM</Text>

                <Text style={styles.visitorText}>#A7283K829</Text>
              </View>
            </View>

            <View style={styles.lastFooter}>
              <Text style={styles.terminalGreyText}>Refund status:</Text>
              <Text style={styles.refundText}>Refund not applicable</Text>
            </View>
          </View>
        </View>
      </View>
      {showModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setShowModal(!showModal);
          }}>
          <View style={styles.popupBackground}>
            <View style={styles.popUpScreen}>
              <View style={styles.removePicContainer}>
                <Image
                  source={images.cancelCode}
                  style={styles.cancelAccessSize}
                />
              </View>
              <View>
                <Text style={styles.removeCardText}>Cancel access code</Text>
              </View>
              <View style={styles.middleContainer}>
                <Text style={styles.middleText}>Are you sure, you want to</Text>
                <Text style={styles.middleText}>cancel this access code?</Text>
              </View>
              <Text style={styles.cancellationText}>
                As a cancellation fee, 15% of the paid{'\n'} amount will be
                deducted
              </Text>
              <View style={styles.termContainer}>
                <View
                  style={{
                    alignItems: 'center',
                    backgroundColor: checkboxState ? '' : '',
                  }}>
                  <BouncyCheckbox
                    onPress={() => setCheckboxState(!checkboxState)}
                    fillColor={COLORS.orangeText}
                    iconStyle={{
                      borderColor: COLORS.brownText,
                      borderRadius: 6,
                      borderColor: COLORS.cardOrange,
                    }}
                    size={20}
                    sty
                  />
                </View>
                <View style={styles.termContainer}>
                  <Text style={styles.termText}>I accept all</Text>
                  <Text style={styles.termUnderlineText}>terms</Text>
                  <Text style={styles.andText}>&</Text>
                  <Text style={styles.termUnderlineText}>conditions</Text>
                </View>
              </View>
              <View style={styles.footerContainer}>
                <View style={styles.innerFooter}>
                  <TouchableOpacity onPress={() => setShowModal(false)}>
                    <View style={styles.keepIcon}>
                      <Text style={styles.keepText}>Keep</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.innerFooter}>
                  <TouchableOpacity>
                    <View style={styles.yesIcon}>
                      <Text style={styles.yesIconText}>Yes, cancel</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  innerContainer: {
    paddingHorizontal: 20,
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 40,
  },

  iconSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 17,
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    lineHeight: 24,
  },

  whiteContainer: {
    borderRadius: 14,
    backgroundColor: COLORS.white,
    padding: 15,
  },

  activeText: {
    color: COLORS.lightGreenText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: SIZES.font,
  },

  cancelledText: {
    color: COLORS.redText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: SIZES.font,
  },

  whiteHeader1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  terminalGreyText: {
    color: COLORS.greyText,
    fontSize: 14,
    fontFamily: FONTS.poppinsRegular,
  },

  visitorText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 14,
  },
  refundText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 14,
    paddingLeft: 5,
  },

  innerWhiteContainer: {
    paddingVertical: 10,
    backgroundColor: COLORS.mainBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 14,
  },

  whiteHeader2: {
    borderWidth: 0,
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    borderColor: COLORS.greyBorderLine,
  },

  codeNumberText: {
    fontSize: 30,
    fontFamily: FONTS.poppinsBold,
    color: COLORS.brownText,
  },

  qrViewContainer: {
    paddingVertical: 20,
  },
  whiteLastContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelText: {
    textDecorationLine: 'underline',
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 14,
  },

  gapBetweenContainer: {
    paddingVertical: 20,
  },

  whiteContainer2: {
    borderRadius: 14,
    backgroundColor: COLORS.white,
    padding: 15,
  },

  lastFooter: {
    flexDirection: 'row',
    paddingTop: 10,
  },

  popupBackground: {
    paddingTop: '50%',
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    marginTop: '5%',
  },
  removePicContainer: {
    paddingVertical: 30,
  },
  removeCardText: {
    color: COLORS.brownText,
    fontSize: 30,
    fontFamily: FONTS.poppinsBold,
  },
  middleContainer: {
    paddingTop: 25,
    alignItems: 'center',
  },
  middleText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 17,
  },

  cancellationText: {
    color: COLORS.muddyText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    paddingTop: 20,
    paddingBottom: 30,
  },

  termContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  termContainer: {
    flexDirection: 'row',
  },

  termText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.muddyText,
  },
  andText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.muddyText,
    paddingLeft: 5,
  },
  termUnderlineText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    color: COLORS.muddyText,
    textDecorationLine: 'underline',
    lineHeight: 24,
    paddingLeft: 5,
  },
  cancelAccessSize: {
    width: 160,
    height: 74,
    resizeMode: 'contain',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 20,
    marginTop: '10%',
  },
  innerFooter: {
    width: '47%',
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
    lineHeight: 24,
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
    lineHeight: 24,
  },
});
