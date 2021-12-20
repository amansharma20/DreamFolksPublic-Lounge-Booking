/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import {ExpandableListView} from 'react-native-expandable-listview';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS, FONTS, icons } from '../../../constants';

export default function Faqs() {
  const navigation = useNavigation();
  const CONTENT = [
    {
      id: '42',
      categoryName: 'Lorem ipsum dolor sit amet, consetetur?',
      subCategory: [
        {
          id: '1',
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        },
       
      ],
    },
    {
      id: '95',
      categoryName: 'Lorem ipsum dolor sit amet, consetetur?',
      subCategory: [{id: '1', name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'}],
    },
    {
      id: '94',
      categoryName: 'Lorem ipsum dolor sit amet, consetetur?',
      subCategory: [{id: '1', name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'}],
    },
    {
      id: '93',
      categoryName: 'Lorem ipsum dolor sit amet, consetetur?',
      subCategory: [{id: '1', name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'}],
    },
  ];
  function handleItemClick({index}) {
    console.log(index);
  };

  function handleInnerItemClick({innerIndex, item, itemIndex}) {
    console.log(innerIndex);
  };

  
  return (

    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.innerIcon}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={icons.back}
                style={styles.iconSize}
              />
            </TouchableOpacity>

            <Text style={styles.headerText}>
              FAQ
            </Text>
          </View>

        </View>
        <View style={styles.body}>
        <ExpandableListView
        data={CONTENT} // required
        onInnerItemClick={handleInnerItemClick}
        onItemClick={handleItemClick}
        itemLabelStyle={{backgroundColor:'#FDF8F5', color:'#5E423D', fontSize:14,}}
        itemContainerStyle={{backgroundColor:'#FDF8F5',}}
        innerItemContainerStyle={{backgroundColor:'#FDF8F5'}}
        renderInnerItemSeparator={true}
         renderItemSeparator={true}
      />

          

          
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

  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },


  header: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingTop: (Platform.OS === 'ios') ? 40 : 0,
  },

  innerIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  headingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerText: {
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
    color: COLORS.brownText,
    lineHeight: 24,
    paddingLeft: 15
  },

  iconRemoveSize: {
    width: 30,
    height: 30
  },

  iconSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  headingText: {
    fontSize: 14,
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    lineHeight: 35
  },

  headingText2: {
    fontSize: 14,
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    lineHeight: 35,
    paddingVertical: 10
  },

  innerTextContainer: {
    height: 300,
    borderColor: COLORS.greyLine,
    borderWidth: 0,
    borderBottomWidth: 1
  },

  innerText: {
    color: COLORS.greyText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },

  container2: {
    borderBottomWidth: 1,
    borderWidth: 0,
    borderColor: COLORS.greyLine,
    height: 300
  },

  iconAdd: {
    justifyContent: 'center'
  },

  body: {
    flex: 1,
  },
});
