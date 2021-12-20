import React, { useState } from 'react';
import { COLORS, FONTS, icons, images } from '../../../constants/';

import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
const VegNon = [
    {
        id: 'veg', name: 'Veg Biryani Combo', desc: '1 veg Biryani+1 veg kabab', img: 'images.foodImage'
    },
    {
        id: 'nonveg', name: 'Veg Biryani Combo', desc: '1 veg Biryani+1 veg kabab', img: 'images.foodImage'
    },
    {
        id: 'nonveg', name: 'Veg Biryani Combo', desc: '1 veg Biryani+1 veg kabab', img: 'images.foodImage'
    },
]
const MenuCardFandB = () => {

    return (
        <View style={styles.whiteContainer}>
            <FlatList
                data={VegNon}
                renderItem={({ item }) => <VegRender item={item}/> }/>
        </View>
    );
}
const styles = StyleSheet.create({
    whiteContainer: {
        padding: 12,
        backgroundColor: COLORS.background,
        borderRadius: 14
    },
    locationIconSize: {
        width: 18,
        height: 18,
        marginLeft:10,
        
        resizeMode: 'contain',
        paddingLeft: 8
    },
    headerTextt: {
        fontSize: 14,
        color: COLORS.brownText,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 24,
        paddingLeft:10,

        paddingTop: 5,
    },
    bottomtext: {
        fontSize: 14,
        color: COLORS.muddyText,
        fontFamily: FONTS.poppinsRegular,
        paddingLeft:10,
        paddingTop: 5,
        paddingBottom: 5
    },
    buttonViewContainer:{
        paddingVertical: 30,
        //paddingHorizontal: 71,
        marginLeft: 'auto',
        position: 'absolute',
        elevation:5,
        bottom: -25,
        justifyContent: 'center'
    },

    buttoncontainer: {
        backgroundColor: COLORS.white,
        borderRadius: 26,
        height: 40,
        width: 110,
        alignSelf: 'center',
        elevation:5,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingRight:5,
        borderWidth: 1,
        
        borderColor: COLORS.white
    },
    buttonTextContainer: {
        fontFamily: FONTS.poppinsMedium,
        fontSize: 15,
        color: COLORS.orangeText,
        alignSelf:'center',
        textDecorationLine: 'underline'
    }

});


function VegRender(props) {
    const item=props.item;
    const [abc,setabc]=useState(true);
    const[i,setI]=useState(1);
    const increment=()=>{
       setI(i+1);
    }
    const decrement=()=>{
        i<2?
        setI(1):
        setI(i-1);
     }
    return (
        <View >
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: 10 }}>
                    {item.id == 'veg' ? <Image source={icons.vegicon}
                        style={styles.locationIconSize}
                    /> : <Image source={icons.nonveg}
                        style={styles.locationIconSize}
                    />}
                    <Text style={styles.headerTextt}>{item.name}</Text>
                    <Text style={styles.bottomtext}>{item.desc}</Text>
                </View>
                <View style={{ marginLeft: 'auto', marginEnd: 10 }}>
                    <Image style={{marginTop:5,marginLeft:5, height: 80, width: 100, borderRadius: 20 }} source={images.foodImage} />

 
                    {abc == true ?
                        <>
                            <View
                                style={styles.buttonViewContainer}
                            >
                                <TouchableOpacity onPress={() => setabc(false)}>
                                    <View style={styles.buttoncontainer}
                                    >
                                        <Text
                                            style={styles.buttonTextContainer}>

                                            Add
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </>

                        :

                        <>
                        <View style={styles.buttonViewContainer}>
                            <View style={styles.buttoncontainer}>
                                <TouchableOpacity
                                    onPress={decrement}
                                    >
                                   <Image style={{ justifyContent: "center",
                                    alignItems: "center",width:30,height:30,alignSelf:'center'}} source={icons.iconRemovePicker}/>
                                </TouchableOpacity>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignSelf:'center',
                                    backgroundColor: COLORS.white,
                                    width: 30,
                                    paddingBottom:10
                                }}>
                                    <Text >{i}</Text>
                                </View>
                                <TouchableOpacity
                                   
                                    onPress={increment}
                                >
                                    <Image style={{ justifyContent: "center",
                                    alignItems: "center",width:30,height:30,alignSelf:'center'}}source={icons.iconAddPicker}/>
                                </TouchableOpacity>

                            </View>
                            </View>

                        </>




                    }






                </View>

            </View>


            <View style={{
                borderBottomColor: COLORS.greyBorderLine,
                borderBottomWidth: 1,
            }} />
        </View>
    );
};



export default MenuCardFandB