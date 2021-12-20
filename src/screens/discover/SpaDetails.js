import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import Dots from 'react-native-dots-pagination';

import {
    Dimensions, StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList,
    ImageBackground
} from 'react-native';
import StarRating from 'react-native-star-rating';
import { COLORS, FONTS, icons, images } from '../../../constants';
import Carousel from 'react-native-snap-carousel';
import SpaDetailsItems from '../../components/flatlistItems/discoverItems/SpaDetailsItem';
import LoungeFacilityFlatList from '../../components/flatlistItems/discoverItems/LoungeFacilityFlatList';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CommonButton from '../../components/CommonButton';



const spaImage = [
    {
        title: "Item 1",
        text: "Text 1",
        id:0,
    },
    {
        title: "Item 2",
        text: "Text 2",
        id:1,
    },
    {
        title: "Item 3",
        text: "Text 3",
        id:2
    },
]

const facilityData = [
    {
        id: "Item 1",
        text: "Text 1",
    },
    {
        id: "Item 2",
        text: "Text 2",
    },
    {
        id: "Item 3",
        text: "Text 3",
    },
    {
        id: "Item 4",
        text: "Text 1",
    },
    {
        id: "Item 5",
        text: "Text 2",
    },
    {
        id: "Item 6",
        text: "Text 3",
    },
   
]

