import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, Alert, ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS, FONTS, icons, images } from '../.././../constants';
import CommonProcess from '../../components/CommonProcess';
import CommonProcessOne from '../../components/flatlistItems/discoverItems/CommonProcessOne';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function SleepingPodsBookingSummary() {
    const [checkboxState, setCheckboxState] = React.useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();
    const [cancel,setcancel]=useState(true);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.back}
                        style={styles.backSize}
                    />
                    </TouchableOpacity>
                    <Text style={styles.headerHeading}>
                        Booking submited
                    </Text>
                </View>

                {
               cancel?
               <CommonProcess/>
               :
               <CommonProcessOne/>
           }
                <View style={styles.personalFullContainer}>
                    <View style={styles.personalDetailsContainer}>
                        <Text style={styles.personalDetailsText}>
                            Name:
                        </Text>
                        <Text style={styles.personalDetailsText}>
                            Phone:
                        </Text>
                        <Text style={styles.personalDetailsText}>
                            Booking ID:
                        </Text>
                    </View>
                    <View style={styles.personalDetailsContainer}>
                        <Text style={styles.personalDetailsText}>
                            Naman Rathi
                        </Text>
                        <Text style={styles.personalDetailsText}>
                            +91 73842 81936
                        </Text>
                        <Text style={styles.personalDetailsText}>
                            #A7283K829
                        </Text>
                    </View>
                </View>
                <View style={styles.boxAndTextContainer}>
                    <View>
                        <Image source={images.SleepingPodsImage}
                        style={styles.imageSize}
                        />
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.addressText}>
                        Aviserv sleeping pods
                        </Text>
                        <Text style={styles.terminalText}>
                        Terminal 1, International
                        </Text>
                    </View>
                </View>

                <View style={styles.detailsFullContainer}>
                    <View style={styles.personalDetailsContainer}>
                        <Text style={styles.personalDetailsText}>
                            Destination:
                        </Text>
                        <Text style={styles.personalDetailsText}>
                            Arrival date:
                        </Text>
                        <Text style={styles.personalDetailsText}>
                            Time:
                        </Text>
                        <Text style={styles.personalDetailsText}>
                            Pax details:
                        </Text>
                        <Text style={styles.personalDetailsText}>
                        Duration:
                        </Text>
                    </View>

                    <View style={styles.personalDetailsContainer}>
                        <Text style={styles.personalDetailsText}>
                            Mumbai airport
                        </Text>
                        <Text style={styles.personalDetailsText}>
                            03 - 07 - 2021
                        </Text>
                        <Text style={styles.personalDetailsText}>
                            10:00 AM
                        </Text>
                        <Text style={styles.personalDetailsText}>
                            2
                        </Text>
                        <Text style={styles.personalDetailsText}>
                        2 Hours
                        </Text>
                    </View>
                </View>
                <View style={styles.paymentContainer}>
                    <View style={styles.upperPartContainer}>
                    <Text style={styles.paidText}>
                    Total paid
                    </Text>
                    <Text style={styles.rupeeText}>
                    ₹ 2200
                    </Text>
                    </View>
                   
                    <View style={styles.upperPartContainer}>
                    <TouchableOpacity onPress={() =>
                    {   icons.bookk=2
                         navigation.navigate('Payment')}}>
                        <Text style={styles.viewDetailsText}>
                        View details
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.downloadIconContainer}>
                            <Image source={icons.download}
                            style={styles.downloadIconSize}
                            />
                        <Text style={styles.downloadText}>
                        Download invoice
                            </Text>
                            </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {cancel?
                       <View style={styles.footer}>
                       <TouchableOpacity 
                       style={{width: '70%'}} 
                       onPress={() => setShowModal(!showModal)}>
                       <View style={styles.cancelIconContainer}>
                           <Text style={styles.cancelText}>
                           Cancel booking
                               </Text>
                           </View>
                           </TouchableOpacity>
                       </View>
                       :
                       <View style={styles.footer}>
                       <View style={{alignItems:"center",flexDirection:'row'}}>
                       <Text style={{fontSize:14,color:COLORS.muddyText,fontFamily:FONTS.poppinsRegular}}>Refund status</Text>
                       <Text style={{fontSize:14,color:COLORS.brownText,fontFamily:FONTS.poppinsRegular,paddingLeft:5}}>Refund Not applicable</Text>
</View>
                   </View>
                }

            </View>
            {showModal &&
              <GestureRecognizer
              onSwipeDown={ () => setShowModal(!showModal)}
            >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setShowModal(!showModal);
                    }}
                >
                    <ScrollView>
                    <View style={styles.popupBackground}>
                        <View style={styles.popUpScreen}>
                        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                        <View style={{
                           borderBottomWidth: 5,
                           borderRadius:4,
                           width:30,
                           marginTop: 10,
                           borderColor: COLORS.brownText,
                           alignContent:'center',
                           justifyContent:'center',
                           alignItems:'center',
                           alignSelf:'center'
                        }}>
                          </View>

                                </TouchableOpacity>
                            <View style={styles.removePicContainer}>
                                <Image source={images.cancelBooking}
                                    style={styles.removeCardSize}
                                />
                            </View>
                            <View>
                                <Text style={styles.removeCardText}>
                                    Cancel booking
                                </Text>
                            </View>
                            <View style={styles.middleContainer}>
                                <Text style={styles.middleText}>
                                    Are you sure, you want to
                                </Text>
                                <Text style={styles.middleText}>
                                    cancel this booking?
                                </Text>
                            </View>

                            <View style={styles.middleContainer2}>
                                <Text style={styles.middleText2}>
                                    As a cancellation fee, 15% of the paid
                                </Text>
                                <Text style={styles.middleText2}>
                                    amount will be deducted
                                </Text>
                            </View>

                            <View style={styles.termsContainer}>
                            <View
                        style={{
                            alignItems: "center",
                            backgroundColor: checkboxState ? "" : "",
                        }
                        }>
                        <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                            fillColor={COLORS.orangeText}
                            iconStyle={{ borderColor: COLORS.orangeText, borderRadius: 6}}
                            size={20}
                        />
                    </View>
                                <Text style={styles.middleText2}>
                                    I accept all terms & conditions
                                </Text>
                            </View>


                            <View style={styles.footerContainer}>
                                <View style={styles.innerFooter}>
                                <TouchableOpacity onPress={() => setShowModal(false)}>
                                    <View style={styles.keepIcon}>
                                        <Text style={styles.keepText}>
                                            Keep
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                </View>
                                <View style={styles.innerFooter}>
                                <TouchableOpacity
                                 onPress={() => 
                                    {   setcancel(false)
                                    setShowModal(false)}}>
                                    <View style={styles.yesIcon}>
                                        <Text style={styles.yesIconText}>
                                            Yes, cancel
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                </Modal>
                </GestureRecognizer>
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackground,
    },

    innerContainer: {
        paddingTop: 40,
        paddingHorizontal: 20
    },

    header: {
        flexDirection: 'row',
        paddingBottom: 40
    },

    backSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    headerHeading: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        paddingLeft: 15,
        lineHeight: 22
    },

    personalFullContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.greyBorderLine
    },

    personalDetailsContainer: {
        width: '33%',
    },

    personalDetailsText: {
        color: COLORS.lightGreyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingTop: 10
    },

    boxAndTextContainer: {
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    imageSize:{
        width: 100,
        height: 80,
        borderRadius: 21,
    },

    membershipText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 20
    },

    addressContainer: {
        paddingLeft: 18,
    },

    addressText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
    },

    terminalText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14
    },

    detailsFullContainer: {
        flexDirection: 'row',
        paddingBottom: 50
    },

    paymentContainer:{
        
        padding: 16,
        backgroundColor: COLORS.white,
        borderRadius: 14
    },

    upperPartContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    paidText:{
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
    },

    rupeeText:{
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 17
    },

    viewDetailsText:{
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        textDecorationLine: 'underline'
    },

    downloadIconSize:{
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    downloadText:{
        color: COLORS.orangeText,
        textDecorationLine: 'underline',
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingLeft: 8
    },

    downloadIconContainer:{
        flexDirection: 'row'
    },

    footer:{
        // flex: 1,
        paddingVertical: 30,
        alignItems: 'center'  
    },

    cancelIconContainer:{
        paddingVertical: 14,
        // paddingHorizontal: 58,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: COLORS.orangeText,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cancelText:{
        color: COLORS.orangeText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        lineHeight: 24
    },

    popupBackground: {
        paddingTop: '80%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    popUpScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        backgroundColor: COLORS.mainBackground
    },

    removePicContainer: {
        paddingVertical: 30,
    },

    removeCardText: {
        color: COLORS.brownText,
        fontSize: 30,
        fontFamily: FONTS.poppinsBold
    },

    middleContainer: {
        paddingTop: 28,
        alignItems: 'center',
    },

    middleText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 17,
    },

    middleContainer2: {
        paddingVertical: 19,
        alignItems: 'center',
    },

    middleText2: {
        color: COLORS.muddyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    termsContainer: {
        flexDirection: 'row'
    },

    removeCardSize: {
        width: 120,
        height: 75
    },

    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        width: '100%',
        paddingHorizontal: 20
    },
    innerFooter:{
        width: '47%'
    },
    keepIcon: {
        paddingVertical: 14,
        borderRadius: 26,
        borderColor: COLORS.orangeText,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },

    keepText: {
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        color: COLORS.orangeText,
        lineHeight: 24
    },

    yesIcon: {
        paddingVertical: 14,
        borderRadius: 26,
        backgroundColor: COLORS.orangeText,
        alignItems: 'center',
        justifyContent: 'center',
    },

    yesIconText: {
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        color: COLORS.white,
        lineHeight: 24
    },

}
)