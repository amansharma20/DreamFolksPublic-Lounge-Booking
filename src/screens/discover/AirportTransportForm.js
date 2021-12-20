import { useNavigation } from '@react-navigation/core';
import React, { useState, version } from 'react';
import BouncyCheckboxGroup, {
    ICheckboxButton,
  } from "react-native-bouncy-checkbox-group";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { COLORS, FONTS, images, icons } from '../../../constants';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DropDownPicker from 'react-native-dropdown-picker';
import CommonButton from '../../components/CommonButton';
const staticData= [
    {
      id: 0,
      fillColor:COLORS.brownText,
      unfillColor:COLORS.backgroundColor,
      text: "To Airport",
      textStyle: {textDecorationLine: 'none',paddingRight:30}
      
    },
    {
      id: 1,
      fillColor:COLORS.brownText,
      unfillColor:COLORS.backgroundColor,
      text: "From Airport",
      textStyle: {textDecorationLine: 'none'},
      style:{paddingLeft:'auto'}

    },
  
  
  ];
export default function AirportTransportForm() {
    const navigation = useNavigation();
    const [checkboxState, setCheckboxState] = React.useState(false);
    const [dest, setDest] = useState(true)
    const [from, setfrom] = useState(true)
    const [i, setI] = useState(1);
    const [j, setJ] = useState(1);

    const [k, setk] = useState(1);
     const ab=ICheckboxButton
    const increment = () => {
        setI(i + 1);
    }
    const decrement = () => {
        setI(i - 1);
    }
    const incrementone = () => {
        setJ(j + 1);
    }
    const decrementone = () => {
        setJ(j - 1);
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Mumbai', value: 'City' },
        { label: 'Chennai', value: 'City' }
    ]);

    const [openTerminalType, setOpenTerminalType] = useState(false);
    const [valueTerminalType, setValueTerminalType] = useState(null);
    const [itemsTerminalType, setItemsTerminalType] = useState([
        { label: 'Domestic', value: 'Terminal' },
        { label: 'Domestic', value: 'Terminal' }
    ]);

    const [openTerminalNo, setOpenTerminalNo] = useState(false);
    const [valueTerminalNo, setValueTerminalNo] = useState(null);
    const [itemsTerminalNo, setItemsTerminalNo] = useState([
        { label: 'Terminal 1', value: 'TerminalNo' },
        { label: 'Terminal 2', value: 'TerminalNo' },
        { label: 'Terminal 3', value: 'TerminalNo' },
        { label: 'Terminal 4', value: 'TerminalNo' }
    ]);

    const [openCarType, setOpenCarType] = useState(false);
    const [valueCarType, setValueCarType] = useState(null);
    const [itemsCarType, setItemsCarType] = useState([
        { label: 'Gold', value: 'Car' },
        { label: 'Not Available', value: 'Car' }
    ]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.innerHeader}>
                    <View
                        style={{
                            alignItems: "center",
                            backgroundColor: checkboxState ? "" : "",
                        }
                        }>
                        <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                            fillColor={COLORS.orangeText}
                            iconStyle={{ borderColor: COLORS.brownText, borderRadius: 6 }}
                            size={20}
                        />
                    </View>

                    <Text style={styles.complimentaryText}>
                        Complimentary only
                    </Text>
                </View>
                <Text style={styles.detailsMainHeading}>
                    Passenger details
                </Text>
                <View>
                    <Text style={styles.detailsHeading}>
                        Passenger name*
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Naman Rathi"
                        keyboardType="default"
                        maxLength={25}
                        placeholderTextColor={COLORS.brownText}
                    />
                </View>

                <View>
                    <Text style={styles.detailsHeading}>
                        Contact number*
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="+91 01234 56789"
                        keyboardType="numeric"
                        maxLength={10}
                        placeholderTextColor={COLORS.brownText}
                    />
                </View>

                <View>
                    <Text style={styles.detailsHeading}>
                        Email ID*
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="xyz@gmail.com"
                        keyboardType="email-address"
                        placeholderTextColor={COLORS.brownText}
                    />
                </View>

                <Text style={styles.PaxText}>
                    Pax details
                </Text>
                <View style={styles.paxDetailsContainer}>
                    <View style={styles.memberDetailContainer}>
                        <Text style={styles.adultText}>
                            Adults
                        </Text>
                        <View style={styles.innerAdultContainer}>
                            <TouchableOpacity onPress={decrement}>
                                <Image source={icons.iconRemovePicker}
                                    style={styles.addRemoveIconSize}
                                />
                            </TouchableOpacity>
                            <Text style={styles.memberNumberText}>
                                {i}
                            </Text>
                            <TouchableOpacity onPress={increment}>
                                <Image source={icons.iconAddPicker}
                                    style={styles.addRemoveIconSize}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.fakeViewLine}>

                    </View>

                    <View style={styles.childDetailContainer}>
                        <View>
                            <Text style={styles.adultText}>
                                Child
                            </Text>
                            <Text style={styles.chargeableText}>
                                Above 2 yr chargeable
                            </Text>
                        </View>
                        <View style={styles.innerAdultContainer}>
                            <TouchableOpacity onPress={decrementone}>
                                <Image source={icons.iconRemovePicker}
                                    style={styles.addRemoveIconSize}
                                />
                            </TouchableOpacity>
                            <Text style={styles.memberNumberText}>
                                {j}
                            </Text>
                            <TouchableOpacity onPress={incrementone}>
                                <Image source={icons.iconAddPicker}
                                    style={styles.addRemoveIconSize}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <Text style={styles.travelText}>
                    Travel
                </Text>
    <BouncyCheckboxGroup
          data={staticData}
          onChange={(ab) => {
              setk(ab.id)
            console.log("SelectedItem: ", ab.id);
          }}
        />
                <View style={styles.travelContainer}>
                    {/* <View style={{flexDirection:'row'}}>
                    <View
                        style={{
                            alignItems: "center",
                            backgroundColor: checkboxState ? "" : "",
                        }
                        }>
                        <BouncyCheckbox onPress={() => setfrom(false)}
                            fillColor={COLORS.orangeText}
                            iconStyle={{ borderColor: COLORS.brownText }}
                            size={20}
                        />
                    </View> */}
                     {/* {from?
                     <Text style={styles.toAirportTextone}>
                     To airport
                     </Text>
                     :
                     <Text style={styles.toAirportText}>
                        To airport
                    </Text>
                     }
                    
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <View
                        style={{
                            alignItems: "center",
                            backgroundColor: checkboxState ? "" : "",
                        }
                        }>
                        <BouncyCheckbox onPress={() => setfrom(true)}
                            fillColor={COLORS.orangeText}
                            iconStyle={{ borderColor: COLORS.brownText }}
                            size={20}
                        />
                    </View> */}
                 
                    {/* <View style={{ flexDirection: 'row' }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: checkboxState ? "" : "",
                            }
                            }>
                            <BouncyCheckbox onPress={() => setfrom(false)}
                                fillColor={COLORS.orangeText}
                                iconStyle={{ borderColor: COLORS.brownText }}
                                size={20}
                            />
                        </View>
{from?
                     <Text style={styles.toAirportTextone}>
                     To airport
                     </Text>
                     :
                     <Text style={styles.toAirportText}>
                        To airport
                    </Text>
                     }

                        
                    </View> */}
                    {/* <View style={{ flexDirection: 'row' }}>
                        <View
                            style={{
                                alignItems: "center",
                                backgroundColor: checkboxState ? "" : "",
                            }
                            }>
                            <BouncyCheckbox onPress={() => setDest(false)}
                                fillColor={COLORS.orangeText}
                                iconStyle={{ borderColor: COLORS.brownText }}
                                size={20}
                            />
                        </View>

                        {dest?
                     <Text style={styles.toAirportTextone}>
                     From airport
                     </Text>
                     :
                     <Text style={styles.toAirportText}>
                        From airport
                    </Text>
                     }
                    </View> */}
                </View>

                <Image source={images.mapImages}
                    style={styles.mapImageSize}
                />

                <View style={styles.pickupContainer}>
                    {
                        k==0 ?
                            <Text style={styles.detailsHeading}>
                                Pickup Address*
                            </Text>
                            :
                           
                            <Text style={styles.detailsHeading}>
                                Destination Address*
                            </Text>

                    }


                    <TextInput
                        style={styles.input}
                        placeholder="H. No. 436, Safadarjung Enclave"
                        keyboardType="default"
                        placeholderTextColor={COLORS.brownText}
                    />

                    <View style={styles.locationContainer}>
                        <TouchableOpacity>
                            <Image source={icons.myLocationIcon}
                                style={styles.locationIconSize}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.useLocationText}>
                                Use current location
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                    {
                        k==1 ?
                            <Text style={styles.detailsHeading}>
                                Pickup Address*
                            </Text>
                            :
                           
                            <Text style={styles.detailsHeading}>
                                Destination Address*
                            </Text>

                    }

                        <TextInput
                            style={styles.input}
                            placeholder="Mumbai airport"
                            keyboardType="default"
                            placeholderTextColor={COLORS.brownText}
                        />
                    </View>

                    <View>
                        <Text style={styles.detailsHeading}>
                            Type of travel*
                        </Text>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={{
                                height: 65,
                                paddingLeft: 18,
                                backgroundColor: COLORS.mainBackground,
                                borderColor: COLORS.mainBackground
                            }}
                            labelStyle={{
                                fontFamily: FONTS.poppinsRegular
                            }}
                            textStyle={{
                                fontSize: 17,
                                color: COLORS.brownText,
                                lineHeight: 24
                            }}
                            zIndex={100000}
                        />
                    </View>

                    <View style={styles.terminalContainer}>
                        <View style={styles.terminalInnerContainer}>
                            <Text style={styles.headingText}>
                                Terminal type*
                            </Text>

                            <DropDownPicker
                                open={openTerminalType}
                                value={valueTerminalType}
                                items={itemsTerminalType}
                                setOpen={setOpenTerminalType}
                                setValue={setValueTerminalType}
                                setItems={setItemsTerminalType}
                                style={{
                                    height: 65,
                                    paddingLeft: 18,
                                    backgroundColor: COLORS.mainBackground,
                                    borderColor: COLORS.mainBackground
                                }}
                                labelStyle={{
                                    fontFamily: FONTS.poppinsRegular
                                }}
                                textStyle={{
                                    fontSize: 17,
                                    color: COLORS.brownText,
                                    lineHeight: 24
                                }}
                                zIndex={10000}
                            />

                        </View>

                        <View style={styles.terminalInnerContainer}>
                            <Text style={styles.headingText}>
                                Terminal no*
                            </Text>

                            <DropDownPicker
                                open={openTerminalNo}
                                value={valueTerminalNo}
                                items={itemsTerminalNo}
                                setOpen={setOpenTerminalNo}
                                setValue={setValueTerminalNo}
                                setItems={setItemsTerminalNo}
                                style={{
                                    backgroundColor: COLORS.mainBackground,
                                    borderColor: COLORS.mainBackground,
                                    height: 65,
                                    paddingLeft: 18
                                }}
                                labelStyle={{
                                    fontFamily: FONTS.poppinsRegular
                                }}
                                textStyle={{
                                    fontSize: 17,
                                    color: COLORS.brownText,
                                    lineHeight: 24
                                }}
                            />

                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.flightNoContainer}>
                            <Text style={styles.flightHeadingText}>
                                Flight no.*
                            </Text>
                            <TextInput
                                style={styles.halfInput}
                                maxLength={16}
                                keyboardType="default"
                                placeholderTextColor={COLORS.brownText}
                                placeholder="6E 8246"
                            />
                        </View>
                        <View style={styles.flightNoContainer}>
                            <Text style={styles.flightHeadingText}>
                                PNR no./Passport no.
                            </Text>
                            <TextInput
                                style={styles.input}
                                maxLength={16}
                                keyboardType="default"
                                placeholderTextColor={COLORS.brownText}
                                placeholder="43436587899"
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.detailsHeading}>
                            Car type*
                        </Text>
                        <DropDownPicker
                            open={openCarType}
                            value={valueCarType}
                            items={itemsCarType}
                            setOpen={setOpenCarType}
                            setValue={setValueCarType}
                            setItems={setItemsCarType}
                            style={{
                                backgroundColor: COLORS.mainBackground,
                                borderColor: COLORS.mainBackground,
                                height: 65,
                                paddingLeft: 18
                            }}
                            labelStyle={{
                                fontFamily: FONTS.poppinsRegular
                            }}
                            textStyle={{
                                fontSize: 17,
                                color: COLORS.brownText,
                                lineHeight: 24
                            }}
                            zIndex={100000}
                        />
                    </View>
                    <View style={styles.dateTimeContainer}>
                        <View style={styles.flightNoContainer}>
                            <Text style={styles.headingText}>
                                Date*
                            </Text>
                            <TextInput
                                style={styles.halfInput}
                                maxLength={16}
                                keyboardType="default"
                                placeholderTextColor={COLORS.brownText}
                                placeholder="03 - 07 - 2021"
                            />

                        </View>

                        <View style={styles.flightNoContainer}>
                            <Text style={styles.headingText}>
                                Time*
                            </Text>
                            <TextInput
                                style={styles.halfInput}
                                maxLength={16}
                                keyboardType="default"
                                placeholderTextColor={COLORS.brownText}
                                placeholder="10:00 AM"
                            />
                        </View>
                    </View>

                    <Text style={styles.detailsHeading}>
                        *Note/Special request
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Type here"
                        keyboardType="default"
                        maxLength={25}
                        placeholderTextColor={COLORS.brownText}
                    />

                </View>

            </View>

            <View style={styles.footer}>
            <CommonButton onPress={() => navigation.navigate('AirportTransportPayment')} 
          title={'Next'}
          />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },

    innerContainer: {
        paddingHorizontal: 20,
        paddingTop: 30
    },

    innerHeader: {
        flexDirection: 'row'
    },

    complimentaryText: {
        color: COLORS.muddyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    detailsMainHeading: {
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsSemiBold,
        paddingTop: 30,
    },

    detailsHeading: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingBottom: 10,
        paddingTop: 20
    },

    input: {
        paddingVertical: 17,
        borderRadius: 10,
        backgroundColor: COLORS.mainBackground,
        width: '100%',
        color: COLORS.brownText,
        fontSize: 17,
        paddingLeft: 18
    },

    PaxText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingBottom: 10,
        paddingTop: 20
    },

    paxDetailsContainer: {
        paddingTop: 17,
        backgroundColor: COLORS.mainBackground,
        borderRadius: 14
    },

    fakeViewLine: {
        width: '100%',
        borderWidth: 0,
        borderBottomWidth: 0.5,
        borderColor: COLORS.greyBorderLine
    },

    memberDetailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 17,
        paddingBottom: 10,
        alignItems: 'center'
    },

    chargeableText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14
    },

    adultText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 17,
        lineHeight: 18
    },

    innerAdultContainer: {
        flexDirection: 'row'
    },

    addRemoveIconSize: {
        width: 29,
        height: 29,
        resizeMode: 'contain'
    },

    memberNumberText: {
        fontFamily: FONTS.poppinsSemiBold,
        color: COLORS.brownText,
        fontSize: 22,
        paddingHorizontal: 19
    },

    childDetailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 17,
        alignItems: 'center'
    },

    travelText: {
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsSemiBold,
        paddingTop: 20,
        paddingBottom: 10
    },
    textStyle: { textDecorationLine: "none" },


    travelContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        justifyContent: 'space-between'
    },

    toAirportText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 17,
    },
    toAirportTextone: {
        color: COLORS.greyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 17,
    },


    mapImageSize: {
        width: '100%',
        height: 110,
        marginTop:10
    },

    pickupContainer: {
        paddingTop: 20
    },

    locationContainer: {
        flexDirection: 'row',
        paddingTop: 10,
    },

    locationIconSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    useLocationText: {
        color: COLORS.redText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingLeft: 10
    },

    terminalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },

    terminalInnerContainer: {
        width: '47%',
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },

    flightNoContainer: {
        width: '47%'
    },

    flightHeadingText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingBottom: 10
    },

    dateTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },

    halfInput: {
        height: 58,
        borderRadius: 10,
        backgroundColor: COLORS.mainBackground,
        color: COLORS.brownText,
        fontSize: 17,
        paddingLeft: 18
    },

    headingText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingBottom: 10
    },

    footer: {
        flex: 1,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },


})