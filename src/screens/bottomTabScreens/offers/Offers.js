/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { COLORS, FONTS, icons, images } from '../../../../constants';
import Offer from '../../../components/flatlistItems/Offer';

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

const renderItem = ({ item }) => (
  <Offer />
);


export default function Offers() {
  
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  if (loading) {
    return (
      <SkeletonPlaceholder>
        <View style={{
          flexDirection: "row", alignItems: "center", flex: 1, alignContent: 'center', marginTop: Platform.select({
            ios: 80,
            android: 0
          }),
        }} >
          <View style={{ width: "90%", height: 58, marginHorizontal: 20, marginTop: 225, borderRadius: 29}} />
        </View>
        
        <View style={{ paddingTop: 200 }}>
          <View style={{ width: '90%', height: 190, marginTop: 10, borderRadius: 14, marginLeft: 20 }} />
          
        </View>

        <View style={{ paddingTop: 10 }}>
          <View style={{ width: '90%', height: 190,marginTop: 10, borderRadius: 14, marginLeft: 20 }} />
         
        </View>

        <View style={{paddingTop: 10 }}>
          <View style={{ width: '90%', height: 190, marginTop: 10, borderRadius: 14, marginLeft: 20 }} />
          
        </View>
      </SkeletonPlaceholder>
    );

  }


  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Offers & promo code
          </Text>
        </View>
      </View>

      <View style={styles.lineViewContainer}>
        <View style={styles.codeInputContainer}>
          <TextInput
            placeholder="Enter promo code"
            //textAlign= 'center'
            style={styles.input}
            keyboardType="default"
            maxLength={15}
            placeholderTextColor={COLORS.brownText}
            fontSize={17}
          />
          <TouchableOpacity>
            <View style={styles.iconApplyContainer}>
              <Text style={styles.applyText}>
                Apply
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.availableView}>
        <Text style={styles.availableText}>
          Available offers
        </Text>
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
    backgroundColor: COLORS.mainBackground,
    paddingHorizontal: 20
  },

  innerContainer: {
    paddingTop: 40
  },

  header: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 40 : 0,
    paddingVertical: 30
  },

  headerText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
  },

  lineViewContainer: {
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingBottom: 30,
    borderColor: COLORS.greyBorderLine,
  },

  codeInputContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 29,
    height: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 8,

  },
  input: {
    height: 58,
    color: '#023373',
    borderRadius: 15,
    fontSize: 24,
    paddingLeft: 25
  },

  iconApplyContainer: {
    backgroundColor: COLORS.brownText,
    borderRadius: 21,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    width: 109,
  },

  applyText: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONTS.poppinsRegular
  },

  availableView: {
    paddingBottom: 10,
    paddingTop: 30
  },

  availableText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 14
  }
}
)