/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  Modal,
} from 'react-native';
import { COLORS, FONTS, images, icons } from '../../../constants';
import MyCardTopTab from '../../navigation/topTabs/MyCardTopTab';

export default function MyCards() {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.back}
            style={styles.backIconView} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          My card
        </Text>
      </View>

      <View style={{ flex: 1 }}>
          <MyCardTopTab />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainBackground,
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 10 : 0,
  },

  headerText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
    lineHeight: 22,
    paddingLeft: 15
  },

  header: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#FDF8F5'
  },

  backIconView: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },


});
