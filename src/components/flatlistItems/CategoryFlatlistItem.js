/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {COLORS, FONTS, icons, images, SIZES} from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryFlatlistItem = props => {
  const category = props.category;
  const index = props.index;

  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{
      if (index === 0){
        navigation.navigate('DiscoverMain');
        icons.i=category.id
      }
      if (index === 1){
        navigation.navigate('DiscoverMain');
        icons.i=category.id
      }
      if (index === 2){
        navigation.navigate('DiscoverMain');
        icons.i=category.id
      }
      if (index === 3){
      navigation.navigate('DiscoverMain');
      icons.i=category.id
    }
    if (index === 4){
      navigation.navigate('DiscoverMain');
      icons.i=category.id
    }
    if (index === 5){
      navigation.navigate('DiscoverMain');
      icons.i=category.id
    }
    if (index === 6)
      {navigation.navigate('DiscoverMain');}
      icons.i=category.id
    }
    }>
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={icons.lounge} style={styles.imageSize} />
        <Text style={styles.nameText}>{category.name}</Text>
      
      </View>
    </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    marginRight: 10
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  imageSize: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  nameText: {
    fontSize: SIZES.h4,
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsRegular,
    lineHeight: 20,
  },
});

export default CategoryFlatlistItem;
