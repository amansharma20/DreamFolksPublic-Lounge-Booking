/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  Platform,
  Modal,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS, FONTS,images, SIZES } from '../../../../constants';
import Icons from '../../../../constants/Icons';
import CATEGORYDATA from '../../../../assets/data/CategoryFlatlistData';
import CategoryFlatlistItem from '../../../components/flatlistItems/CategoryFlatlistItem';
import BestServiceFlatlistItem from '../../../components/flatlistItems/BestServiceFlatlistItem';
import { useNavigation } from '@react-navigation/core';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import RecommendedFlatListItemsHome from '../../../components/flatlistItems/RecommendedFlatListItemsHome';
import UpcomingTripsFlatlistItemHome from '../../../components/flatlistItems/UpcomingTripsFlatlistItemHome';
import YourBenefitsFlatlistItemsHome from '../../../components/flatlistItems/YourBenefitsFlatlistItemsHome';
import PurchaseMembershipFlatlistItemHome from '../../../components/flatlistItems/PurchaseMembershipFlatlistItemHome';
import CardsFlatlistItemHome from '../../../components/flatlistItems/CardsFlatlistItemHome';

export default function HomeScreen() {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  if (loading) {
    return (
      <SkeletonPlaceholder >
        <View style={{
          flexDirection: 'row', alignItems: 'center', flex: 1, alignContent: 'center', marginTop: Platform.select({
            ios: 80,
            android: 0,
          }),
        }} >
        <View style={{ width: '90%', height: 46, marginHorizontal: 20, marginTop: 225, borderRadius: 14 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 180 }}>
          <View style={{ width: 100, height: 45, marginHorizontal: 20, borderRadius: 14 }} />
          <View style={{ width: 100, height: 45, marginHorizontal: 20, borderRadius: 14  }} />
          <View style={{ width: 100, height: 45, marginHorizontal: 20, borderRadius: 14  }} />
          <View style={{ width: 100, height: 45, marginHorizontal: 20, borderRadius: 14  }} />
          <View style={{ width: 100, height: 45, marginHorizontal: 20, borderRadius: 14  }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 60, marginLeft: 10 }}>
          <View style={{ width: 235, height: 200, marginTop: 30, borderRadius: 5, marginLeft: 10, borderRadius: 14 }} />
          <View style={{ width: 235, height: 200, marginTop: 30, borderRadius: 5, marginLeft: 10, borderRadius: 14 }} />
        </View>

        <View style={{ flexDirection: 'row', paddingTop: 60, marginLeft: 10 }}>
          <View style={{ width: 235, height: 128, marginTop: 30, borderRadius: 10, marginLeft: 10, borderRadius: 14  }} />
          <View style={{ width: 235, height: 128, marginTop: 30, borderRadius: 10, marginLeft: 10, borderRadius: 14  }} />
        </View>

      </SkeletonPlaceholder>

    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'dark-content'} />
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            <Image source={Icons.locationIcon} style={styles.locationIcon} />
          </TouchableOpacity>
          <View>
            <Text style={styles.locationHeaderText}>
              Mumbai airport
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image source={Icons.bellIcon} style={styles.locationIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchContainerPadding}>
        <View style={styles.searchContainer}>
          <Image source={Icons.search} style={styles.searchIcon} />
          <TextInput
            placeholder="What are you looking for?"
            placeholderTextColor={COLORS.muddyText}
            style={styles.searchTextInput}
            returnKeyType={'search'}
          />
        </View>
      </View>

      <View style={styles.categoryFlatlistContainer}>
        <FlatList
          data={CATEGORYDATA}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{paddingRight: 20, paddingLeft: 20,}}
          renderItem={({ item, index }) => <CategoryFlatlistItem category={item} index={index} />}
        />
      </View>

      <View style={styles.bestServiceFlatlistContainer}>
        <View style={styles.bestServiceTextContainer}>
          <Text style={[styles.bestServiceText]}>
            Best services at mumbai airport
          </Text>
        </View>
        <View>
          <FlatList
            data={[{}, {}, {}]}
            // ListEmptyComponent={<SomeComponent />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 20, paddingRight: 20 }}
            renderItem={({ item }) => <BestServiceFlatlistItem category={item} />}
          />
        </View>
      </View>

      <View style={styles.bestServiceFlatlistContainer}>
        <View style={styles.bestServiceTextContainer}>
          <Text style={styles.bestServiceText}>
            Recommended
          </Text>
        </View>
        <FlatList
          contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
          data={[{}, {}, {}]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ }) => <RecommendedFlatListItemsHome />}
        />
      </View>

      <View style={styles.tripContainer}>
        <View style={[styles.bestServiceTextContainer, { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 0 }]}>
          <Text style={styles.bestServiceText}>
            Upcoming trips
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddTrip')}>
            <Text style={styles.tripText}>
              Add a trip
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={[{}, {}, {}]}
          showsVerticalScrollIndicator={false}
          renderItem={({ }) => <UpcomingTripsFlatlistItemHome />}
        />
      </View>


      <View style={styles.footer}>
        <View style={styles.benefitContainer}>
          <View style={[styles.bestServiceTextContainer, { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 0 }]}>
            <Text style={[styles.bestServiceText, { color: COLORS.white }]}>
              Your benefits
            </Text>
          </View>

          <FlatList
            data={[{}, {}, {}, {}, {}, {}]}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={styles.yourBenefitsContainer}
            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            renderItem={({ }) => <YourBenefitsFlatlistItemsHome />}
          />
        </View>
        <View style={styles.bestServiceFlatlistContainer}>
          <View style={styles.bestServiceTextContainer}>
            <Text style={[styles.bestServiceText, { color: COLORS.white}]}>
              Purchase membership
            </Text>
          </View>
          <FlatList
            data={[{}, {}, {}, {}, {}, {}]}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
            renderItem={({ }) => <PurchaseMembershipFlatlistItemHome />}
          />
        </View>

        <View style={styles.bestServiceFlatlistContainer}>
          <View style={[styles.bestServiceTextContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
            <Text style={[styles.bestServiceText, { color: COLORS.white, fontFamily: FONTS.poppinsRegular }]}>
              Cards
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('AddNewCard')}>
              <Text style={styles.addIconText}>
                Add
              </Text>
            </TouchableOpacity>

          </View>

          <FlatList
            data={[{}, {}, {}, {}, {}, {}]}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{paddingLeft: 20, paddingRight: 10}}
            renderItem={({ }) => <CardsFlatlistItemHome />}
          />
        </View>
        <View style={styles.lastViewContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('MyCards')}>
          <Text style={styles.viewAllText}>
            View all
          </Text>
          </TouchableOpacity>
        </View>
      </View>
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
                    <ScrollView style={styles.popupBackground}>
                        <View style={styles.popUpScreen}>
                        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                        <View style={styles.upperSlider}>
                          </View>

                                </TouchableOpacity>
                            <View style={styles.headingContainer}>
                                <Text style={styles.airportText}>
                                Search airport
                                </Text>
                              
                            </View>
                            <View style={styles.searchContainerModalPadding}>
        <View style={styles.searchContainerModal}>
          <Image source={Icons.search} style={styles.searchIcon} />
          <TextInput
            placeholder="What are you looking for?"
            placeholderTextColor={COLORS.muddyText}
            style={styles.searchTextInput}
            returnKeyType={'search'}
          />
        </View>
      </View>

      <View style={styles.locationContainer}>
        <TouchableOpacity>
        <Image source={Icons.myLocationIcon}
        style={styles.myLocationIconSize}
        />
         </TouchableOpacity>
         <TouchableOpacity>
        <Text style={styles.myLocationText}>
        Use current location
        </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.middleModal}>
        <View style={styles.middleContainerModal}>
          <View style={styles.innerMiddleContainerModal}>
            <Image source={Icons.airplaneIcon}
            style={styles.airplaneSize}
            />
            </View>
            <Text style={styles.middleTextAirport}>
            Mumbai airport
            </Text>
            </View>

            <View style={styles.middleContainerModal}>
            <View style={styles.innerMiddleContainerModal}>
            <Text style={styles.kmText}>
            2km
            </Text>
            </View>
            <Text style={styles.terminalText}>
            Mumbai chatrapati shivaji intl. Terminal 1
            </Text>
            </View>

          </View>
                            
                        </View>
                    </ScrollView>
                </Modal>
                </GestureRecognizer>
            }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.select({
      android: 0,
      ios: 30,
    }),
  },
  headerContainer: {
    paddingTop: SIZES.paddingLarge,
    paddingBottom: SIZES.header,
    paddingHorizontal: SIZES.padding4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeftContainer: { flexDirection: 'row' },
  locationIcon: {
    width: 20,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    resizeMode: 'contain',
  },
  searchContainerPadding: {
    paddingHorizontal: SIZES.padding4,
    paddingBottom: SIZES.paddingMedium,
    
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    borderRadius: 14,
    height:Platform.select({
      ios:50,
      android: 50
    })
  },
  searchTextInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.muddyText,
    fontFamily: FONTS.poppinsRegular,
    marginTop: Platform.select({
      ios:0,
      android:8
    }),
  },
  locationHeaderText: {
    fontFamily: FONTS.poppinsMedium,
    fontSize: SIZES.h2,
    color: COLORS.brownText,
  },
  categoryFlatlistContainer: {
    paddingBottom: 30,
  },
  bestServiceFlatlistContainer: {
    paddingBottom: SIZES.paddingMedium,
  },
  bestServiceTextContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  bestServiceText: {
    color: COLORS.muddyText,
    fontSize: 14,
    fontFamily: FONTS.poppinsRegular,
  },
  tripContainer: {
     paddingHorizontal: 20, 
     paddingBottom: 30
  },
  tripText: { 
  textDecorationLine: 'underline', 
  color: COLORS.brownText, 
  fontFamily: FONTS.poppinsMedium, 
  fontSize: 14 
},

