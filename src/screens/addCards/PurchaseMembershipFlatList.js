import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { 
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
 } from 'react-native';
 import { COLORS, FONTS, icons } from '../../../constants';
import PurchaseMembershipCard from '../../components/flatlistItems/PurchaseMembershipCard';

 const DATA = [
    {
      id: '1',
      
    },
    {
      id: '2',
      
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },

  ];
export default function PurchaseMembershipFlatList(){

    const renderItem = ({ item }) => (
        <PurchaseMembershipCard/>
      );

    const navigation = useNavigation();
    return(
        <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerHeading}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={icons.back}
                style={styles.imageS}
              />
            </TouchableOpacity>
            <Text style={styles.headerText1}>My membership</Text>
          </View>
        </View>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: COLORS.creamBackground,
        //paddingHorizontal: 20,
        paddingTop: 40
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
        paddingTop: ( Platform.OS === 'ios' ) ? 40 : 0
      },
    
      headerHeading: {
       flexDirection: 'row'
      },
      imageS: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
      },
    
      headerText1: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        lineHeight: 22,
        paddingLeft: 15
      },    

})