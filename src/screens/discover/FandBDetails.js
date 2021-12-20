/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { COLORS, FONTS, icons, images } from '../../../constants';
import StarRating from 'react-native-star-rating';
import MenuCardFandB from './menucardfandb';
import MenuCardFandBOne  from './menucardfandbone';
import CommonButton from '../../components/CommonButton';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground
} from 'react-native';

const FandBDetails = () => {

    const navigation = useNavigation();
    const [arrow, setArrow] = useState(true)
    const [toggleValue, setToggleValue] = useState(false);
    const [veg,setVeg]=useState(true)
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View>
                            <Image source={icons.back} style={styles.iconSize} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headerText}>
                            Aroma’s hyderabad house
                        </Text>
                    </View>
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
                    <View style={{ marginLeft: 'auto'}}
                    >
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            starSize={14}
                            fullStarColor={'#FFCF44'}
                            rating={4}
                            containerStyle={{width:100,paddingEnd:15}}

                         />
                    </View>
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
                <Text style={styles.combotext}>DreamFolks Combo</Text>
                <MenuCardFandB />
                <View style={{ flexDirection: 'row' }}>
            
                    <Text style={styles.menuline}>Browse all menu</Text>

                    <View style={{ marginLeft: 'auto', justifyContent: 'center' ,padding:10}}>
                        {arrow === true
                            ?
                            <View >
                            <TouchableOpacity onPress={() => setArrow(false)}>
                                <Image  source={icons.downImg}
                                    style={styles.browseIconSize}
                                />
                            </TouchableOpacity>
                            </View>
                            :
                            <View>
                            <View >
                            <TouchableOpacity onPress={() => setArrow(true)}>
                                <Image  source={icons.upImg}
                                    style={styles.browseIconSize}
                                />
                                
                                  
                            </TouchableOpacity>
                          
                         </View>   
                         {/* <View style={{flexDirection:'row'}}>
                                  {  
                                      veg==true?
                                      <Image source={icons.vegswitch} onPress={() => setVeg(false)}/>
                                      :
                                      <Image source={icons.vegswitch} onPress={() => setVeg(true)}/>


                                  }
                                </View> */}
                         </View>
                        }
                    </View>
                </View>
                {
                    arrow == true ? null
                    :
                    <View>
                        
                      {
                         
                          veg == true ?
                          <View style={{flexDirection:'row'}} >
                          <TouchableOpacity onPress={() => setVeg(false)}>
                              <Image  source={icons.switchh}
                              />
                              
                                
                          </TouchableOpacity>
                          <View>
                          <Text style={styles.bottomtext}>Veg Only</Text>
                          </View>
                          <View style={{marginLeft:'auto'}}>
                          <TouchableOpacity onPress={() => setVeg(false)}>
                              <Image  source={icons.switchh}
                              />
                              </TouchableOpacity>
                              

                          </View>
                          <Text style={styles.bottomtext}>Non-Veg Only</Text>
                      </View>
                     
                          :
                          <View>
                          <View  style={{flexDirection:'row'}}>
                          <TouchableOpacity onPress={() => setVeg(true)}>
                              <Image  source={icons.vegswitch}
                              />
                              
                                
                          </TouchableOpacity>
                          <View>
                          <Text style={styles.bottomtext}>Veg Only</Text>

                   </View>
                   <View style={{marginLeft:'auto'}}>
                          <TouchableOpacity onPress={() => setVeg(false)}>
                              <Image  source={icons.switchh}
                              />
                              </TouchableOpacity>
                              

                          </View>
                          <Text style={styles.bottomtext}>Non-Veg Only</Text>
                       </View> 
                       <View style={{marginTop:15}}>

                         <MenuCardFandBOne/>
                         </View>
                       </View>
                      }
                        </View>

                }
                
                <View style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                    marginTop:10
                }} />
                <Text style={styles.loacationTextt}>Location</Text>
                <Text style={styles.locbottomtext}>Airside - International departures. The detail location will go here. (Floor, nearby landmark)</Text>
                <View style={styles.mapViewConatainer}>
                    <Image source={images.mapImages}
                        style={styles.mapImageSize}
                    />
                </View>


                <Text style={styles.loacationText}>Conditions</Text>
                <Text style={styles.locbottomtext}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et…</Text>
                <CommonButton onPress={() => navigation.navigate('FandBPayment')} title={'Book Now'} style={{ justifyContent: 'center', margin: 50,fontSize:17,lineHeight:17 }} />


            </View>

        </ScrollView>
    );
}
export default FandBDetails;
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: COLORS.mainBackground,
        paddingTop: 20
    },
    whiteContainer: {
        padding: 12,
        backgroundColor: COLORS.white,
        borderRadius: 14
    },

    imageSize: {
        height: 140,
        width: '100%',
        borderRadius: 14
    },

    innerWhiteHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingBottom: 20
    },
    headingHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hotelNameText: {
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

    middleWhiteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    reviewContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5
    },
    mapViewConatainer: {
        paddingVertical: 30
    },

    mapImageSize: {
        height: 180,
        width: '100%'
    },
    closedText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    bookIconConatainer: {
        backgroundColor: COLORS.brownText,
        borderRadius: 21,
        paddingHorizontal: 20,
        paddingVertical: 11,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bookNowText: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24
    },
    iconSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    headerText: {
        fontSize: 17,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24,
        paddingLeft: 15
    },
    headerTextt: {
        fontSize: 17,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24,
        paddingLeft: 5,
        paddingTop: 20,
        paddingBottom: 15
    },
    combotext:{
        fontSize: 15,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24,
        paddingLeft: 5,
        paddingTop: 20,
        paddingBottom: 15
    },
    loacationText: {
        fontSize: 15,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24,
        paddingLeft: 5,
        paddingBottom: 10
    },
    loacationTextt: {
        fontSize: 15,
        paddingTop:20,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24,
        paddingLeft: 5,
        paddingBottom: 10
    },

    bottomtext: {
        fontSize: 12,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24,
        paddingLeft: 5,
        paddingBottom: 5
    },
    locbottomtext: {
        fontSize: 14,
        color: COLORS.muddyText,
        fontFamily: FONTS.poppinsRegular,
        lineHeight: 24,
        paddingLeft: 5,
        paddingBottom: 5
    },
    menuline: {
        fontFamily: FONTS.poppinsMedium,
        fontSize: 15,
        color: COLORS.orangeText,
        textDecorationLine: 'underline',
        paddingLeft: 5,
        paddingTop: 20,
        paddingBottom: 15
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 20,
    },
    locationContainer: {
        flexDirection: 'row',
        paddingTop: 10
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
    browseIconSize: {
        width: 15,
        height: 18,
        resizeMode: 'contain'
    },
    addressText: {
        color: COLORS.muddyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingLeft: 12,
        lineHeight:18,
    },
    cutImageSize: {
        resizeMode: 'contain',
        padding: 5,
        paddingLeft: 15
    },

    offContainer: {
        flexDirection: 'row',
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

}
)