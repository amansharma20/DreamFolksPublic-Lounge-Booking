/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BestServiceFlatlistItem = props => {
  const category = props.category;
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('LoungeDetails')}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={images.homeBestService} style={styles.homeBestServiceStyle} />
        </View>

        <View style={styles.detailsContainer}>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              The rose hotel
            </Text>
            <View style={styles.ratingsContainer}>
              <Image source={icons.star} style={styles.starSize} />
              <Text style={styles.ratingText}>
                4.8
              </Text>
            </View>
          </View>

          <View style={styles.facilitiesContainer}>
            <Image source={icons.bed} style={styles.facilitiesIconSize} />
            <Image source={icons.food} style={styles.facilitiesIconSize} />
            <Image source={icons.pool} style={styles.facilitiesIconSize} />
            <Image source={icons.wifi} style={styles.facilitiesIconSize} />
          </View>

          <View style={styles.titleContainer}>
            <View style={styles.distanceContainer}>
              <Text style={styles.distanceText}>
                Distance -
              </Text>
              <Text style={styles.kmsText}>
                2km
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('LoungeDetails')}>
              <View style={styles.ratingsContainer}>
                <Text style={styles.openText}>
                  Open
                </Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: 235,
    borderRadius: 14,
    padding: 10,
    marginRight: 10
  },
  homeBestServiceStyle: {
    height: 110,
    resizeMode: 'contain',
    borderRadius: 14,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  imageContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  distanceContainer: { flexDirection: 'row' },
  distanceText: {
    fontSize: SIZES.h4,
    fontFamily: FONTS.poppinsRegular,
    color: COLORS.greyText,
  },
  kmsText: {
    color: COLORS.brownText,
    fontSize: SIZES.h4,
    fontFamily: FONTS.poppinsRegular,
    marginLeft: 2,
  },
  titleText: {
    color: COLORS.brownText,
    fontSize: SIZES.h2,
    fontFamily: FONTS.poppinsMedium,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  openText: {
    fontSize: SIZES.h4,
    fontFamily: FONTS.poppinsMedium,
    color: COLORS.orangeText,
  },
  starSize: {
    width: 12,
    height: 12,
    marginRight: 6,
    resizeMode: 'contain',
  },
  ratingText: {
    fontSize: SIZES.h5,
    color: COLORS.greyText,
    fontFamily: FONTS.poppinsRegular,
  },
  facilitiesContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    paddingVertical:10,

  },
  facilitiesIconSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default BestServiceFlatlistItem;
