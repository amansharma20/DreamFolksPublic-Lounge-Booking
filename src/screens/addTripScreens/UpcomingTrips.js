import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../constants';
import UpcomingTripsItems from '../../components/flatlistItems/UpcomingTripsItems';

const DATA = [
  {
    id: '1',

  },
  {
    id: '2',

  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
  {
    id: '6',
  },

];

export default function Offers() {
  const renderItem = ({ item }) => (
    <UpcomingTripsItems />
  );

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.header1}>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                  source={icons.back}
                  style={styles.backSize}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.headerText}>Upcoming trips</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('AddTrip')}>
              <View style={(styles.addTripIconContainer)}>
                <Text style={styles.editText}>Add a trip</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    // paddingHorizontal: 20,
  },

  innerContainer: {
    paddingTop: 40
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: (Platform.OS === 'ios') ? 40 : 0,
    paddingHorizontal: 20,
  },

  header1: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  headerText: {
    color: COLORS.brownText,
    fontSize: 17,
    fontFamily: FONTS.poppinsMedium,
    paddingLeft: 15,
    lineHeight: 22
  },

  backSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  editText: {
    color: COLORS.orangeText,
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: FONTS.poppinsRegular,
    lineHeight: 20,
  },

  addTripIconContainer: {
    height: 20,
    width: 73,
    color: COLORS.orangeText,
  },
})