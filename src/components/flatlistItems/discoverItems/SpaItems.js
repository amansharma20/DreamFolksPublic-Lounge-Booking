import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    Alert,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Dots from 'react-native-dots-pagination';
import Carousel from 'react-native-snap-carousel';

import { COLORS, FONTS, icons, images } from '../../../../constants';
import StarRating from 'react-native-star-rating';

const hotelImage = [
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


const spaItems = () => {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [ab,setab]=useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.whiteContainer}>
                {/* <Image source={images.spaImage}
                    style={styles.imageSize}
                /> */}
                    <Carousel
                    data={hotelImage}
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

                <View style={styles.innerWhiteHeader}>
                    <View>
                        <Text style={styles.spaNameText}>
                            Ubon thai spa
                        </Text>
                        <Text style={styles.terminalText}>
                            Terminal 1, international
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('SpaDetails')}>
                            <Text style={styles.viewMoreText}>
                                View more
                            </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.facilityIconContainer}>
                    <Image source={icons.spaStonesIcon}
                        style={styles.facilityIconSize}
                    />
                    <Image source={icons.facialIcon}
                        style={styles.facilityIconSize}
                    />
                    <Image source={icons.scissorsIcon}
                        style={styles.facilityIconSize}
                    />
                    <Image source={icons.maskingBrushIcon}
                        style={styles.facilityIconSize}
                    />
                </View>

                <View style={styles.middleWhiteContainer}>
                    <Text style={styles.terminalText}>
                        Time -
                    </Text>
                    <Text style={styles.terminalText}>
                        Distance
                    </Text>
                </View>

                <View style={styles.middleWhiteContainer}>
                    <Text style={styles.hourText}>
                        Plan for 1 hour
                    </Text>
                    <Text style={styles.hourText}>
                        2km
                    </Text>
                </View>

                <Text style={styles.openingText}>
                    Opening hours -
                </Text>
                <Text style={styles.hourText}>
                    Temporarily closed
                </Text>

               <View style={styles.lastWhiteContainer}>
                   <View>
                   <Text style={styles.terminalText}>
                   Reviews
                   </Text>
                   <StarRating
        disabled={false}
        maxStars={5}
        starSize={16}
        fullStarColor={'#FFCF44'}
        rating={4}
        containerStyle={{ width: 90}}
        //rating={starCount}
        //selectedStar={(rating) => onStarRatingPress(rating)}
      />   
      </View>
      <TouchableOpacity onPress={() => {
                                  icons.bookk=7

          navigation.navigate('SpaPayment')}}>
                   <View style={styles.iconContainer}>
                       <Text style={styles.bookNowText}>
                       Book now
                       </Text>
                   </View>
                   </TouchableOpacity>
               </View>
            </View>
        </View>
    );
}

export default spaItems;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    whiteContainer: {
        padding: 12,
        backgroundColor: COLORS.white,
        borderRadius: 14
    },

    imageSize: {
        height: 140,
        width: '84.8%',
        borderRadius: 14
    },

    innerWhiteHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12
    },

    spaNameText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
    },

    terminalText: {
        color: COLORS.lightGreyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
    },

    viewMoreText: {
        color: COLORS.orangeText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        textDecorationLine: 'underline'
    },

    facilityIconContainer: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-around',
        paddingVertical: 13,
    },

    facilityIconSize: {
        width: 20,
        height: 17,
        resizeMode: 'contain'
    },

    middleWhiteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    hourText: {
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular
    },

    openingText: {
        color: COLORS.lightGreyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingTop: 12
    },

    lastWhiteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12
    },

    iconContainer: {
        backgroundColor: COLORS.brownText,
        height: 42,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21
    },

    bookNowText: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24
    },


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
       
                             
                                
        </View>
    )}