/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { images } from '../../../constants';

const RecommendedFlatlistItem = props => {
    return (
        <View style={styles.container}>
            <Image source={images.offer} style={styles.imageSize} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    imageSize: { width: 230, height: 128, marginLeft: 20 },
});

export default RecommendedFlatlistItem;
