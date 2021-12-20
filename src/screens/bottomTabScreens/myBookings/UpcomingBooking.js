import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../../constants';
import UpcomingBookingItem from '../../../components/flatlistItems/UpcomingBookingItem';

const DATA = [
    {
      id: '1',
      title: 'First Item',
      
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
      
    },
    {
      id: '4',
      title: 'Fourth Item',
    },

  ];

  export default function UpcomingBooking(){


    const renderItem = ({ item }) => (
        <UpcomingBookingItem/>
      );

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        

        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.mainBackground,
        paddingTop: 30,
        paddingHorizontal: 20,
    },


}
)