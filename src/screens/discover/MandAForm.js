import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../constants';
import DropDownPicker from 'react-native-dropdown-picker';
import CommonButton from '../../components/CommonButton';

export default function MandAForm() {

    const navigation = useNavigation();
    const CONTENT = [
        {
            id: '42',
            categoryName: 'Mumbai',
            subCategory: [
                {
                    id: '1',
                    name:
                        "Delhi",
                },

            ],
        }
    ]
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

    function handleItemClick({ index }) {
        console.log(index);
    };

    function handleInnerItemClick({ innerIndex, item, itemIndex }) {
        console.log(innerIndex);
    };

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

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.back}
                            style={styles.backSize}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                        Mumbai airport
                    </Text>
                </View>
                <ImageBackground imageStyle={{borderRadius: 14}} 
                source={images.platinumMandAImage}
                style={styles.cutImageSize}>
                    <Text style={styles.meetHeadingText}>
                        Platinum meet & assist
                    </Text>
                    <Text style={styles.arrivalText}>
                        Arrival, Domestic
                    </Text>
                    </ImageBackground>
                <Text style={styles.headingText}>
                    City (service required at)*
                </Text>

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{
                        borderColor: COLORS.mainBackground,
                        height: 65,
                        paddingLeft: 18,
                        backgroundColor: COLORS.mainBackground
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
                                borderColor: COLORS.mainBackground,
                                height: 65,
                                paddingLeft: 18,
                                backgroundColor: COLORS.mainBackground
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
                                borderColor: COLORS.mainBackground,
                                backgroundColor: COLORS.mainBackground,
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
                    <View style={styles.halfInputContainer}>
                        <Text style={styles.flightHeadingText}>
                            Flight no.*
                        </Text>
                        <TextInput
                            style={styles.input}
                            maxLength={16}
                            keyboardType="default"
                            placeholderTextColor={COLORS.brownText}
                            placeholder="6E 8246"
                        />
                    </View>
                    <View style={styles.halfInputContainer}>
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

                <View style={styles.inputContainer}>
                    <View style={styles.halfInputContainer}>
                        <Text style={styles.flightHeadingText}>
                            Date*
                        </Text>
                        <TextInput
                            style={styles.input}
                            maxLength={16}
                            keyboardType="default"
                            placeholderTextColor={COLORS.brownText}
                            placeholder="03 - 07 - 2021"
                        />
                    </View>
                    <View style={styles.halfInputContainer}>
                        <Text style={styles.flightHeadingText}>
                            Time*
                        </Text>
                        <TextInput
                            style={styles.input}
                            maxLength={16}
                            keyboardType="default"
                            placeholderTextColor={COLORS.brownText}
                            placeholder="10:00 AM"
                        />
                    </View>
                </View>

                <Text style={styles.headingText}>
                    Pax details
                </Text>
                <View style={styles.paxDetailsContainer}>
                    <View style={styles.memberDetailContainer}>
                        <Text style={styles.adultText}>
                            Adults
                        </Text>
                        <View style={styles.innerAdultContainer}>
                            <TouchableOpacity onPress={decrement} >
                                <Image source={icons.iconRemovePicker}
                                    style={styles.addRemoveIconSize}
                                />
                            </TouchableOpacity  >
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

                <Text style={styles.passengerDetailsText}>
                    Passenger details
                </Text>
                <Text style={styles.nameText}>
                    Passenger name*
                </Text>

                <TextInput
                    style={styles.inputPassengerDetails}
                    maxLength={25}
                    keyboardType="default"
                    placeholderTextColor={COLORS.brownText}
                    placeholder="Naman Rathi"
                />

                <Text style={styles.contactHeadingText}>
                    Contact number*
                </Text>
                <TextInput
                    style={styles.inputPassengerDetails}
                    maxLength={10}
                    keyboardType="numeric"
                    placeholderTextColor={COLORS.brownText}
                    placeholder="+91 01234 56789"
                />

                <Text style={styles.contactHeadingText}>
                    Email ID*
                </Text>
                <TextInput
                    style={styles.inputPassengerDetails}
                    maxLength={10}
                    keyboardType="email-address"
                    placeholderTextColor={COLORS.brownText}
                    placeholder="xyz@gmail.com"
                />

                <Text style={styles.contactHeadingText}>
                    *Note/Special request
                </Text>
                <TextInput
                    style={styles.inputPassengerDetails}
                    maxLength={10}
                    keyboardType="email-address"
                    placeholderTextColor={COLORS.brownText}
                    placeholder="Type here"
                />

                <View style={styles.footer}>
                    <CommonButton onPress={() => navigation.navigate('MandAPayment')}
                        title={'Next'}
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

    innerContainer: {
        paddingHorizontal: 20,
        paddingTop: 40,
    },

    header: {
        flexDirection: 'row',
        paddingBottom: 30
    },

    backSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    headerText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 22,
        paddingLeft: 15
    },
    
    cutImageSize: {
        resizeMode: 'contain',
        paddingVertical: 14,
        paddingLeft: 30,
        marginBottom: 20,
    },

    meetHeadingText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 20
    },

    arrivalText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14
    },

    headingText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingTop: 20,
        paddingBottom: 10
    },

    terminalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    terminalInnerContainer: {
        width: '47%',
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    halfInputContainer: {
        width: '47%',
    },

    flightHeadingText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingBottom: 10
    },

    input: {
        paddingVertical: 17,
        borderRadius: 14,
        backgroundColor: COLORS.mainBackground,
        width: '100%',
        fontSize: 17,
        paddingLeft: 18,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        lineHeight: 24,
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
        alignItems: 'center',
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
        lineHeight: 24
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
        paddingVertical: 10,
        paddingHorizontal: 17,
        alignItems: 'center'
    },

    passengerDetailsText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 14,
        paddingTop: 20
    },

    nameText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingVertical: 10,
    },

    inputPassengerDetails: {
        borderRadius: 14,
        backgroundColor: COLORS.mainBackground,
        width: '100%',
        fontSize: 17,
        paddingHorizontal: 18,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        lineHeight: 24,
        paddingVertical: 17
    },

    contactHeadingText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingTop: 20,
        paddingBottom: 10
    },

    footer: {
        flex: 1,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconContainer: {
        backgroundColor: COLORS.orangeText,
        borderRadius: 26,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        lineHeight: 24
    }


}
)