
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { COLORS, FONTS } from '../../constants';
import { ComponentHeights, CornerRadius } from '../../constants/Theme';

export default function CommonButton(props) {
    return (
            // <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={props.onPress} 
        style={[{ width: '70%' }, props.style]}>
            <View style={styles.buttonContainer}>
                <Text style={styles.titleStyle}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
        // </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.orangeText,
        height: ComponentHeights.button,
        borderRadius: CornerRadius.button,
        paddingVertical: 17
    },
    titleStyle: {
        color: COLORS.white,
        fontSize: 17,
        fontFamily: FONTS.poppinsMedium,
        lineHeight: 22
    }
});