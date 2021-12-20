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

export default function TermsAndCondition() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
          <View style={styles.innerHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={icons.back}
                style={styles.imageS}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Terms & conditions</Text>
          </View>
        </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.headingText}>Notice</Text>

          <Text
            style={styles.innerText}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo
          </Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.headingText}>
            COPYRIGHT © 2018 DINERS CLUB {'\n'}
            INTERNATIONAL LTD. ALL RIGHTS RESERVED
          </Text>

          <Text
            style={styles.innerText}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo
          </Text>
        </View>

        <View style={styles.container3}>
          <Text style={styles.headingText}>Trademarks</Text>

          <Text
            style={styles.innerTextone}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    paddingHorizontal: 20,
    paddingVertical: 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: ( Platform.OS === 'ios' ) ? 40 : 0
  },

  innerHeader: {
    flexDirection: 'row',
    paddingVertical: 20
  },

  imageS: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  headerText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
    lineHeight: 22,
    paddingLeft: 15
  },

  container2: {
    paddingVertical: 30
  },

  headingText:{
    fontSize: 14,
     color: COLORS.brownText,
     fontFamily: FONTS.poppinsMedium
    },

  innerText:{
    fontSize: 14,
    color: COLORS.greyText,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  innerTextone:{
    fontSize: 14,
    color: COLORS.greyText,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom:30
  },
  


  body: {
    flex: 1,
  },
});
