/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS, FONTS, icons } from '../../../constants';

export default function MyMembership() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            style={styles.imageBack}
          />
        </TouchableOpacity>
        <Text
          style={
            styles.HeadingText
          }>
          My membership
        </Text>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.imageContainer}>
        <Image
          source={icons.silverCrown}
          style={styles.iconPicContainer}
        />
        </View>
       
        <Text
          style={styles.mainMembershipText}>
          Silver membership
        </Text>

        <Text
          style={styles.validDateText}>
          Valid till - 08/2022
        </Text>
      </View>
          <View style={styles.serviceViewContainer}>
      <View style={styles.detailsTextContainer}>
        <Text style={styles.serviceTextHeading}>
          Service
        </Text>

        <Text style={styles.serviceTextHeading}>
          Visits
        </Text>
      </View>

      <View>
        <View style={styles.detailsTextContainer}>
          <Text
            style={styles.innerServicesText}>
            Indian lounges
          </Text>

          <Text
            style={styles.visitYearText}>
            2/yr
          </Text>
        </View>

        <View style={styles.detailsTextContainer}>
          <Text
            style={styles.innerServicesText}>
            Indian spa
          </Text>

          <Text
            style={styles.visitYearText}>
            4/qtr
          </Text>
        </View>

        <View style={styles.detailsTextContainer}>
          <Text
            style={styles.innerServicesText}>
            Global lounges
          </Text>

          <Text
            style={styles.visitYearText}>
            6/qtr
          </Text>
        </View>
      </View>
      </View>

      <View style={styles.footer}>
        <View>
          <Text
            style={styles.upgradeTitleText}>
            Upgrade your membership
          </Text>
        </View>

        <View style={styles.bodyInFooter}>
            <View style={styles.innerContainer}>
              <View style={styles.innerHeaderContainer}>
                <Image
                  source={icons.platinumCrown}
                  style={styles.iconPicContainer}
                />
                <View style={styles.membershipDateContainer}>
                  <Text
                    style={styles.mainMembershipText}>
                    Platinum {'\n'}
                    membership
                  </Text>
                  <Text
                    style={styles.validDateText}>
                    Valid till-07/22
                  </Text>
                </View>
              </View>

                <View style={styles.innerContainerServiceHeading}>
                <Text
                  style={styles.serviceTextHeading}>
                  Service
                </Text>

                <Text
                  style={styles.serviceTextHeading}>
                  Visits
                </Text>
                
              </View>
              <View style={styles.bottomLineContainer}>
                <View style={styles.DetailsTextContainer1}>
                  <Text
                    style={styles.innerContainerServicesText}>
                    Indian lounges
                  </Text>

                  <Text
                    style={styles.innerContainerVisitsText}>
                    2/yr
                  </Text>
                </View>

                <View style={styles.DetailsTextContainer1}>
                
                  <Text
                    style={styles.innerContainerServicesText}>
                    Indian spa
                  </Text>

                  <Text
                    style={styles.innerContainerVisitsText}>
                    4/qtr
                  </Text>
                  </View>

                <View style={styles.DetailsTextContainer1}>
                    <View>
                  <Text
                    style={styles.innerContainerServicesText}>
                    Global lounges
                  </Text>
                  </View>

                  <View>
                  <Text
                    style={styles.innerContainerVisitsText}>
                    6/qtr
                  </Text>
                  </View>
                </View>
              </View>

              <View style={styles.RupeeContainer}>
                <Text
                  style={styles.rupeeTextContainer}>
                  ₹ 5000 /-
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('PurchaseMembershipFlatList')} style={styles.upgradeButtonView}>
                  <View style={styles.iconContainer}>
                    <Text
                      style={styles.buttonTextContainer}>
                      Upgrade
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginTop: 20}}>
              <View>
                <View style={styles.innerContainer}>
                  <View
                    style={styles.innerHeaderContainer}>
                    <Image
                      source={icons.goldCrown}
                      style={styles.iconPicContainer}
                    />
                    <View style={styles.membershipDateContainer}>
                      <Text
                        style={styles.mainMembershipText}>
                        Gold {'\n'}
                        membership
                      </Text>
                      <Text
                        style={styles.validDateText}>
                        Valid till-07/22
                      </Text>
                    </View>
                  </View>

                  <View style={styles.innerContainerServiceHeading}>
                <Text
                  style={styles.serviceTextHeading}>
                  Service
                </Text>

                <Text
                  style={styles.serviceTextHeading}>
                  Visits
                </Text>                
              </View>
                  <View style={styles.bottomLineContainer}>
                    <View style={styles.DetailsTextContainer1}>
                      <Text
                        style={styles.innerContainerServicesText}>
                        Indian lounges
                      </Text>

                      <Text
                        style={styles.innerContainerVisitsText}>
                        2/yr
                      </Text>
                    </View>

                    <View style={styles.DetailsTextContainer1}>
                      <Text
                        style={styles.innerContainerServicesText}>
                        Indian spa
                      </Text>

                      <Text
                        style={styles.innerContainerVisitsText}>
                        4/qtr
                      </Text>
                    </View>

                    <View
                      style={
                        styles.DetailsTextContainer1
                      }>
                      <Text
                        style={styles.innerContainerServicesText}>
                        Global lounges
                      </Text>

                      <Text
                        style={styles.innerContainerVisitsText}>
                        6/qtr
                      </Text>
                    </View>
                  </View>

                  <View style={styles.RupeeContainer}>
                    <Text
                      style={styles.rupeeTextContainer}>
                      ₹ 3000 /-
                    </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('PurchaseMembershipFlatList')} style={styles.upgradeButtonView}>
                      <View style={styles.iconContainer}>
                        <Text
                          style={styles.buttonTextContainer}>
                          Upgrade
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },

  header: {
    flexDirection: 'row', 
    paddingVertical: 40 ,
    paddingHorizontal: 20
  },

  imageBack: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  HeadingText:
  {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
    lineHeight: 22,
    paddingLeft: 15
  },

  container1: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  imageContainer:{
    paddingBottom: 14
  },

  iconPicContainer: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },

  membershipDateContainer: {
    paddingLeft: 15,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  mainMembershipText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
    
  },

  validDateText: {
      color: COLORS.greyText,
      fontFamily: FONTS.poppinsRegular,
      fontSize: 14, 
  },

  innerContainerServiceHeading: {
    paddingTop:20,
    flexDirection: 'row',
     justifyContent:'space-between',
  },

  serviceViewContainer: {
    paddingHorizontal: 50,
    paddingTop: 14,
    paddingBottom: 30
  },
  

  innerServicesText:{
    fontFamily: FONTS.poppinsRegular,
    paddingTop: 10,
    fontSize: 14,
    color: COLORS.greyText,
  },
  visitYearText:{
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    color: COLORS.brownText,
    paddingTop: 10,
  },
  detailsTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  serviceTextHeading: {
    fontFamily: FONTS.poppinsMedium,
     fontSize: 14,
     color: COLORS.brownText
    },

    bottomLineContainer: {
      borderWidth: 0, 
      borderBottomWidth: 1,
      paddingBottom: 10,
      borderColor: COLORS.greyBorderLine
    },


  DetailsTextContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2
  },

  innerContainerServicesText:{
      fontFamily: FONTS.poppinsRegular,
      fontSize: 14,
      color: COLORS.greyText,
  },
  innerContainerVisitsText:{
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    color: COLORS.brownText,
  },

  footer: {
    flex: 1,
    paddingVertical :30,
    backgroundColor: COLORS.greyLine,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 20,
  },

  upgradeTitleText: {
    fontSize: 14,
    fontFamily: FONTS.poppinsRegular,
    color: COLORS.white,
  },

  bodyInFooter: {
    paddingVertical: 10,
  },

  innerContainer: {
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 15
  },

  innerHeaderContainer: {
    flexDirection: 'row',
  },


  RupeeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rupeeTextContainer: {
    fontSize: 17,
    color: COLORS.brownText,
    paddingTop: 12,
    fontFamily: FONTS.poppinsMedium,
  },

  upgradeButtonView: {
    paddingTop: 8
  },


  iconContainer: {
    borderRadius: 22,
    height: 42,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.brownText,
  },

  buttonTextContainer:{
      color: COLORS.white,
      fontSize: 14,
      fontFamily: FONTS.poppinsMedium,  
      lineHeight: 24 
  }


});
