/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
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
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES, } from '../../../../constants';
import Icons from '../../../../constants/Icons';
import CATEGORYDATA from '../../../../assets/data/CategoryFlatlistData';
import CategoryFlatlistItem from '../../../components/flatlistItems/CategoryFlatlistItem';
import BestServiceFlatlistItem from '../../../components/flatlistItems/BestServiceFlatlistItem';
import { useNavigation } from '@react-navigation/core';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import RecommendedFlatListItemsHome from '../../../components/flatlistItems/RecommendedFlatListItemsHome';
import UpcomingTripsFlatlistItemHome from '../../../components/flatlistItems/UpcomingTripsFlatlistItemHome';
import PurchaseMembershipFlatlistItemHome from '../../../components/flatlistItems/PurchaseMembershipFlatlistItemHome';
import CardsFlatlistItemHome from '../../../components/flatlistItems/CardsFlatlistItemHome';

export default function HomeWithout() {
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
          <TouchableOpacity>
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
          contentContainerStyle={{paddingRight: 20, paddingLeft: 20}}
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
            contentContainerStyle={{paddingRight: 20, paddingLeft: 20}}
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


      <View style={{ backgroundColor: '#B19D99', borderTopLeftRadius: 14, borderTopRightRadius: 14 }}>
        <View style={{ paddingHorizontal: 20, paddingBottom: 30, paddingTop: 30 }}>
            
              <Text style={[styles.bestServiceText, { color: COLORS.white }]}>
            Cards
            </Text>

        <View style={styles.cardContainer}>
          <TouchableOpacity>
          <View style={styles.iconContainer}>
            <View style={styles.iconInnerContainer}>
              <Image source={Icons.add}
              style={styles.addIconSize}
              />
              <Text style={styles.addCardText}>
              Add new card
              </Text>
            </View>
            </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bestServiceFlatlistContainer}>
          <View style={styles.bestServiceTextContainer}>
            <Text style={[styles.bestServiceText, { color: COLORS.white }]}>
              Purchase membership
            </Text>
          </View>
          <FlatList
            data={[{}, {}, {}, {}, {}, {}]}
            showHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
            renderItem={({ }) => <PurchaseMembershipFlatlistItemHome />}
          />
        </View>

       
      </View>
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
  headerLeftContainer: { 
    flexDirection: 'row' 
  },

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
  cardContainer: {
    paddingHorizontal: 62
  },
  iconContainer:{
    borderRadius: 26,
    borderColor: COLORS.white,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 52,
    paddingHorizontal: 52
  },
  iconInnerContainer:{
    flexDirection: 'row',
   
  },
  addIconSize:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLORS.white
  },
  addCardText:{
    color: COLORS.white,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
    lineHeight: 22,
    paddingLeft: 16
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
});