export default function SpaDetails() {
    const[viewall,setViewall]=useState(true)

    const renderSpaDetailsItem = ({ item }) => (
        <SpaDetailsItems />
    );
    const renderLoungeFacilityItem = ({ item }) => (
        <LoungeFacilityFlatList />
    );
    const navigation = useNavigation();
    const [checkboxState, setCheckboxState] = useState(false);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [ab,setab]=useState(0)

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View>
            <Carousel
                    data={spaImage}
                    renderItem={({ item }) => <Renderhotelcarosell item={item.id}/>}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                    inactiveSlideScale={1}
                    onSnapToItem={(index) => setab(index) }

                />
                  <View style={{marginTop:-30,width:'100%'}}>
                              <Dots  length={3} active={ab} 
                              
                               activeColor='white' 
                                />
                              </View>

                
                <View style={styles.backIconView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backWhite}
                            style={styles.backSize} />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.body}>
                <View style={styles.headingHeader}>
                    <Text style={styles.hotelText}>
                        Ubon thai spa
                    </Text>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        starSize={14}
                        fullStarColor={'#FFCF44'}
                        rating={4}
                        containerStyle={{ width: 90}}
                    //rating={starCount}
                    //selectedStar={(rating) => onStarRatingPress(rating)}
                    />
                </View>

                <View style={styles.locationContainer}>
                    <Image source={icons.locationIcon}
                        style={styles.locationIconSize}
                    />
                    <Text style={styles.addressText}>
                        Mumbai chatrapati shivaji intl. Terminal 1
                    </Text>
                </View>

                <View style={styles.timeContainer}>
                    <Image source={icons.timeIcon}
                        style={styles.locationIconSize}
                    />
                    <Text style={styles.addressText}>
                        24 hours daily.
                    </Text>
                </View>
              <ImageBackground imageStyle=
                    {{ borderRadius: 14 }} source={images.sbiImage}
                    style={styles.cutImageSize}>
                    <View style={styles.offContainer}>
                        <Text style={styles.percentageText}>
                            20%
                        </Text>
                        <Text style={styles.offText}>
                            OFF
                        </Text>
                    </View>
                    <Text style={styles.debitCardText}>
                        On SBI debit card/ credit card
                    </Text>
                    <Text style={styles.validText}>
                        Valid on orders above Rs.2000.
                    </Text>
                </ImageBackground>

                <Text style={styles.spaServiceText}>
                    Spa services
                </Text>

                <View style={styles.selectServiceContainer}>
                    <Text style={styles.selectText}>
                        Select service
                    </Text>
                    <Text style={styles.complimentaryText}>
                        Complimentary
                    </Text>

                    <View style={styles.locationContainer}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: checkboxState ? "" : "",
                            }
                            }>
                            <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                                fillColor={COLORS.brownText}
                                iconStyle={{ borderColor: COLORS.brownText }}
                                size={20}
                            />
                        </View>
                        <View>
                            <Text style={styles.servicesText}>
                                Foot reflexology
                            </Text>
                        </View>
                    </View>

                    <View style={styles.locationContainer}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: checkboxState ? "" : "",
                            }
                            }>
                            <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                                fillColor={COLORS.brownText}
                                iconStyle={{ borderColor: COLORS.brownText }}
                                size={20}
                            />
                        </View>
                        <View>
                            <Text style={styles.servicesText}>
                                Upper body massage
                            </Text>
                        </View>
                    </View>

                    <View style={styles.locationContainer}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: checkboxState ? "" : "",
                            }
                            }>
                            <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                                fillColor={COLORS.brownText}
                                iconStyle={{ borderColor: COLORS.brownText }}
                                size={20}
                            />
                        </View>
                        <View>
                            <Text style={styles.servicesText}>
                                Head massage
                            </Text>
                        </View>
                    </View>

                </View>

                <View style={styles.facilityContainer}>
                    <Text style={styles.facilityText}>
                        Facilities
                    </Text>
                    {/* <Text style={styles.viewAllText}>
                        View all
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={facilityData}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal={true}
                        renderItem={renderLoungeFacilityItem}
                        keyExtractor={item => item.id}
                    />
                </View> */}
                 {viewall?
                     <TouchableOpacity  onPress={() => setViewall(false)} >
                     <Text style={styles.viewAllText}>
                         View all
                     </Text>
                     </TouchableOpacity>:
                      <TouchableOpacity  onPress={() => setViewall(true)} >
                      <Text style={styles.viewAllText}>
                         Show Less
                      </Text>
                      </TouchableOpacity>
                    }
                   
                </View>
                    {/* <FlatList
          data={CATEGORYDATA}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => <LoungeFacilityFlatList category={item} />}
        /> */}
                    {/* <FlatList
                        data={facilityData}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal={true}
                        renderItem={renderLoungeFacilityItem}
                        keyExtractor={item => item.id}
                    /> */}
                    {
                        viewall?
                        <FlatList
                        data={facilityData}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal={true}
                        
                        renderItem={renderLoungeFacilityItem}
                        keyExtractor={item => item.id}
                    />
                   :
                   <View >

                    <FlatList
                    data={facilityData}
                    numColumns={3}
                    renderItem={renderLoungeFacilityItem}
                    keyExtractor={item => item.id}
                />
                </View>
                    }

                <Text style={styles.locationHeadingText}>
                    Location
                </Text>
                <Text style={styles.locationText}>
                    Airside - International departures. The detail {"\n"}location will go here. (Floor, nearby landmark)
                </Text>
                <View style={styles.mapViewConatainer}>
                    <Image source={images.mapImages}
                        style={styles.mapImageSize}
                    />
                    {/* <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex:1}}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    width={'100%'}
    height={180}
    showsUserLocation
  /> */}
                </View>
                

                <Text style={styles.locationHeadingText}>
                    Conditions
                </Text>
                <Text style={styles.locationText}>
                    Lorem ipsum dolor sit amet, consetetur{"\n"}sadipscing elitr,
                    sed diam nonumy eirmod tempor{"\n"}invidunt ut labore et dolore magna aliquyam erat,{"\n"}
                    sed diam voluptua. At vero eos et accusam et…
                </Text>

                <View style={styles.footer}>
                    <CommonButton onPress={() => {
                        icons.bookk=7
                        navigation.navigate('SpaPayment')}}
                        title={'Book Now'}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    backIconView: {
        position: 'absolute',
        paddingTop: 40,
        paddingLeft: 40
    },

    backSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    body: {
        paddingTop: 35,
        paddingHorizontal: 20
    },

    headingHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    hotelText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 20,
    },

    locationContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        elevation:20,
    },

    servicesText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 22
    },

    timeContainer: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 30
    },

    locationIconSize: {
        width: 15,
        height: 18,
        resizeMode: 'contain',
        tintColor: COLORS.muddyText
    },

    addressText: {
        color: COLORS.muddyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingLeft: 12,
        lineHeight: 18
    },

    offContainer: {
        flexDirection: 'row',
    },
    cutImageSize: {
        resizeMode: 'contain',
        padding: 5,
        paddingLeft: 15
    },

    percentageText: {
        fontSize: 32,
        fontFamily: FONTS.poppinsBold,
        color: COLORS.white
    },

    offText: {
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.white,
        lineHeight: 56,
        paddingLeft: 10
    },

    debitCardText: {
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        color: 'blue'
    },

    validText: {
        fontSize: 10,
        fontFamily: FONTS.poppinsRegular,
        color: 'blue'
    },

    spaServiceText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        paddingTop: 40,
        paddingBottom: 20
    },

    selectServiceContainer: {
        borderRadius: 14,
        backgroundColor: COLORS.white,
        elevation: 3,
        padding: 20
    },

    selectText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14
    },

    complimentaryText: {
        color: COLORS.muddyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingTop: 4
    },

    facilityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40
    },

    facilityText: {
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        color: COLORS.brownText
    },

    viewAllText: {
        fontSize: 14,
        color: COLORS.orangeText,
        fontFamily: FONTS.poppinsRegular,
        textDecorationLine: 'underline'
    },

    locationHeadingText: {
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        color: COLORS.brownText,
        paddingTop: 20
    },

    locationText: {
        color: COLORS.muddyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingTop: 10
    },

    mapViewConatainer: {
        paddingVertical: 40
    },

    mapImageSize: {
        height: 180,
        width: '100%'
    },

    footer: {
        paddingTop: 40,
        paddingBottom: 60,
        alignItems: 'center'
    },

    imageSize:{
        width: '100%',
        height: 250
    }
})
function Renderhotelcarosell(props) {
    const item=props.item;
    const [abc,setabc]=useState(true);
    console.log(item)


    return (
        <View>
            
  <Image source={images.spaImage}
        style={styles.imageSize}
        />
       
                              <View style={{marginTop:-30,justifyContent:'center',alignContent:'center'}}>
                              <Dots length={3} active={item}
                              activeColor='white'
                                />
                              </View>
                                
        </View>
    )}