/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { COLORS, FONTS, icons } from '../../../../constants';
import MembershipTopTab from '../../../navigation/topTabs/MembershipTopTab';

const { width: WIDTH } = Dimensions.get('window');


export default function AddNewCard() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerInnerPart}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={icons.back}
                            style={styles.backImageContainer}
                        />
                    </TouchableOpacity>
                    <Text
                        style={
                            styles.headerText}>
                        Add card
                    </Text>
                </View>
            </View>

            <View style={styles.body}>
                <View style={{ width: WIDTH, height: "100%" }}>
                    <MembershipTopTab />
                </View>

                <View style={styles.footerTextContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('BankIssuedCard')} style={{ flex: 1 }}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonTextContainer}>
                                Add card
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.mainBackground,
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Platform.select({
            ios: 10,
            android: 0
        })
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 40,
    },

    headerInnerPart: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    backImageContainer: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    body: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    imageViewContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 75
    },

    headerText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        paddingLeft: 15,
        lineHeight: 24
    },

    imageContainer: {
        height: 126,
        width: 146
    },

    lastTextContainer: {
        alignItems: 'center',
        flex: 1,
    },

    LastText: {
        color: COLORS.muddyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.orangeText,
        borderRadius: 26,
        height: 52,
        paddingHorizontal: 92
    },

    buttonTextContainer: {
        color: COLORS.white,
        fontSize: 17,
        fontFamily: FONTS.poppinsRegular,
    },

    footerTextContainer: {
        flex: 1,
    },
});
