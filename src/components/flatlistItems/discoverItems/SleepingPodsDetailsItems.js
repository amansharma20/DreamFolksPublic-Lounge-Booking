import { useNavigation } from '@react-navigation/core';
import { StyleSheet, 
    Text, 
    View, 
    Image,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, icons, images } from '../../../../constants';

export default function SleepingPodsDetailsItems() {
    const navigation = useNavigation();
  return (
    <View>
        <Image source={images.SleepingPodsImage}
        style={styles.imageSize}
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