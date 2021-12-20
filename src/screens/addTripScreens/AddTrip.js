/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import CommonButton from '../../components/CommonButton';

export default function AddTrip() {
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            style={styles.backSize}
          />
          </TouchableOpacity>
       
        <Text
          style={styles.AddTripTextContainer}>
          Add a trip
        </Text>
      </View>
      <View>
       
          <Text
            style={styles.headingTextContainer}>
            Your name
          </Text>
          <TextInput
            style={styles.input}
            maxLength={25}
            keyboardType="default"
            placeholderTextColor="#5E423D"
            placeholder="Naman Rathi"
          />

          <View style={styles.container3}>
           
              <View style={styles.innerContainer}>
              <Text
                style={styles.headingTextContainer}>
                Flight no.
              </Text>
              <TextInput
                style={styles.inputInner1}
                maxLength={25}
                keyboardType="default"
                placeholderTextColor="#5E423D"
                placeholder="6E 8246"
              />
             
              
            </View>

           
            <View style={styles.innerContainer}>
              <Text
                style={styles.headingTextContainer}>
                Date
              </Text>
              <TextInput
                style={styles.inputInner1}
                maxLength={25}
                keyboardType="default"
                placeholderTextColor="#5E423D"
                placeholder="03 - 07 - 2021"
              />
       
            </View>
          </View>
          <View style={styles.container3}>
          <View style={styles.innerContainer}>
              <Text
                style={styles.headingTextContainer}>
                From
              </Text>
              <TextInput
                style={styles.inputInner1}
                maxLength={25}
                keyboardType="default"
                placeholderTextColor="#5E423D"
                placeholder="Delhi"
              />
              </View>
        
            

              <View style={styles.innerContainer}>
              <Text
                style={styles.headingTextContainer}>
                To
              </Text>     
              <TextInput
                style={styles.inputInner1}
                maxLength={25}
                keyboardType="default"
                placeholderTextColor="#5E423D"
                placeholder="Mumbai"
              />
              </View>
          
          </View>
        {/* <View>
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              source={icons.upload}
              style={styles.uploadImage}
            />
            <Text
              style={
                styles.ticketContainer
              }>
              Upload ticket
            </Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.footerTextContainer}>
        <CommonButton
          title={'Add a trip'}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainBackground,
    paddingHorizontal: 20,
    flex: 1

  },

  header: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 20

  },

  AddTripTextContainer: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
    lineHeight: 22,
    paddingLeft: 15
  },

  backSize: { 
      width: 20,
      height: 20,
      resizeMode: 'contain',
  },

  innerContainer:{
    width: '47%',
  },

  headingTextContainer:{
    fontSize: 14,
    color: COLORS.muddyText,
    fontFamily: FONTS.poppinsRegular,
    paddingBottom: 10,
    paddingTop: 20
  },

  InputViewContainer: {
    paddingVertical: 10,
    marginRight:25
    
  },

  input: {
    height: 58,
    borderRadius: 17,
    backgroundColor: COLORS.background,
    width: '100%',
    color: COLORS.brownText,
    fontSize: 17,
    paddingHorizontal: 10,
    fontFamily: FONTS.poppinsRegular,
    paddingLeft: 18,
    marginRight:5,

  },

  inputInner1: {
    paddingVertical: 17,
    borderRadius: 14,
    backgroundColor: COLORS.background,
    marginRight:5,
    color: COLORS.brownText,
    paddingHorizontal: 10,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 17,
    paddingLeft: 18,
    //width: '47%'
  },

  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },


  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.orangeText,
    borderRadius: 26,
    height: 52,
    paddingHorizontal: 72
  },

  buttonTextContainer: {
    color: COLORS.white,
     fontSize: 17,
      fontFamily: FONTS.poppinsMedium,
      lineHeight: 24
    },

  footerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    paddingVertical: 150,
  },
});
