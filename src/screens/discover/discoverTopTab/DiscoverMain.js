/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, 
    ScrollView, 
    Text, 
    StyleSheet, 
    Dimensions, 
    Image, 
    TouchableOpacity 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DiscoverTopTab from '../../../navigation/topTabs/DiscoverTopTab';
import { COLORS, FONTS, icons, SIZES } from '../../../../constants';

const { width: WIDTH } = Dimensions.get('window');


const DiscoverMain = props => {
// export default function DiscoverMain = props => {
    const navigation = useNavigation();
    return (
        
        <ScrollView contentContainerStyle={{ flex: 1 }} style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={styles.backSize} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    Discover at mumbai airport
                </Text>
                </View>
                <View>
                <Image source={icons.search} style={styles.searchIconSize} />
                </View>
            </View>
            <View style={{ flex: 1}}>
                <View style={styles.mainBody}>
                    <DiscoverTopTab />
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: COLORS.background,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 30,
        paddingHorizontal: 20
    },

    backSize: { 
        width: 20,
         height: 20, 
         resizeMode: 'contain' 
        },

    headerText: {
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        color: COLORS.brownText,
        lineHeight: 21,
        paddingLeft: 15
    },

    searchIconSize: { 
        width: 20, 
        height: 20, 
        resizeMode: 'contain' 
    },

    mainBody: {
        flex: 1
    },
});

export default DiscoverMain;