/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS, FONTS, icons, images } from '../../../../constants';
import CommonButton from '../../../components/CommonButton';

export default function EditProfile() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
         <TouchableOpacity onPress={() => navigation.goBack()}>             
              <Image
                source={icons.back}
                style={styles.imageS}
              />
            </TouchableOpacity>
            <Text style={styles.headerText1}>Edit profile</Text>
            </View>
        <View>
          <View style={styles.imageViewContainer}>
            <Image
              source={images.profilePic}
              style={styles.pic}
            />
          </View>
          <View style={styles.editImageContainer}>
                <TouchableOpacity>
                        <Image source={icons.edit} 
                        style={styles.editPicSize} />
                </TouchableOpacity>
                    </View>
        </View>

        <View style={styles.numberTextContainer}>
          <Text style={styles.numberText}>+91 01234 56789</Text>
        </View>
        <View>
          <View>
            <Text style={styles.textHeading}>Your name*</Text>
          </View>

          <View style={styles.inputViewContainer}>
            <TextInput
              placeholder="Noman Rathi"
              style={styles.input}
              keyboardType="default"
              maxLength={25}
              placeholderTextColor="#5E423D"
            />
          </View>
        </View>

        <View style={styles.middleContainer}>
          <View>
            <Text style={styles.textHeading}>Email ID*</Text>
          </View>

          <View style={styles.inputViewContainer}>
            <TextInput
              placeholder="xyz@gmail.com"
              style={styles.input}
              keyboardType="email-address"
              maxLength={25}
              placeholderTextColor="#5E423D"
            />
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.textHeading}>Date of birth</Text>
          </View>

          <View style={styles.inputViewContainer}>
            <TextInput
              placeholder="MM/DD/YYYY"
              style={styles.input}
              keyboardType="default"
              maxLength={25}
              placeholderTextColor="#5E423D"
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
      <CommonButton onPress={() => navigation.goBack()} 
          title={'Save details'}
          />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F5',
    paddingVertical: 40
  },

  innerContainer: {
    marginHorizontal: 20
  },

  header: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingTop: ( Platform.OS === 'ios' ) ? 40 : 0
  },

  innerHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  imageS: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  pic: {
    width: 123,
    height: 123,
  },

  editImageContainer:{
     position: 'absolute', 
     alignSelf: 'center', 
     marginTop: 80, 
     paddingLeft: 80
  },

  editPicSize: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },

  numberTextContainer : {
    alignItems: 'center',
     paddingVertical: 27
    },

  numberText: {
    fontSize: 17,
    color: COLORS.brownText,
    paddingBottom: 13,
    fontFamily: FONTS.poppinsMedium
  },

  headerText1: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
    lineHeight: 22,
    paddingLeft: 15
  },

  imageViewContainer: {
    alignItems: 'center'
  },

  input: {
    height: 58,
    backgroundColor: COLORS.background,
    width: '100%',
    color: COLORS.brownText,
    paddingLeft: 18,
    borderRadius: 15,
    fontSize: 17,
  },

  inputViewContainer: {
    marginTop: 10
  },

  middleContainer: {
    paddingVertical: 20
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 77
  },

  textHeading: {
    fontSize: 14,
    color: COLORS.lightGreyText,
    fontFamily: FONTS.poppinsRegular,
  },

});
