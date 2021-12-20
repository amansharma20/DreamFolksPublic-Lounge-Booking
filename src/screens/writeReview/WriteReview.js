import React,{useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    _ScrollView,
    Image,
    ScrollView
} from 'react-native';
import { COLORS, FONTS, icons } from '../../../constants';
import { useNavigation } from '@react-navigation/core';;
import StarRating from 'react-native-star-rating';
import CommonButton from '../../components/CommonButton';

export default function WriteReview() {
    const navigation = useNavigation();
    const[i,setI]=useState('Type here')
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.back}
                        style={styles.backSize}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    Write review
                </Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.rateText}>
                    Please rate your experience
                </Text>
                <Text style={styles.hotelText}>
                    The rose hotel
                </Text>
                <Text style={styles.rateText}>
                    Are you satisfied with the service?
                </Text>
                <View style={styles.starContainer}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        starSize={24}
                        fullStarColor={'#FFCF44'}
                        rating={4}
                    //rating={starCount}
                    //selectedStar={(rating) => onStarRatingPress(rating)}
                    />
                </View>
                <View style={styles.lineContainer}>
                </View>
                <Text style={styles.tellText}>
                    Tell us what can be improved?
                </Text>
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.middleInnerContainer}>
                <TouchableOpacity onPress={() => setI('Overall service')}>
                    <View style={styles.textContainer}>
                        <Text style={styles.messageText}>
                            Overall service
                        </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setI(' Customer support')}>

                    <View style={styles.textContainer}>
                        <Text style={styles.messageText}>
                            Customer support
                        </Text>
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.middleInnerContainer}>
                <TouchableOpacity onPress={() => setI('Speed & efficiency')}>

                    <View style={styles.textContainer}>
                        <Text style={styles.messageText}>
                            Speed & efficiency
                        </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setI('Staff behaviour')}>

                    <View style={styles.textContainer}>
                        <Text style={styles.messageText}>
                            Staff behaviour
                        </Text>
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.middleInnerContainer}>
                <TouchableOpacity onPress={() => setI('Hygiene')}>

                    <View style={styles.textContainer}>
                        <Text style={styles.messageText}>
                            Hygiene
                        </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setI('Transparency')}>

                    <View style={styles.textContainer}>
                        <Text style={styles.messageText}>
                            Transparency
                        </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textInputContainer}>
                <Text style={styles.tellInputHeadingText}>
                    Tell us how can we improve…
                </Text>
                <TextInput
                    style={styles.textInputHere}
                    placeholder={i}
                    placeholderTextColor="#5E423D"
                    
                />
            </View>
            <View style={styles.footer}>
            <CommonButton onPress={() => navigation.goBack()} 
          title={'Done'}
          />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.mainBackground,
        flex: 1,
        paddingTop: 40
    },
    header: {
        flexDirection: 'row',
        paddingBottom: 30,
        paddingHorizontal: 20
    },
    backSize: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    headerText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        paddingLeft: 15,
        lineHeight: 22
    },

    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    rateText: {
        color: COLORS.lightGreyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium,
        paddingBottom: 7
    },

    hotelText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        paddingBottom: 35
    },

    starContainer: {
        width: '50%',
        paddingTop: 10,
        paddingBottom: 30,
    },

    lineContainer: {
        borderWidth: 0,
        width: '80%',
        borderBottomWidth: 1,
        borderColor: COLORS.greyBorderLine
    },

    tellText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 14,
        paddingVertical: 25
    },

    middleContainer: {
        paddingHorizontal: 40,
    },

    middleInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15
    },
    textContainer: {
        backgroundColor: COLORS.background,
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18
    },

    messageText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingTop: 45
    },

    tellInputHeadingText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingBottom: 10
    },

    textInputHere: {
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 14,
        paddingLeft: 18,
        paddingVertical: 17,
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsRegular
    },

    footer: {
        flex: 1,
        paddingVertical: 40,
        alignItems: 'center'
    },
}
)