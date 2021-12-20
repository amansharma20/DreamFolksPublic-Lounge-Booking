/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, images, SIZES } from '../../../constants';
import { useNavigation } from '@react-navigation/core';


const CardsFlatlistItemHome = props => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainBackground}>

            <View style={styles.cardContainer}>
                <Image
                    source={images.card}
                    style={styles.cardSize}
                />

            </View>


            <View>
                <View style={styles.benefitHeadingContainer}>
                    <View>
                        <Text style={styles.headingText}>
                            Card benefits
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.headingText}>
                            Visits
                        </Text>
                    </View>

                </View>

                <View style={styles.benefitsTextContainer}>
                    <View>
                        <Text style={styles.benefitsText}>
                            Indian lounges
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.yearText}>
                            2/yr
                        </Text>
                    </View>

                </View>

                <View style={styles.benefitsTextContainer}>
                    <View>
                        <Text style={styles.benefitsText}>
                            Indian spa
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.yearText}>
                            1/yr
                        </Text>
                    </View>

                </View>

                <View style={styles.benefitsTextContainer}>
                    <View>
                        <Text style={styles.benefitsText}>
                            Global lounges
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.yearText}>
                            2/yr
                        </Text>
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainBackground: { 
        width: 235, 
        backgroundColor: COLORS.mainBackground, 
        borderRadius: 14, 
        padding: SIZES.padding6, 
        marginRight: 10 
    },
    cardContainer: { 
        alignItems: 'center', 
        flex: 1 
    },
    cardSize:{
         //width: 200, 
         height: 100, 
         resizeMode: 'contain'
    },
    benefitHeadingContainer: {
         flexDirection: 'row', 
         justifyContent: 'space-between', 
         paddingTop: 10 
    },
    headingText: { 
        color: COLORS.brownText, 
        fontSize: 14, 
        fontFamily: FONTS.poppinsMedium 
    },
    benefitsTextContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
    benefitsText: { 
        color: COLORS.lightGreyText, 
        fontSize: 14, 
        fontFamily: FONTS.poppinsRegular 
    },
    yearText: { 
        color: COLORS.brownText, 
        fontSize: 14, 
        fontFamily: FONTS.poppinsRegular
    },
});

export default CardsFlatlistItemHome;
