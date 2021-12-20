import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MembershipId from '../../screens/addCards/MembershipId';
import BankIssuedCard from '../../screens/addCards/BankIssuedCard';
import { COLORS, FONTS } from '../../../constants';
import CustomDiscoverTopTabBar from './CustomDiscoverTopTabBar';
import MyCards from '../../screens/addCards/MyCards';
import All from '../../screens/addCards/All';

const Tab = createMaterialTopTabNavigator();

export default function MyCardTopTab() {
  return (
    <Tab.Navigator
        tabBar={props => <CustomDiscoverTopTabBar {...props} />}
            initialRouteName="All"
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 14, 
                    color: COLORS.white,
                },
                activeTintColor: '#060417',
                inactiveTintColor: '#6F7FAF',
                tabBarStyle: { backgroundColor: COLORS.background,
                },
                
                
            }}
            
        >
        {/* <Tab.Screen name="MyCards" component={MyCards} options={{ tabBarLabel: 'All' }} /> */}
      <Tab.Screen name="All" component={All} options={{ tabBarLabel: 'All' }} />
      <Tab.Screen name="BankIssuedCard" component={BankIssuedCard} options={{ tabBarLabel: 'Bank issued card' }} />
      <Tab.Screen name="MembershipId" component={MembershipId} options={{ tabBarLabel: 'DreamFolks cards' }} />
    </Tab.Navigator>
  );
}