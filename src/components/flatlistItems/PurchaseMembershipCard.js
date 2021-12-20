/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Styles } from 'react-native-dots-pagination/styles';
import {COLORS, FONTS, icons} from '../../../constants';

const PurchaseMembershipCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainers}>
        <View style={styles.innerHeader}>
          
            <Image source={icons.silverCrown} style={styles.iconPicContainer} />
          
          <View style={styles.membershipDateView}>
            <Text style={styles.mainMembershipText}>
              Silver {'\n'}
              membership
            </Text>
            <Text style={styles.validDateText}>Valid till-07/22</Text>
          </View>
        </View>
        <View style={styles.serviceAllContainer}>
          <View style={styles.serviceVisitView}>
            <Text style={styles.serviceVisitText}>Service</Text>

            <Text style={styles.serviceVisitText}>Visits</Text>
          </View>
          <View>
            <View style={styles.DetailsTextContainer}>
              <Text style={styles.innerServices}>Indian lounges</Text>

              <Text style={styles.innerVisit}>2/yr</Text>
            </View>

            <View style={styles.innerServiceGap}>
              <View style={styles.DetailsTextContainer}>
                <Text style={styles.innerServices}>Indian spa</Text>

                <Text style={styles.innerVisit}>4/qtr</Text>
              </View>
            </View>

            <View style={styles.DetailsTextContainer}>
              <Text style={styles.innerServices}>Global lounges</Text>

              <Text style={styles.innerVisit}>6/qtr</Text>
            </View>
          </View>
        </View>

        <View style={styles.RupeeContainer}>
          <Text style={styles.rupeeText}>₹ 2000 /-</Text>

          <TouchableOpacity onPress={() => navigation.navigate('MyMembership')}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>Purchase</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    paddingVertical: 10, 
    paddingHorizontal: 20
  },
  innerHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //paddingVertical: 20
  },

  iconPicContainer: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },

  innerContainers: {
    backgroundColor: COLORS.mainBackground,
    borderRadius: 10,
    padding: 15,
  },

  membershipDateView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15
  },

  mainMembershipText: {
    fontSize: 17,
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
  },

  validDateText: {
    fontSize: 14,
    color: COLORS.greyText,
    fontFamily: FONTS.poppinsRegular,
  },

  serviceAllContainer: {
    paddingVertical: 9,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: COLORS.greyBorderLine
  },

  serviceVisitView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },

  serviceVisitText: {
    fontFamily: FONTS.poppinsMedium,
    fontSize: 14,
    color: COLORS.brownText,
  },

  DetailsTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  innerServices: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    color: COLORS.greyText,
  },

  innerVisit: {
    fontFamily: FONTS.poppinsRegular,
    color: COLORS.brownText,
    fontSize: 14,
  },

  RupeeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingTop: 10,
  },

  rupeeText: {
    fontSize: 17,
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
  },

  iconContainer: {
    borderRadius: 22,
    height: 42,
    width: 109,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.brownText,
  },

  iconText: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONTS.poppinsMedium,
    lineHeight: 24,
  },

  innerServiceGap: {
    paddingVertical: 2,
  },
});

export default PurchaseMembershipCard;
