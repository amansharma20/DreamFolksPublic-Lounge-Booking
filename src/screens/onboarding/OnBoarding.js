/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
} from 'react-native';
import CommonButton from '../../components/CommonButton';
import PagerView from 'react-native-pager-view';
import Dots from 'react-native-dots-pagination';
import { useState } from 'react';
// import MyAsyncStorage from '../../persistence/storage/MyAsyncStorage';
// import { AsyncStorageConstant } from '../../utils/constants/Theme';
import { useNavigation } from '@react-navigation/core';
import { COLORS, FONTS, icons, images } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Styles } from 'react-native-dots-pagination/styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function OnBoarding() {

    const [index, setIndex] = useState(0)
    // const imageUrl = '../../assets/illustration/dummy.jpg';

    const navigation = useNavigation();

    // useEffect(() => {
    //     return () => MyAsyncStorage.storeData(AsyncStorageConstant.isFirstLaunch, 'false');
    // })

    return (
        <View style={styles.container}>
            {/* <View style={{ flex: 4 }}> */}
            <PagerView style={{ flex: 1 }} initialPage={index} onPageSelected={(e) => {
                setIndex(e.nativeEvent.position)
            }}>
                {index == 0 ?
                    <View key="1" style={styles.onboardingView}>
                        <ImageBackground source={images.imageOnboarding}
                            style={styles.imageStyle}
                        >
                            <View style={{ alignSelf: 'flex-end', flex: 1, }}>
                            </View>
                            <View style={styles.innerTextContainer}>
                                <Text style={styles.title}>Amazing lounges for accomodation</Text>
                                <Text style={styles.subtitle}>
                                    All hosted with care for your utmost comfort.
                                </Text>
                                <View style={styles.dot}>

                                    <Dots length={3} active={index}
                                        activeColor={COLORS.orangeText}

                                    />
                                </View>

                                <View style={styles.footerIconConatiner}>
                                    <TouchableOpacity onPress={() => {
                                        icons.j = 1
                                        navigation.navigate('Homeone')
                                    }}>
                                        <Text style={styles.skipText}>
                                            Skip
                                        </Text>
                                    </TouchableOpacity>
                                    <View style={styles.nextIconContainer}>
                                        <TouchableOpacity onPress={(PagerView) => setIndex(1)}>
                                            <Text style={styles.nextText}>
                                                Next
                                            </Text>
                                        </TouchableOpacity>
                                        <Image source={icons.arrowRight}
                                            style={styles.arrowSize}
                                        />
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View> :
                    index == 1 ?
                        <View key="2" style={styles.onboardingView}>
                            <ImageBackground source={images.imageOnboarding}
                                style={styles.imageStyle}
                            >
                                <View style={{ alignSelf: 'flex-end', flex: 1, }}>
                                </View>
                                <View style={styles.innerTextContainer}>
                                    <Text style={styles.title}>Air travels made simple & convenient</Text>
                                    <Text style={styles.subtitle}>
                                        Easily manage your bookings and{"\n"}earn amazing rewards.
                                    </Text>
                                    <View style={styles.dot}>
                                        <Dots length={3} active={index}
                                            activeColor={COLORS.orangeText}
                                        />
                                    </View>
                                    <View style={styles.footerIconConatiner}>
                                        <TouchableOpacity onPress={() => {
                                            icons.j = 1
                                            navigation.navigate('Homeone')
                                        }}>
                                            <Text style={styles.skipText}>
                                                Skip
                                            </Text>
                                        </TouchableOpacity>
                                        <View style={styles.nextIconContainer}>
                                            <TouchableOpacity onPress={(PagerView) => setIndex(2)}>
                                                <Text style={styles.nextText}>
                                                    Next
                                                </Text>
                                            </TouchableOpacity>
                                            <Image source={icons.arrowRight}
                                                style={styles.arrowSize}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        :
                        <View key="3" style={styles.onboardingView}>
                            <ImageBackground source={images.imageOnboarding}
                                style={styles.imageStyle}
                            >
                                <View style={{ alignSelf: 'flex-end', flex: 1, }}>
                                </View>
                                <View style={styles.innerTextContainer}>
                                    <Text style={styles.title}>Book everything{"\n"}in a snap</Text>
                                    <Text style={styles.subtitle}>
                                        Simply browse through our exceptional airport facilities all in one place.
                                    </Text>
                                    <View style={styles.dot}>
                                        <Dots length={3} active={index}
                                            activeColor={COLORS.orangeText}
                                        />
                                    </View>
                                    <View style={styles.footerIconStarrtedContainer}>
                                        <TouchableOpacity onPress={() => {
                                            icons.j = 2
                                            navigation.navigate('LoginScreen')
                                        }}>
                                            <View style={styles.buttonContainer}>
                                            <CommonButton
                                                title={'Get started'}
                                            />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                }
            </PagerView>

            {/* </View> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    innerTextContainer: {
        paddingHorizontal: 25,
    },
    title: {
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 30,
        marginBottom: -20,
        color: COLORS.white,
    },
    subtitle: {
        fontFamily: FONTS.poppinsRegular,
        fontSize: 17,
        color: COLORS.white,
        marginTop: 25,
        opacity: 0.7
    },
    footerIconConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 70,
        paddingBottom: 20
    },
    skipText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 17
    },
    nextIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        lineHeight: 18
    },
    nextText: {
        color: COLORS.orangeText,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 17,
        paddingRight: 10
    },
    dot: {
        marginRight: 'auto',
        marginBottom: -15,
        marginLeft: -10

    },
    arrowSize: {
        width: 18,
        height: 14,
        resizeMode: 'contain',
        tintColor: COLORS.orangeText

    },
    onboardingView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    footerIconStarrtedContainer: {
        paddingTop: 40,
        paddingBottom: 30,
    },
    buttonContainer:{
        alignItems: 'center',
        justifyContent: 'center'
    }
})
