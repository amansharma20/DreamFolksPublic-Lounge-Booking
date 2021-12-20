/* eslint-disable prettier/prettier */
import {StyleSheet, Text} from 'react-native';
import React from 'react';
import { Responsive } from '../../constants/Layout';
import { COLORS } from '../../constants';

const CommonText = ({children, selectedColor, ...rest}) => {
  const {style} = {...rest};
  return (
    <Text {...rest} style={[textStyle.default, style]}>
      {children}
    </Text>
  );
};
export const textStyle = StyleSheet.create({
  default: {
    // fontFamily: 'Avenir',
    fontSize: Responsive.font(19),
    fontWeight: '500',
    lineHeight: Responsive.width(24),
    color: '#000',
    letterSpacing: Responsive.width(-0.4),
  },
  price: {
    // fontFamily: 'Avenir',
    fontSize: Responsive.font(17),
    fontWeight: 'bold',
    lineHeight: Responsive.width(20),
    // color: COLORS.appTheme,
    letterSpacing: Responsive.width(-0.4),
  },
  productCount: {
    // fontFamily: 'Avenir',
    fontSize: Responsive.font(12),
    fontWeight: '400',
    lineHeight: Responsive.width(20),
    color: 'rgba(23,23,23,0.6)',
    letterSpacing: Responsive.width(-0.4),
  },
  bodyBold: {
    // fontFamily: 'Avenir',
    fontSize: Responsive.font(14),
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
  },
  title2: {
    // fontFamily: 'Avenir',
    fontSize: Responsive.font(16),
    color: '#000',
    fontWeight: 'bold',
  },
  title3: {
    // fontFamily: 'Avenir',
    fontSize: Responsive.font(17),
    color: '#34283E',
    fontWeight: 'bold',
  },
  subText: {
    // fontFamily: 'Avenir',
    fontSize: Responsive.font(12),
    color: '#9B9B9B',
    fontWeight: 'bold',
  },
});
export default CommonText;