footer: { 
  backgroundColor: COLORS.greyLine, 
  borderTopLeftRadius: 14, 
  borderTopRightRadius: 14 
},
benefitContainer: { 
  paddingHorizontal: 20, 
  paddingBottom: 30, 
  paddingTop: 30 
},
addIconText: { textDecorationLine: 'underline', 
color: COLORS.brownText, 
fontSize: 14, 
fontFamily: FONTS.poppinsSemiBold 
},
  yourBenefitsContainer: {
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#8E7773',
    paddingVertical: 20,
    borderRadius: 16,
  },
  yourBenefitsDetailsText: {
    color: COLORS.white,
    fontFamily: FONTS.poppinsRegular,
  },
  lastViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 35,
  },
  viewAllText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  popupBackground: {
    paddingTop: '90%',
    backgroundColor: 'rgba(0,0,0,0.5)'
},

popUpScreen: {
    width: '100%',
    height: 460,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: COLORS.mainBackground,
    paddingHorizontal: 20
},
upperSlider:{
  borderBottomWidth: 5,
  width: 30,
  marginTop: 30,
  borderColor: COLORS.brownText,
  alignContent:'center',
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  borderRadius: 4
},

headingContainer:{
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 20
},

airportText:{
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
},

closeSize:{
  width: 20,
  height: 20,
  resizeMode: 'contain'
},

