import React, { useEffect, useState } from 'react';
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

export default function HomeAdditional() {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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
          <View style={{ width: '90%', height: 40, marginHorizontal: 10 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <View style={{ width: 70, height: 30, marginHorizontal: 20 }} />
          <View style={{ width: 70, height: 30, marginHorizontal: 20 }} />
          <View style={{ width: 70, height: 30, marginHorizontal: 20 }} />
          <View style={{ width: 70, height: 30, marginHorizontal: 20 }} />
          <View style={{ width: 70, height: 30, marginHorizontal: 20 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: 180, height: 170, marginTop: 30, borderRadius: 5, marginLeft: 20 }} />
          <View style={{ width: 180, height: 170, marginTop: 30, borderRadius: 5, marginLeft: 20 }} />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 180, height: 128, marginTop: 30, borderRadius: 10, marginLeft: 20 }} />
          <View style={{ width: 180, height: 128, marginTop: 30, borderRadius: 10, marginLeft: 20 }} />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 180, height: 128, marginTop: 30, borderRadius: 10, marginLeft: 20 }} />
          <View style={{ width: 180, height: 128, marginTop: 30, borderRadius: 10, marginLeft: 20 }} />
        </View>


        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 180, height: 128, marginTop: 30, borderRadius: 10, marginLeft: 20 }} />
          <View style={{ width: 180, height: 128, marginTop: 30, borderRadius: 10, marginLeft: 20 }} />
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
          contentContainerStyle={{paddingRight: 20}}
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
            contentContainerStyle={{paddingRight: 20}}
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

      <View style={{ paddingHorizontal: 20, paddingBottom: 30 }}>
        <View style={[styles.bestServiceTextContainer, { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 0 }]}>
          <Text style={styles.bestServiceText}>
            Upcoming trips
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddTrip')}>
            <Text style={{ textDecorationLine: 'underline', color: COLORS.brownText, fontFamily: FONTS.poppinsRegular }}>
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

      <View style={{ paddingHorizontal: 20, paddingBottom: 30 }}>
        <View style={[styles.bestServiceTextContainer, { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 0 }]}>
          <Text style={styles.bestServiceText}>
          Access codes
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MyAccessCode')}>
            <Text style={{ textDecorationLine: 'underline', color: COLORS.brownText, fontFamily: FONTS.poppinsRegular }}>
            View all
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.accessCodeContainer}>
            <View style={styles.innnerCodeContainer}>
                <Text style={styles.hotelText}>
                The rose hotel
                </Text>
                <Text style={styles.activeText}>
                Active
                </Text>
            </View>
            <View style={styles.innnerCodeContainer}>
                <Text style={styles.terminalText}>
                Terminal 1, International
                </Text>
                <Text style={styles.visitorText}>
                Total visitor -1
                </Text>
            </View>
            <View style={styles.accessPaddingContainer}>
                <View style={styles.viewCodeContainer}>
                <View style={styles.viewCodeInnerContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyAccessCode')}>
                <Text style={styles.accessCodeText}>
                View access code
                </Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
        </View>
        </View>


      <View style={{ backgroundColor: '#B19D99', borderTopLeftRadius: 14, borderTopRightRadius: 14 }}>
        <View style={{ paddingHorizontal: 20, paddingBottom: 30, paddingTop: 30 }}>
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
            <Text style={[styles.bestServiceText, { color: COLORS.white }]}>
              Purchase membership
            </Text>
          </View>
        <View style={styles.upgradeWhitecontainer}>
          <View style={styles.upgradeContainer}>
            <View style={styles.innerUpgradeContainer}>
              <Image
                source={Icons.silverCrown}
                style={styles.silverPic}
              />
              <Text style={styles.silverText}>Silver membership</Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MyMembership')}>
                <Text style={styles.editText}>Upgrade</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
        </View>

        <View style={styles.bestServiceFlatlistContainer}>
          <View style={[styles.bestServiceTextContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
            <Text style={[styles.bestServiceText, { color: COLORS.white }]}>
              Cards
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('AddNewCard')}>
              <Text style={{ textDecorationLine: 'underline', color: COLORS.brownText, fontSize: 14, fontFamily: FONTS.poppinsBold }}>
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
                            
                            <View style={styles.headingContainer}>
                                <Text style={styles.airportText}>
                                Search airport
                                </Text>
                                <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                                <Image source={Icons.closeIcon}
                                style={styles.closeSize}/>
                                </TouchableOpacity>
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
  accessCodeContainer:{
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 15
  },
  innnerCodeContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hotelText:{
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17
  },
  activeText: {
    color: COLORS.lightGreenText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14
  },
  terminalText: {
    color: COLORS.lightGreyText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14
  },
  visitorText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 14
  },
  accessPaddingContainer:{
    paddingTop: 10
  },
  viewCodeContainer:{
    backgroundColor: COLORS.mainBackground,
    padding: 10,
    borderRadius: 14
  },
  viewCodeInnerContainer:{
    backgroundColor: COLORS.lightPink,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14
  },
  accessCodeText:{
    paddingVertical: 24,
    color: COLORS.brownText,
    fontSize: 14,
    fontFamily: FONTS.poppinsMedium,
    textDecorationLine: 'underline'
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

headingContainer:{
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 50
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
},
 silverPic: {
    width: 31,
    height: 31,
    resizeMode: 'contain',
  },
  
  editText: {
    color: COLORS.orangeText,
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: FONTS.poppinsRegular,
    lineHeight: 20,
  },

  silverText: {
    fontSize: 14,
    color: COLORS.brownText,
    padding: 9,
    fontFamily: FONTS.poppinsRegular,
    lineHeight: 20,
  },

 upgradeWhitecontainer: {
   backgroundColor: COLORS.white,
   borderRadius: 10,
   marginHorizontal: 30,
   elevation: 5
 },

 upgradeContainer:{
     paddingHorizontal: 13,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center'
 },

 innerUpgradeContainer: {
    flexDirection: 'row', 
    padding: 7, 
    alignItems: 'center' 
 },

});
