import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icons from '../../../constants/Icons';
import { COLORS,FONTS } from '../../../constants';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../../screens/bottomTabScreens/profile/Profile';
import MyBookings from '../../screens/bottomTabScreens/myBookings/MyBookings';
import Offers from '../../screens/bottomTabScreens/offers/Offers';
import HomeWithout from '../../screens/bottomTabScreens/withoutLogin/HomeWithout';
const Tab = createMaterialBottomTabNavigator();

export default function BottomTabBarNavigatorone(props, focused) {
  console.log(props);

  const [tabBarShowLabel, setTabBarShowLabel] = useState(false);

  return (
    <Tab.Navigator
      // shifting={true}
      labeled={false}
      activeColor={'#EC6A93'}
      lazy={false}
      barStyle={{ backgroundColor: COLORS.white, elevation: 15}}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? '#F39569' : '#C2BABB';
          switch (route.name) {
            case 'Home':
              return (
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopRightRadius: 45,
                    borderBottomRightRadius: 45,
                  }}>
                  <Image
                    source={Icons.home}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 28,
                      height: 28,
                    }}
                  />
                </View>
              );
            case 'MyBookings':
              return (
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 45,
                  }}>
                  <Image
                    source={Icons.myBookings}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 28,
                      height: 28,
                    }}
                  />
                </View>
              );
              case 'Offers':
              return (
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 45,
                  }}>
                  <Image
                    source={Icons.Offers}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 28,
                      height: 28,
                    }}
                  />
                </View>
              );
            case 'Profile':
              return (
                <TouchableOpacity
                  onPress={() => setTabBarShowLabel(!tabBarShowLabel)}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={Icons.Profile}
                      resizeMode="contain"
                      style={{
                        tintColor: tintColor,
                        width: 28,
                        height: 28,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
          }
        },
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, fontFamily: FONTS.satoshi700 },
        tabBarInactiveBackgroundColor: 'red',
      })}>
      <Tab.Screen name="Home" component={HomeWithout} />
      <Tab.Screen name="MyBookings" component={MyBookings} />
      <Tab.Screen name="Offers" component={Offers} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  );
}