searchContainerModal:{
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: COLORS.background,
  paddingHorizontal: 12,
  borderRadius: 14,
  width: '100%',
  height:Platform.select({
    ios:50,
    android: 50
  })
},

searchContainerModalPadding:{
    paddingBottom: SIZES.paddingMedium,
    paddingVertical: 30
},

locationContainer:{
  flexDirection: 'row',
  paddingBottom: 30,
  paddingLeft: 15
},

myLocationIconSize:{
  width: 20,
  height: 20,
  resizeMode: 'contain',
},

myLocationText:{
  color: COLORS.redText,
  fontFamily: FONTS.poppinsRegular,
  fontSize: 14,
  paddingLeft: 10
},
middleModal:{
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderWidth: 0,
  paddingVertical: 30,
  borderColor: COLORS.greyBorderLine
},

middleContainerModal:{
    flexDirection: 'row'
},
innerMiddleContainerModal: {
  width: '15%'
},

airplaneSize:{
  width: 20,
  height: 20,
   resizeMode: 'contain',
},

kmText:{
  color: COLORS.brownText,
  fontFamily: FONTS.poppinsRegular,
  fontSize: 14
},

middleTextAirport:{
  color: COLORS.brownText,
  fontFamily: FONTS.poppinsMedium,
  fontSize: 14,
},

terminalText:{
  color: COLORS.lightGreyText,
  fontSize: 14,
  fontFamily: FONTS.poppinsRegular
}

});
