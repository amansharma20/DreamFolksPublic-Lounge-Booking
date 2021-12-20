import { useNavigation } from '@react-navigation/core';
import { StyleSheet, 
    Text, 
    View, 
    Image,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, icons, images } from '../../../../constants';
import Dots from 'react-native-dots-pagination';

export default function LoungeDetailsItems() {
    const navigation = useNavigation();
    
  return (
    <View>
        <Image source={images.image}
        style={styles.imageSize}
        />
         <Dots length={3} active={0}
                                />
        
    </View>
    );
};

const styles = StyleSheet.create({
    imageSize:{
        width: '100%',
        height: 250
    }
})