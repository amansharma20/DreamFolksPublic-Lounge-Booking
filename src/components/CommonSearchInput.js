/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, TextInput, TouchableOpacity,Image} from 'react-native';
import React, {useRef} from 'react';
import {textInputStyle} from './CommonTextInput';
import { icons, SIZES } from '../constants';
import { Responsive } from '../../constants/Layout';

function CommonSearchInput({...rest}) {
  const {
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    style,
    inputStyle,
    value,
  } = {...rest};
  const displayLeftIcon = leftIcon !== undefined ? true : false;
  const inputRef = useRef(null);
  const displayRightIcon = () => {
    if (value == '') {
      return false;
    } else {
      return true;
    }
  };
  return (
    <View style={[styles.body, style]}>
      <View style={[styles.inputContainer]}>
        <TextInput
          {...rest}
          style={[styles.input, inputStyle]}
          ref={inputRef}
        />
        {displayRightIcon() && (
          <TouchableOpacity style={styles.rightIcon} onPress={onRightIconClick}>
            {rightIcon}
          </TouchableOpacity>
        )}
    <Image onPress={onLeftIconClick} source={icons.search} style={{width: 22, height: 22, marginRight: 12, justifyContent: 'flex-end'}}/>

      </View>

    </View>
  );
}
export default CommonSearchInput;
const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    padding: SIZES.paddingHome  ,
    height: Responsive.height(0),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 2
  },
  inputContainer: {
    height: Responsive.height(47),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Responsive.width(12),
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    backgroundColor: '#FFFFFF',
  },
  rightIcon: {
    height: Responsive.height(24),
    width: Responsive.width(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: Responsive.font(18),
    fontWeight: '500',
    paddingLeft: 10,
    color: '#000',
    marginLeft: 6,
  },
});
