/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UpcomingBooking from '../../screens/bottomTabScreens/myBookings/UpcomingBooking';
import CompleteBooking from '../../screens/bottomTabScreens/myBookings/CompleteBooking';
import CancelledBooking from '../../screens/bottomTabScreens/myBookings/CancelledBooking';
import PendingBooking from '../../screens/bottomTabScreens/myBookings/PendingBooking';
import { COLORS, FONTS } from '../../../constants';

const Tab = createMaterialTopTabNavigator();

function BookingTopTab() {
  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: FONTS.poppinsMedium,
        },
        tabBarActiveTintColor: COLORS.brownText,
        tabBarInactiveTintColor: COLORS.greyText,
        tabBarPressColor:COLORS.brownText,
        tabBarStyle: { backgroundColor: 'transparent', height: 50},
        tabBarOptions: {backgroundColor:'transparent'}
        

  }}>
      <Tab.Screen name="UpcomingBooking" component={UpcomingBooking} options={{ tabBarLabel: 'Upcoming' }} />
      <Tab.Screen name="CompleteBooking" component={CompleteBooking} options={{ tabBarLabel: 'Complete' }} />
      <Tab.Screen name="PendingBooking" component={PendingBooking} options={{ tabBarLabel: 'Pending' }} />
      <Tab.Screen name="CancelledBooking" component={CancelledBooking} options={{ tabBarLabel: 'Cancelled' }} />
    </Tab.Navigator>
  );
}

export default BookingTopTab;
