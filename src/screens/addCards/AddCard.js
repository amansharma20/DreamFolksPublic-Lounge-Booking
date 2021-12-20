/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { COLORS, FONTS, icons } from '../../../constants';
import CommonButton from '../../components/CommonButton';

export default function AddCard() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.headerInnerPart}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            style={styles.backImageContainer}
          />
        </TouchableOpacity>
        <Text
          style={
            styles.headerText}>
          My card
        </Text>
      </View>
      </View>

      <View style={styles.body}>
        <View
          style={styles.imageViewContainer}>
          <Image
            source={icons.addCard}
            style={styles.imageContainer}
          />
        </View>

        <View style={styles.lastTextContainer}>
          <Text style={styles.LastText}>
            Looks like you haven't added any {"\n"}                       card yet
          </Text>
        </View>

        <View style={styles.footerTextContainer}>
        <CommonButton onPress={() => navigation.navigate('AddNewCard')} 
          title={'Add card'} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainBackground,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
    
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20  
  },

  headerInnerPart: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  backImageContainer: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  body: {
    flex: 1,
    justifyContent: 'space-around',
  },

  imageViewContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 75
  },

  headerText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
     fontSize: 17,
     paddingLeft: 15,
     lineHeight: 22
  },

  imageContainer: {
    height: 126,
     width: 146
    },

  lastTextContainer: {
    alignItems: 'center',
    flex: 1,
  },

  LastText: {
    color: COLORS.muddyText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerTextContainer: {
    flex: 1,
    alignItems: 'center'
  },
});
