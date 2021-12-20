/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import CommonText from './CommonText';
import { Responsive } from '../../constants/Layout';

const CommonTextInput = ({onChange, onBlur, value, ...rest}) => {
  const {
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    error,
    label,
    style,
    inputStyle,
  } = {...rest};

  const displayLeftIcon = leftIcon !== undefined ? true : false;
  const displayRightIcon = rightIcon !== undefined ? true : false;
  const displayError = error !== undefined ? true : false;

  return (
    <View style={[textInputStyle.body, style]}>
      <View style={textInputStyle.label} onPress={onLeftIconClick}>
        <CommonText
          style={{
            fontSize: Responsive.font(14),
            color: '#000',
          }}>
          {label}
        </CommonText>
      </View>
      <View
        style={[
          textInputStyle.inputContainer,
          displayError ? textInputStyle.inputError : {},
        ]}>
        {displayLeftIcon && (
          <View style={textInputStyle.leftIcon}>{leftIcon}</View>
        )}
        <TextInput {...rest} style={[textInputStyle.input, inputStyle]} />
        {displayRightIcon && (
          <TouchableOpacity
            style={textInputStyle.rightIcon}
            onPress={onRightIconClick}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      {displayError && (
        <View style={textInputStyle.error}>
          <CommonText
            style={{
              fontSize: Responsive.font(14),
              color: 'red',
              lineHeight: Responsive.height(15.62),
            }}>
            {error.message}
          </CommonText>
        </View>
      )}
    </View>
  );
};
export const textInputStyle = StyleSheet.create({
  body: {
    height: Responsive.height(68),
    width: '100%',
    marginBottom: 2,
  },
  label: {
    height: Responsive.height(26),
    width: '100%',
    marginLeft: 2,
  },
  inputContainer: {
    height: Responsive.height(44),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 13,
  },
  leftIcon: {
    height: Responsive.height(24),
    width: Responsive.width(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    height: Responsive.height(24),
    width: Responsive.width(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: Responsive.vc(16),
    // fontWeight: 'bold',
    color: '#000000',
    marginLeft: 5
  },
  inputError: {
    // borderBottomColor: 'red',
  },
  error: {
    height: Responsive.height(16),
    width: '100%',
    marginTop: Responsive.vc(5),
  },
});
export default CommonTextInput;
