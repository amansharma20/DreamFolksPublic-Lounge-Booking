import { useNavigation } from '@react-navigation/core';
import React,{useState} from 'react';
import Dots from 'react-native-dots-pagination';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../../constants';
import StarRating from 'react-native-star-rating';
import Carousel from 'react-native-snap-carousel';
import THImageItems from '../discoverItems/THImageItems';

const hotelImage = [
    {
        title: "Item 1",
        text: "Text 1",
        id:0,
    },
    {
        title: "Item 2",
        text: "Text 2",
        id:1,
    },
    {
        title: "Item 3",
        text: "Text 3",
        id:2
    },
]



const THItems = () => {
    const renderTHImageItem = ({ item }) => (
        <THImageItems />
    );
    //const [onStarRatingPress, rating] = useState(false);

    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    // onStarRatingPress(rating) 
    //     useState({
    //       starCount: rating
    //     });

    const [ab,setab]=useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.whiteContainer}>
            {/* <View> */}
                <Carousel
                    data={hotelImage}
                    renderItem={({ item }) => <Renderhotelcarosell item={item.id}/>}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                    inactiveSlideScale={1}
                    onSnapToItem={(index) => setab(index) }

                />
<View style={{marginTop:-30,width:'100%'}}>
                              <Dots  length={3} active={ab} 
                              
                               activeColor='white' 
                                />
                              </View>
            {/* </View> */}
                <View style={styles.innerWhiteHeader}>
                    <View>
                        <Text style={styles.hotelNameText}>
                        Golden empire hotel
                        </Text>
                        <Text style={styles.terminalText}>
                            Terminal 1, international
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('THDetails')}>
                        <View>
                            <Text style={styles.viewMoreText}>
                                View more
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.facilityIconContainer}>
                    <Image source={icons.bedIcon}
                        style={styles.facilityIconSize}
                    />
                    <Image source={icons.foodIcon}
                        style={styles.facilityIconSize}
                    />
                    <Image source={icons.poolIcon}
                        style={styles.facilityIconSize}
                    />
                    <Image source={icons.wifiIcon}
                        style={styles.facilityIconSize}
                    />
                </View>

                <View style={styles.middleWhiteContainer}>
                    <Text style={styles.terminalText}>
                        Opening hours -
                    </Text>
                    <Text style={styles.terminalText}>
                        Distance
                    </Text>
                </View>

                <View style={styles.middleWhiteContainer}>
                    <Text style={styles.closedText}>
                        Temporarily closed
                    </Text>
                    <Text style={styles.closedText}>
                        2km
                    </Text>
                </View>

                <View style={styles.reviewContainer}>
                    <View>
                        <Text style={styles.terminalText}>
                            Reviews
                        </Text>
                        <View>

                            <StarRating
                                disabled={false}
                                maxStars={5}
                                starSize={14}
                                fullStarColor={'#FFCF44'}
                                rating={4}
                                containerStyle={{ width: 90}}
                            //rating={starCount}
                            //selectedStar={(rating) => onStarRatingPress(rating)}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('THForm')}>
                        <View style={styles.bookIconConatainer}>
                            <Text style={styles.bookNowText}>
                                Book now
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default THItems;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    whiteContainer: {
        padding: 12,
        backgroundColor: COLORS.white,
        borderRadius: 14
    },

    innerWhiteHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12
    },

    hotelNameText: {
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
    },

    terminalText: {
        color: COLORS.lightGreyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
    },

    viewMoreText: {
        color: COLORS.orangeText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        textDecorationLine: 'underline'
    },

    facilityIconContainer: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-evenly',
        paddingVertical: 13
    },

    facilityIconSize: {
        width: 20,
        height: 17,
        resizeMode: 'contain'
    },

    middleWhiteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    reviewContainer: {
        paddingTop: 17,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    closedText: {
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    bookIconConatainer: {
        backgroundColor: COLORS.brownText,
        borderRadius: 21,
        width: 110,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bookNowText: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24
    },
    imageSize:{
        width: '84.5%',
        height: 140,
        borderRadius: 14,
    }
}
)
function Renderhotelcarosell(props) {
    const item=props.item;
    const [abc,setabc]=useState(true);
    console.log(item)


    return (
        <View>
            
  <Image source={images.THImage}
        style={styles.imageSize}
        />
       
                              {/* <View style={{marginTop:-30,width:'80%'}}>
                              <Dots  length={3} active={item} 
                              
                               activeColor='white' 
                                />
                              </View> */}
                                
        </View>
    )}