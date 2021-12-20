import { useNavigation } from '@react-navigation/core';
import { StyleSheet,
    View, 
    Image,
} from 'react-native';
import React from 'react';
import {images } from '../../../../constants';

export default function THImageItems() {
    const navigation = useNavigation();
  return (
    <View>
        <Image source={images.THImage}
        style={styles.imageSize}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    imageSize:{
        width: '84.5%',
        height: 140,
        borderRadius: 14
    }
})