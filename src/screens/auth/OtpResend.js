import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Clipboard from '@react-native-community/clipboard';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Platform,
} from 'react-native';
import {COLORS, FONTS, icons} from '../../../constants';
import CommonButton from '../../components/CommonButton';

export default function OtpResend() {
    const navigation = useNavigation();
    const [otpTimer, setOtpTimer] = useState(60);
    useEffect(() => {
        let interval = setInterval(() => {
            setOtpTimer(oldValue => {
                oldValue <= 1 && clearInterval(interval)
                return oldValue - 1

            })
        }, 1000)
        return () => clearInterval(interval)

    }, [])
    const [counter, setCounter] = React.useState(59);
    React.useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    return (

      <View style={styles.container}>
      <View style={styles.innerContainer}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
              <Image source={icons.back} style={styles.iconSize} />
          </View>
          </TouchableOpacity>
          <View>
              <Text style={styles.headerText}>
                  OTP verification
              </Text>
          </View>
      </View>

      <View style={styles.otpTextContainer}>
          <Text style={styles.otpText}>
          OTP has been sent to your phone number
          </Text>
      </View>

      <View style={styles.numberTextContainer}>
          <Text style={styles.numberText}>
          +91 01234 56789
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image source={icons.editNumber}
          style={styles.editIconSize}/>
          </TouchableOpacity>
      </View>

      <OTPInputView
          style={{width: '100%', height: 200}}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled = {(code => {
              console.log(`Code is ${code}, you are good to go!`)
               })}
          />
           
           {
               counter==0?
               <TouchableOpacity>
          <View style={styles.resendButton}>
              <Text style={styles.resendText}>
              OTP Resend
              </Text>
          </View>
          </TouchableOpacity>
          :
               <TouchableOpacity>
                   <View style={styles.timeContainer}>
                   <Image source={icons.timeIcon}
                        style={styles.locationIconSize}
                    />
          <View style={styles.resendButton}>
              <Text style={styles.resendTextone}>
              00:{counter}
              </Text>
          </View>
          </View>
          </TouchableOpacity>

           }
          

      </View>

      <View style={styles.footer}>
      <CommonButton onPress={() => navigation.navigate('AddNewCard')} 
          title={'Verify'}  
          />
      </View>

  </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: COLORS.mainBackground,
        paddingTop: Platform.select({
            ios: 10,
            android: 0
        })
    },

    innerContainer: {
        paddingHorizontal: 20
    },

    header: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 40,
    },

    iconSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    headerText: {
        fontSize: 17,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24,
        paddingLeft: 15
    },

    otpTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    otpText: {
        color: COLORS.muddyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular
    },

    numberTextContainer: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    timeContainer: {
        flexDirection: 'row',
        
        justifyContent:'center'

    },

    locationIconSize: {
        width: 15,
        height: 18,
        resizeMode: 'contain',
        tintColor: COLORS.brownText,
        justifyContent:'center',
        alignContent:'center'
    },
    numberText: {
        fontFamily: FONTS.poppinsMedium,
        color: COLORS.brownText,
        fontSize: 17,
        lineHeight: 24,
        paddingRight: 5
    },
    editIconSize: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginLeft: 7
    },

    borderStyleBase: {
        width: 45,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#C8BAB5",
    },

    underlineStyleBase: {
        width: 45,
        height: 70,
        borderWidth: 0,
        borderBottomWidth: 2,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsBold,
        fontSize: 30,
    },

    underlineStyleHighLighted: {
        borderColor: "#C8BAB5",
    },

    resendButton: {
        alignContent: 'center',
        alignItems: 'center',
    },

    resendText: {
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium,
        textDecorationLine: 'underline'
    },
    resendTextone: {
        color: COLORS.brownText,
        fontSize: 14,
        paddingLeft:5,
        fontFamily: FONTS.poppinsMedium,
    },


    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingBottom: 30
    },

})
