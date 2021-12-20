import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, _ScrollView, Platform,
    Modal,
    Alert,
    FlatList} from 'react-native';
import { COLORS, FONTS, images, icons } from '../../../constants';
import Notifications from '../../components/flatlistItems/Notifications';

const DATA = [
    {
      id: 1,
      title: 'First Item',
      
    },
    {
      id: 2,
      title: 'First Item',

    },
    {
      id: 3,
      title: 'First Item',
      
    },
    {
      id: 4,
      title: 'First Item',
      
    },
    {
      id: 5,
      title: 'First Item',
      
    },
    {
      id: 6,
      title: 'First Item',
      
    },
    {
      id: 7,
      title: 'First Item',
      
    },
    {
      id: 8,
      title: 'First Item',
      
    },
    {
      id: 9,
      title: 'First Item',
      
    },
    {
      id: 10,
      title: 'First Item',
      
    },
    {
      id: 11,
      title: 'First Item',
      
    },
    {
      id: 12,
      title: 'First Item',
      
    },
  ];

export default function Notification() {
    const renderItem = ({ item }) => (
        <Notifications/>
      );
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.header1}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          </View>
          <View>
          <Text style={styles.headerText}>Notifications</Text>
        </View>
        </View>
        <View>
          <TouchableOpacity>
            <View style={(styles.buttonContainer)}>
              <Image source={icons.bellIcon}
              style={styles.bellIconSize}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Renderhotelcarosell item={item.id}/>}
        keyExtractor={item => item.id}
      />

      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.mainBackground,
        paddingVertical: 40
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingTop: ( Platform.OS === 'ios' ) ? 40 : 0
      },
    
      header1: { 
        flexDirection: 'row',
        alignItems: 'center'
      },
    
      backIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
      },

      headerText:{
          color: COLORS.brownText,
          fontFamily: FONTS.poppinsMedium,
          fontSize: 17,
          lineHeight: 24,
          paddingLeft: 15
      },

      bellIconSize:{
          width: 19,
          height: 24,
          resizeMode: 'contain',
          tintColor: COLORS.orangeText
      },
      loungeBookContainer:{
        width: '100%',
        height: 80,
        backgroundColor: COLORS.background,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    loungeBookContainerone:{
      width: '100%',
      height: 80,
      backgroundColor: COLORS.mainBackground,
      padding: 20,
      justifyContent: 'space-between',
      flexDirection: 'row'
  },

    innerContainer:{
        flexDirection: 'row',
    },

    iconContainer:{
        alignItems: 'center',
        justifyContent: 'center'
    },

    loungeIconSize:{
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },

    innerTextContainer:{
        paddingLeft: 13
    },

    loungeText:{
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    dateText: {
        color: COLORS.greyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    viewText:{
        color: COLORS.orangeText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        textDecorationLine: 'underline'
    }
})
function Renderhotelcarosell(props) {
  const item=props.item;
  const [abc,setabc]=useState(true);
  const[indes,setindes]=useState(-1);
  console.log(item)


  return (
    
    <View >
      {
        indes==item?
        <View style={styles.loungeBookContainerone}>
        <View style={styles.innerContainer}>
        <View style={styles.iconContainer}>
    <Image source={icons.lounge}
    style={styles.loungeIconSize}
    />
    </View>
    <View style={styles.innerTextContainer}>
        <Text style={styles.loungeText}>
        Lounge booked
        </Text>
        <Text style={styles.dateText}>
        Monday, 3 July 2021 - The rose hotel
        </Text>
    </View>
    </View>
     <TouchableOpacity  onPress={() => icons.k=item}>
    <View>
        <Text style={styles.viewText}>
        View
        </Text>
    </View>
    </TouchableOpacity>

    </View>
    :
    <View style={styles.loungeBookContainer}>
        <View style={styles.innerContainer}>
        <View style={styles.iconContainer}>
    <Image source={icons.lounge}
    style={styles.loungeIconSize}
    />
    </View>
    <View style={styles.innerTextContainer}>
        <Text style={styles.loungeText}>
        Lounge booked
        </Text>
        <Text style={styles.dateText}>
        Monday, 3 July 2021 - The rose hotel
        </Text>
    </View>
    </View>
     <TouchableOpacity  onPress={() => setindes(item)}>
    <View>
        <Text style={styles.viewText}>
        View
        </Text>
    </View>
    </TouchableOpacity>

    </View>

      }
    

</View>
  )}