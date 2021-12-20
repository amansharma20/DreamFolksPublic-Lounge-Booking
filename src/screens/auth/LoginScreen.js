/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Image,
  Linking
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../constants';
import CommonButton from '../../components/CommonButton';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
export default function LoginScreen() {
  const navigation = useNavigation();
  return (

    <ImageBackground
      source={images.loginBackground}
      resizeMode="cover"
      style={styles.imageBackground}
      blurRadius={0.7}>
      <ScrollView >
        <View style={{ height: 60}}>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcomeLabel} >
            Welcome!
          </Text>
          <Text style={styles.phoneNumberLabel}>
            Enter your phone number to continue
          </Text>

          <View style={{ width: '90%' }}>
            <Text style={styles.phoneNumber}>Phone Number</Text>
          </View>
          <View style={[styles.numberInputContainer]}>
            <Text style={styles.fixedNumberText}>+91</Text>
            <View style={styles.lineContainer}>
            </View>
            <TextInput
              style={styles.textInputStyle}
              keyboardType='numeric'
              maxLength={10}
            />
          </View>
          {/* <CommonButton onPress={() => navigation.navigate('OtpResend')} title={'Get OTP'} style={{ marginTop: 70 }} /> */}
          <CommonButton onPress={() => navigation.navigate('OtpResend')} 
          title={'Get OTP'} 
          style={{ marginTop: 40 }} 
          />
          <Text style={styles.signInText}>
            Or sign in with
          </Text>
          <View style={styles.logoContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
              <Image source={icons.googleIcon}
                style={styles.socialLogo}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('http://apple.com')}>
              <Image source={icons.appleIcon}
                style={styles.socialLogo}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('http://facebook.com')}>
              <Image source={icons.facebookIcon}
                style={styles.socialLogo}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({

  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeLabel: {
    color: COLORS.white,
    fontFamily: FONTS.poppinsSemiBold,
    fontSize: 30,
    marginTop: '50%'
  },
  phoneNumberLabel: {
    color: COLORS.white,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    marginTop: 12,
  },
  numberInputContainer: {
    backgroundColor: '#F7EDE766',
    width: '90%',
   paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height:55,
    borderRadius: 8,
  },
otp:{
height:50
},
  textInputStyle: {
    color: COLORS.white,
    fontSize: 17,
    paddingVertical: 17,
    lineHeight: Platform.select({
      ios: 0,
      android: 24
    }),
    paddingLeft: 20,
    flex: 1,
  },
  fixedNumberText: {
    color: COLORS.white,
    fontSize: 17,
    fontFamily: FONTS.poppinsRegular
  },
  lineContainer: {
    width: 2,
    height: 34,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderRightWidth: 0.5,
    borderColor: COLORS.white
  },
  phoneNumber: {
    fontFamily: FONTS.poppinsRegular,
    color: COLORS.white,
    fontSize: 14,
    textAlign: 'left',
    marginTop: 43,
    paddingBottom: 10
  },

  signInText: {
    color: COLORS.white,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    paddingTop: 40
  },
  logoContainer: {
    flexDirection: 'row',
    paddingTop: 25,
    width: '70%',
     justifyContent: 'space-evenly',
     paddingBottom: 40
  },
  socialLogo: {
    width: 52,
    height: 52,
    resizeMode: 'contain'
  }
});
