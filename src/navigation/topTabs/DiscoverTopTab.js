/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UpcomingBooking from '../../screens/bottomTabScreens/myBookings/UpcomingBooking';
import CompleteBooking from '../../screens/bottomTabScreens/myBookings/CompleteBooking';
import CancelledBooking from '../../screens/bottomTabScreens/myBookings/CancelledBooking';
import PendingBooking from '../../screens/bottomTabScreens/myBookings/PendingBooking';
import { COLORS, FONTS, icons } from '../../../constants';
import CustomDiscoverTopTabBar from './CustomDiscoverTopTabBar';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import SpaDetails from '../../screens/discover/SpaDetails';
import LoungeFacilityFlatList from '../../components/flatlistItems/discoverItems/LoungeFacilityFlatList';
import Lounge from '../../screens/discover/Lounge';
import FandB from '../../screens/discover/FandB';
import AirportTransportForm from '../../screens/discover/AirportTransportForm';
import SleepingPods from '../../screens/discover/SleepingPods';
import TH from '../../screens/discover/TH';
import Spa from '../../screens/discover/Spa';
import MandA from '../../screens/discover/MandA';
import Icons from '../../../constants/Icons';

const Tab = createMaterialTopTabNavigator();

export default function DiscoverTopTab() {

  return (
    <Tab.Navigator
        tabBar={props => <CustomDiscoverTopTabBar {...props} />}
            initialRouteName={icons.i}
            // {
            //   icons.i==0?
            //   initialRouteName="Lounge"


            // }
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 14, 
                    color: COLORS.white,
                },
                activeTintColor: '#060417',
                inactiveTintColor: '#6F7FAF',
                
                tabBarStyle: { backgroundColor: COLORS.background},
                
            }}
        >
      {/* <Tab.Screen name="UpcomingBooking" component={} options={{ tabBarLabel: 'All' }} /> */}

      <Tab.Screen name="CompleteBooking" component={Lounge} options={{ tabBarLabel: 'Lounge' }} />
      <Tab.Screen name="PendingBooking" component={Spa} options={{ tabBarLabel: 'Spa' }} />
      <Tab.Screen name="CancelledBooking" component={FandB} options={{ tabBarLabel: 'F&B' }} />
      <Tab.Screen name="UpcomingBooking" component={MandA} options={{ tabBarLabel: 'M&A' }} />
      <Tab.Screen name="Airport" component={AirportTransportForm} options={{ tabBarLabel: 'Airport transport' }} />
      <Tab.Screen name="SpaDetails2" component={SleepingPods} options={{ tabBarLabel: 'Sleeping pods' }} />
      <Tab.Screen name="SpaDetails3" component={TH} options={{ tabBarLabel: 'TH' }} />
    </Tab.Navigator>
  );
}

