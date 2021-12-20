import { useNavigation } from '@react-navigation/core';
import React, { useState} from 'react';
import { StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Dots from 'react-native-dots-pagination';
import { COLORS, FONTS, icons, images } from '../../../../constants';
import StarRating from 'react-native-star-rating';

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

const SleepingPodsItem = () => {
    //const [onStarRatingPress, rating] = useState(false);
    
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const [ab,setab]=useState(0)

    // onStarRatingPress(rating) 
    //     useState({
    //       starCount: rating
    //     });
    
    return (
        <View style={styles.container}>
        <View style={styles.whiteContainer}>
            {/* <Image source ={images.SleepingPodsImage}
            style={styles.imageSize}
            /> */}
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
            <View style={styles.innerWhiteHeader}>
                <View>
            <Text style={styles.hotelNameText}>
            Aviserv sleeping pods
            </Text>
            <Text style={styles.terminalText}>
            Terminal 1, international
            </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SleepingPodsDetails')}>
            <View>
                <Text style={styles.viewMoreText}>
                View more
                </Text>
            </View>
            </TouchableOpacity>
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
      <TouchableOpacity onPress={() => navigation.navigate('SleepingPodsForm')}>
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

export default SleepingPodsItem;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    whiteContainer:{
        padding: 12,
        backgroundColor: COLORS.white,
        borderRadius: 14
    },

    imageSize:{
        height: 140,
        width: '84.8%',
        borderRadius: 14
    },

    innerWhiteHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingBottom: 20
    },

    hotelNameText:{
        color: COLORS.brownText,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
    },

    terminalText:{
        color: COLORS.lightGreyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
    },

    viewMoreText:{
        color: COLORS.orangeText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        textDecorationLine: 'underline'
    },

    middleWhiteContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    reviewContainer:{
        paddingTop: 10,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingBottom: 5
    },

    closedText:{
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
    },

    bookIconConatainer:{
        backgroundColor: COLORS.brownText,
        borderRadius: 21,
        width: 110,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bookNowText:{
        color: COLORS.white,
        fontSize: 14,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24
    },   
}
)
function Renderhotelcarosell(props) {
    const item=props.item;
    const [abc,setabc]=useState(true);
    console.log(item)


    return (
        <View>
            
  <Image source={images.SleepingPodsImage}
        style={styles.imageSize}
        />
       
                              {/* <View style={{marginTop:-30,width:'80%'}}>
                              <Dots  length={3} active={item} 
                              
                               activeColor='white' 
                                />
                              </View> */}
                                
        </View>
    )}