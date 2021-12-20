/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MembershipId from '../../screens/addCards/MembershipId';
import BankIssuedCard from '../../screens/addCards/BankIssuedCard';
import { COLORS, FONTS } from '../../../constants';

const Tab = createMaterialTopTabNavigator();

function MembershipTopTab() {
  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: FONTS.poppinsMedium
        },
      
        tabBarInactiveTintColor: COLORS.brownText,
        tabBarActiveTintColor: COLORS.brownText,
        tabBarPressColor: COLORS.white,
        tabBarStyle: { 
          backgroundColor: COLORS.background, 
          borderRadius: 35, 
          marginHorizontal: 20,
          width: '90%'
        }
      }}
      tabBarOptions={{
        indicatorStyle: {
          width: '50%', 
          height: '100%',
          backgroundColor: COLORS.white,
          borderRadius: 25,
        },
      }} >
      <Tab.Screen name="MembershipId" component={MembershipId} options={{ tabBarLabel: 'Membership id' }} />
      <Tab.Screen name="BankIssuedCard" component={BankIssuedCard} options={{ tabBarLabel: 'Bank issued Card' }} />
    </Tab.Navigator>
  );
}

export default MembershipTopTab;
