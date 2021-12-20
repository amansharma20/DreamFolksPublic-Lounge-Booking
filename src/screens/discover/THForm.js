import React, { useState } from "react";
import { useNavigation } from '@react-navigation/core';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity, TextInput
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../constants';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from "react-native-gesture-handler";
import CommonButton from "../../components/CommonButton";


export default function THForm() {
    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Arrival', value: 'Arrival' },
        { label: 'Not available', value: 'Not available' }
    ]);
    const [openTerminal, setOpenTerminal] = useState(false);
    const [valueTerminal, setValueTerminal] = useState(null);
    const [itemsTerminal, setItemsTerminal] = useState([
        { label: 'Domestic', value: 'Domestic' },
        { label: 'Not available', value: 'Not available' }
    ]);
    const [openTerminal1, setOpenTerminal1] = useState(false);
    const [valueTerminal1, setValueTerminal1] = useState(null);
    const [itemsTerminal1, setItemsTerminal1] = useState([
        { label: 'Terminal 1', value: 'Terminal 1' },
        { label: 'Not available', value: 'Not available' }
    ]);
    const [i, setI] = useState(1);
    const [j, setJ] = useState(1);
    const [k, setK] = useState(1);

    const increment = () => {
        setI(i + 1);
    }
    const decrement = () => {
        i < 2 ?
            setI(1)
            :
            setI(i - 1);
    }
    const incrementone = () => {

        setJ(j + 1);
    }
    const decrementone = () => {
        j < 2 ?
            setJ(1) :
            setJ(j - 1);
    }
    const incrementtwo = () => {
        setK(k + 1);
    }
    const decrementtwo = () => {
        k < 2 ?
            setK(1)
            :
            setK(k - 1);
    }
    return (

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={icons.back}
                        style={styles.back}
                    />
                </TouchableOpacity>
                <Text style={styles.headerHeading}>
                    Golden empire hotel
                </Text>
            </View>
            <View style={styles.body}>

                <Text style={styles.typeTraveltext}>
                    Type of travel*
                </Text>
                <View style={styles.DropDown}>

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        zIndex={10000}
                        style={{
                            borderColor: COLORS.mainBackground,
                            backgroundColor: COLORS.mainBackground,
                            borderRadius: 14,
                            height: 65,
                            paddingLeft: 17
                        }}
                        textStyle={{
                            fontSize: 17,
                            color: COLORS.brownText,
                            lineHeight: 24
                        }}
                        placeholderStyle={{
                            color: "#5E423D",

                        }}


                    />
                </View>

                <View style={styles.terminalgroup}>

                    <View style={styles.terminaltextwidth}>
                        <Text style={styles.terminaltext}>
                            Terminal type *
                        </Text>

                        <View style={styles.Domesticpicker}>

                            <DropDownPicker
                                open={openTerminal}
                                value={valueTerminal}
                                items={itemsTerminal}
                                setOpen={setOpenTerminal}
                                setValue={setValueTerminal}
                                setItems={setItemsTerminal}
                                style={{
                                    borderColor: COLORS.white,
                                    borderRadius: 14,
                                    height: 65,
                                    paddingLeft: 17,
                                    borderColor: COLORS.mainBackground,
                                    backgroundColor: COLORS.mainBackground,


                                }}
                                textStyle={{
                                    fontSize: 17,
                                    color: COLORS.brownText,
                                    lineHeight: 24
                                }}
                                placeholderStyle={{
                                    color: "#5E423D",

                                }}

                            />

                        </View>
                        <View >
                            <Text style={styles.flighttext}>
                                Flight no.*
                            </Text>
                            <View style={styles.flightnoRectangle}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder='6E 8246'
                                    placeholderTextColor="#5E423D"
                                    maxLength={5}
                                    fontSize={17}

                                />
                            </View>
                        </View>

                        <View >
                            <Text style={styles.flighttext}>
                                Check in date
                            </Text>
                            <View style={styles.flightnoRectangle}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder='03 - 07 - 2021'
                                    placeholderTextColor="#5E423D"
                                    maxLength={5}
                                    fontSize={17}



                                />
                            </View>
                        </View>
                        <View >
                            <Text style={styles.flighttext}>
                                Check out date
                            </Text>
                            <View style={styles.flightnoRectangle}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder='04 - 07 - 2021'
                                    placeholderTextColor="#5E423D"
                                    maxLength={5}
                                    fontSize={17}



                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.terminaltextwidth}>
                        <Text style={styles.terminaltext}>
                            Terminal no*
                        </Text>
                        <View style={styles.Domesticpicker}>

                            <DropDownPicker
                                open={openTerminal1}
                                value={valueTerminal1}
                                items={itemsTerminal1}
                                setOpen={setOpenTerminal1}
                                setValue={setValueTerminal1}
                                setItems={setItemsTerminal1}
                                style={{
                                    borderRadius: 14,
                                    height: 65,
                                    paddingLeft: 17,
                                    borderColor: COLORS.mainBackground,
                                    backgroundColor: COLORS.mainBackground,
                                }}
                                textStyle={{
                                    fontSize: 17,
                                    color: COLORS.brownText,
                                    lineHeight: 24
                                }}
                                placeholderStyle={{
                                    color: "#5E423D",

                                }}

                            />

                        </View>
                        <View>
                            <Text style={styles.flighttext}>
                                PNR no./Passport no.
                            </Text>
                            <View style={styles.flightnoRectangle}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder='43436587899'
                                    placeholderTextColor="#5E423D"
                                    maxLength={5}
                                    fontSize={17}

                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.flighttext}>
                                Check in Time
                            </Text>
                            <View style={styles.flightnoRectangle}>
                                <TextInput

                                    style={styles.TextInput}
                                    placeholder='10:00 AM'
                                    placeholderTextColor="#5E423D"
                                    maxLength={5}
                                    fontSize={17}

                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.flighttext}>
                                Check out Time
                            </Text>
                            <View style={styles.flightnoRectangle}>
                                <TextInput

                                    style={styles.TextInput}
                                    placeholder='6:00 PM'
                                    placeholderTextColor="#5E423D"
                                    maxLength={5}
                                    fontSize={17}

                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View >
                    <Text style={styles.flighttext}>
                        Total guest including the member
                    </Text>
                </View >

                <View style={styles.direction}>

                    <View style={styles.whiteLeftrectangle} >
                        <Text style={styles.textdark}>
                            Occupancy
                        </Text>
                        <Text style={styles.textlight}> Hours</Text>
                    </View>
                    <View style={styles.whiteRightrectangle} >
                        <Text style={styles.textdark}>
                            No. of passengers
                        </Text>
                        <Text style={styles.textlight}>
                            Ages 5 or above
                        </Text>
                    </View>
                </View>
                <View style={styles.direction}>

                    <View style={styles.whiteLeftrectangleone} >
                        <Text style={styles.textdark}>
                            2 Hours
                        </Text>
                        <Text style={styles.textlight}>
                            Single occupancy
                        </Text>

                    </View>

                    <View style={styles.whiteimgrectangle} >
                        <TouchableOpacity onPress={decrement}>
                            <Image source={icons.iconRemovePicker}
                                style={styles.iconRemovePicker} />
                        </TouchableOpacity>
                        <Text style={styles.icontnumber}>
                            {i}
                        </Text>
                        <TouchableOpacity onPress={increment} >
                            <Image source={icons.iconAddPicker}
                                style={styles.iconAddPicker} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.direction}>
                    <View style={styles.whiteLeftrectangleone} >
                        <Text style={styles.textdark}>
                            4 Hours
                        </Text>
                        <Text style={styles.textlight}>
                            Double occupancy
                        </Text>
                    </View>

                    <View style={styles.whiteimgrectangle} >
                        <TouchableOpacity onPress={decrementone} >
                            <Image source={icons.iconRemovePicker}
                                style={styles.iconRemovePicker} />
                        </TouchableOpacity>
                        <Text style={styles.icontnumber}>
                            {j}
                        </Text>
                        <TouchableOpacity onPress={incrementone} >
                            <Image source={icons.iconAddPicker}
                                style={styles.iconAddPicker} />
                        </TouchableOpacity>


                    </View>
                </View>
                <View style={styles.direction}>
                    <View style={styles.whiteLeftBottomrectangle} >
                        <Text style={styles.textdark}>
                            6 Hours

                        </Text>
                        <Text style={styles.textlight}>
                            Single occupancy
                        </Text>
                    </View>

                    <View style={styles.whiteRightBottomrectangle} >
                        <TouchableOpacity onPress={decrementtwo}>
                            <Image source={icons.iconRemovePicker}
                                style={styles.iconRemovePicker} />
                        </TouchableOpacity>
                        <Text style={styles.icontnumber} >
                            {k}
                        </Text>
                        <TouchableOpacity onPress={incrementtwo} >
                            <Image source={icons.iconAddPicker}
                                style={styles.iconAddPicker} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ paddingTop: 36 }}>
                    <Text style={styles.passengerdetailstext}>
                        Passenger details

                    </Text>
                </View>


                <Text style={styles.passengernametext}>
                    Passenger name*
                </Text>

                <View style={styles.whiterectangepassanger}>
                    <TextInput

                        style={styles.TextInput}
                        placeholder='Naman Rathi '
                        placeholderTextColor="#5E423D"
                        maxLength={5}

                    />
                </View>
                <Text style={styles.flighttext}>
                    Contact number*
                </Text>

                <View style={styles.whiterectangepassanger}>
                    <TextInput

                        style={styles.TextInput}
                        placeholder='+91 01234 56789'
                        placeholderTextColor="#5E423D"
                        maxLength={5}

                    />
                </View>
                <Text style={styles.flighttext}>
                    Email ID*
                </Text>

                <View style={styles.whiterectangepassanger}>
                    <TextInput

                        style={styles.TextInput}
                        placeholder='xyz@gmail.com'
                        placeholderTextColor="#5E423D"
                        maxLength={5}

                    />
                </View>
                <Text style={styles.flighttext}>
                    *Note/Special request
                </Text>

                <View style={styles.whiterectangepassanger}>
                    <TextInput

                        style={styles.TextInput}
                        placeholder='Type here'
                        placeholderTextColor="#5E423D"
                        maxLength={5}

                    />
                </View>
                <View style={styles.bottombutton}>
                    <CommonButton onPress={() =>{ 
                        icons.ab="Golden Empire Hotel"
                        icons.sl="Transit hotel"
                        icons.slep=4
                        navigation.navigate('THPayment')}}
                        title={'Next'}
                    />
                </View>
            </View>
        </ScrollView>

    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,

    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 40,

    },
    back: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    headerHeading: {
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        lineHeight: 18,
        color: COLORS.brownText,
        paddingLeft: 15,
        lineHeight: 21

    },
    terminalgroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    typeTraveltext: {
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.muddyText,
    },
    textdark: {
        fontSize: 17,
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.brownText,
    },
    textlight: {
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.muddyText
    },
    direction: {
        flexDirection: 'row'
    },
    TextInput: {
        fontSize: 17,
        color: COLORS.brownText,
        padding: 18,
        fontFamily: FONTS.poppinsRegular,
        backgroundColor: COLORS.mainBackground,

        borderRadius: 14

    },
    icontnumber: {
        fontSize: 22,
        color: COLORS.brownText,
    },

    body: {
        paddingHorizontal: 20,
    },

    DropDown: {
        paddingTop: 10,


    },
    terminaltext: {
        fontFamily: FONTS.poppinsRegular,
        color: COLORS.muddyText,
        paddingTop: 20,

    },
    terminaltextwidth: {
        width: '47%'
    },
    Domesticpicker: {
        paddingTop: 10
    },
    flightnoRectangle: {
        width: '100%',
        borderRadius: 14,
        backgroundColor: COLORS.mainBackground,
        justifyContent: 'center',
    },
    flighttext: {
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingTop: 20,
        color: COLORS.muddyText,
        paddingBottom: 10,
    },
    passengernametext: {
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
        paddingTop: 10,
        color: COLORS.muddyText,
        paddingBottom: 10,
    },
    whiteLeftrectangle: {
        borderBottomEndRadius: 1,
        width: '50%',
        borderTopLeftRadius: 14,
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        borderColor: COLORS.greyBorderLine,
        backgroundColor: COLORS.mainBackground,
    },
    whiteLeftrectangleone: {
        borderBottomEndRadius: 1,
        width: '50%',
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
        justifyContent: 'center',
        paddingVertical: 15,
        paddingLeft: 20,
        borderColor: COLORS.greyBorderLine,
        backgroundColor: COLORS.mainBackground,
    },
    whiteRightrectangle: {
        width: '50%',
        borderTopRightRadius: 14,
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: '7.5%',
        borderColor: COLORS.greyBorderLine,
        backgroundColor: COLORS.mainBackground,
    },
    whiteimgrectangle: {
        width: '50%',
        borderBottomWidth: 0.5,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: COLORS.greyBorderLine,
        backgroundColor: COLORS.mainBackground,
    },

    whiteLeftBottomrectangle: {
        width: '50%',
        borderBottomLeftRadius: 14,
        borderRightWidth: 0.5,
        justifyContent: 'center',
        paddingVertical: 15,
        paddingLeft: 20,
        borderColor: COLORS.greyBorderLine,
        backgroundColor: COLORS.mainBackground,
    },

    whiteRightBottomrectangle: {
        borderBottomLeftRadius: 1,
        width: '50%',
        borderBottomRightRadius: 14,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderColor: COLORS.greyBorderLine,
        backgroundColor: COLORS.mainBackground,
    },
    iconRemovePicker: {
        width: 29,
        height: 29
    },
    iconAddPicker: {
        width: 29,
        height: 29
    },
    icontext: {
        fontSize: 22,
        fontFamily: FONTS.poppinsExtraBold
    },
    whiterectangepassanger: {
        backgroundColor: COLORS.white,
        borderRadius: 14,
    },
    Bottom: {
        borderRadius: 26,
        backgroundColor: '#F39569',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    Bottomtext: {
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        color: COLORS.white,

    },
    passengerdetailstext: {
        fontSize: 14,
        fontFamily: FONTS.poppinsSemiBold,
        color: COLORS.brownText,

    },
    bottombutton: {
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }

});






