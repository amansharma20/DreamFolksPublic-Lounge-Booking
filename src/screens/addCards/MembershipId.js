import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, _ScrollView, ScrollView } from 'react-native';
import { COLORS, FONTS, } from '../../../constants';
import { useNavigation } from '@react-navigation/core';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CommonButton from '../../components/CommonButton';


export default function MembershipId() {
    const [checkboxState, setCheckboxState] = React.useState(false);
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.headingText}>
                    Membership id
                </Text>
                <TextInput
                    style={styles.input} maxLength={25}
                    keyboardType="default"
                    placeholder="DF8946395PC"
                    placeholderTextColor="#5E423D"
                />

                <Text style={styles.headingText}>
                    Enter pin
                </Text>
                <TextInput
                    style={styles.input} maxLength={25}
                    keyboardType="default"
                    placeholder="* * * * * *"
                    placeholderTextColor="#5E423D"
                    secureTextEntry={true}

                />
                <View style={styles.imageContainer}>
                    <View
                        style={{
                            alignItems: "center",
                            backgroundColor: checkboxState ? "" : "",
                        }
                        }>
                        <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                            fillColor={COLORS.orangeText}
                            iconStyle={{ borderRadius: 6, borderColor: COLORS.orangeText }}
                            size={20}

                        />
                    </View>
                    <View style={styles.termContainer}>
                        <Text style={styles.termText}>
                            I accept all
                        </Text>
                        <Text style={styles.termUnderlineText}>
                            terms
                        </Text>
                        <Text style={styles.andText}>
                            &
                        </Text>
                        <Text style={styles.termUnderlineText}>
                            conditions
                        </Text>
                    </View>
                </View>

                <View style={styles.footerTextContainer}>
                <CommonButton
          title={'Add now'}  
          />
                </View>

                <View style={styles.lastContainer}>
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.addLaterText}>
                                Add later
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.mainBackground,
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },

    backSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    headerHeading: {
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        color: COLORS.brownText,
        lineHeight: 20,
        paddingLeft: 15
    },

    headingText: {
        paddingTop: 20,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 13,
        color: COLORS.lightGreyText,
        paddingBottom: 10,
    },

    input: {
        paddingVertical: 17,
        borderRadius: 10,
        backgroundColor: COLORS.background,
        width: '100%',
        color: COLORS.brownText,
        fontSize: 17,
        paddingLeft: 18
    },

    imageContainer: {
        justifyContent: 'center',
        paddingVertical: 30,
        flexDirection: 'row',
    },

    checkboxSize: {
        width: 20,
        height: 20
    },
    termContainer: {
        flexDirection: 'row',
    },

    termText: {
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        lineHeight: 24,
        color: COLORS.muddyText
    },
    andText: {
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        lineHeight: 24,
        color: COLORS.muddyText,
        paddingLeft: 5
    },
    termUnderlineText: {
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        color: COLORS.muddyText,
        textDecorationLine: 'underline',
        lineHeight: 24,
        paddingLeft: 5
    },

    footerTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 30
    },

    footer: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    addLaterText: {
        color: COLORS.brownText,
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium,
        textDecorationLine: 'underline'
    },

    lastContainer: {
        paddingVertical: 100,

    },

})