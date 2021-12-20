/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import { useNavigation } from '@react-navigation/core';

const PurchaseMembershipFlatlistItemHome = props => {
    const navigation = useNavigation();
    return (
        <View style={styles.whiteMembershipContainer}>
            <View style={styles.headerConatiner}>
                <Image
                    source={icons.silverCrown}
                    style={styles.crownSize}
                />

                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>
                        Silver{"\n"}membership
                    </Text>
                    <Text style={styles.validText}>
                        Valid till- 07/22
                    </Text>
                </View>
            </View>

            <View style={styles.middleTextConatiner}>
                <View style={styles.serviceHeading}>
                    <View>
                        <Text style={styles.serviceText}>
                            Service
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.serviceText}>
                            Visits
                        </Text>
                    </View>

                </View>

                <View style={styles.servicesTextContainer}>
                    <View>
                        <Text style={styles.servicesText}>
                            Indian lounges
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.yearText}>
                            2/yr
                        </Text>
                    </View>

                </View>

                <View style={styles.servicesTextContainer}>
                    <View>
                        <Text style={styles.servicesText}>
                            Indian spa
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.yearText}>
                            1/yr
                        </Text>
                    </View>

                </View>

                <View style={styles.servicesTextContainer}>
                    <View>
                        <Text style={styles.servicesText}>
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

            <View style={styles.footer}>
                <Text style={styles.rupeeText}>
                    ₹ 5000/-
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('MyMembership')} style={styles.iconContainer}>
                    <Text style={styles.purchaseText}>
                        Purchase
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    whiteMembershipContainer: { 
        width: 235, 
        backgroundColor: COLORS.mainBackground, 
        borderRadius: 14, 
        padding: SIZES.padding6, 
        marginRight: 10,
    },
    headerConatiner: { 
        flexDirection: 'row' 
    },
    crownSize: {
         width: 70, 
         height: 70, 
         resizeMode: 'contain'
    },
    headerTextContainer: {
        paddingLeft: 10 
    },
    headerText: { 
        fontSize: 16, 
        fontFamily: FONTS.poppinsMedium, 
        color: COLORS.brownText 
    },
    validText: { 
        marginTop: 0, 
        fontSize: 14, 
        fontFamily: FONTS.poppinsRegular, 
        color: COLORS.greyText 
    },
    middleTextConatiner: { 
        paddingBottom: 4, 
        borderBottomWidth: 1,
         borderColor: COLORS.greyBorderLine 
        },
    serviceHeading: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingTop: 20 
    },
    serviceText: { 
        color: COLORS.brownText, 
        fontSize: 14, 
        fontFamily: FONTS.poppinsMedium 
    },
    servicesTextContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingTop: 0
     },
     servicesText:{ 
        color: COLORS.lightGreyText, 
        fontSize: 14, 
        fontFamily: FONTS.poppinsRegular 
        },
    yearText :{ 
        color: COLORS.brownText, 
        fontSize: 14, 
        fontFamily: FONTS.poppinsRegular 
    },
    footer: { 
        paddingVertical: 0, 
        flexDirection: 'row',
         justifyContent: 'space-between', 
         alignItems: 'center', 
         paddingTop: 10 
        },
    rupeeText: { 
        color: COLORS.brownText, 
        fontSize: 17, 
        fontFamily: FONTS.poppinsMedium 
    },
    iconContainer: { 
        borderRadius: 21, 
        backgroundColor: COLORS.brownText, 
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center', 
        justifyContent: 'center' 
},
    purchaseText: { 
        color: COLORS.white, 
        fontSize: 14, 
        fontFamily: FONTS.poppinsMedium 
    },
});

export default PurchaseMembershipFlatlistItemHome;
