/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS } from '../../../constants';

const YourBenefitsFlatlistItemsHome = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.yourBenefitsDetailsText}>
                Lounges
            </Text>
            <Text style={[styles.yourBenefitsDetailsText, { fontFamily: FONTS.poppinsBold }]}>
                2/yr
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '40%' ,
    },
    yourBenefitsDetailsText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        paddingVertical: 3
    },
});

export default YourBenefitsFlatlistItemsHome;
