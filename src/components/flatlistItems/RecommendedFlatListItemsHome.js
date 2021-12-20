/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';
import { images } from '../../../constants';

const RecommendedFlatListItemsHome = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Image source={images.offer} style={styles.imageSize} />
        </View>
    );
};

const styles = StyleSheet.create({
    imageSize: { width: 235, height: 128, marginRight: 10, resizeMode: 'cover' },
});

export default RecommendedFlatListItemsHome;
