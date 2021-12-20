/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  mainBackground: '#FDF8F5',
  creamBackground: '#F6ECE6',
  background: '#F7EDE7',
  textInputTitle: '#999999',
  white: '#FFFFFF',
  modalBackground: 'rgba(196,196,196,0.5)',
  brownText: '#5E423D',
  greyText: '#A79B98',
  lightGreyText: '#8D746E',
  greyLine: '#B19D99',
  orangeText: '#F39569',
  muddyText: '#8E7773',
  greyBorderLine: '#C8BAB5',
  lightGreenText: '#23C71C',
  redText: '#E01315',
  lightPink: '#FDEAE3',
  black: '#000000',
  cardOrange: '#FBA556'
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  paddingExtraLarge: 48,
  paddingLarge: 34,
  paddingMedium: 30,
  padding1: 28,
  padding2: 24,
  padding3: 22,
  padding4: 20,
  padding5: 18,
  padding6: 16,

  // font sizes
  largeTitle: 36,
  header: 24,
  buttonText: 22,
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  poppinsBlack: 'Poppins-Black',
  poppinsExtraBold: 'Poppins-ExtraBold',
  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsBold: 'Poppins-Bold',
  poppinsMedium: 'Poppins-Medium',
  poppinsRegular: 'Poppins-Regular',
  poppinsThin: 'Poppins-Thin',
  poppinsExtraLight: 'Poppins-ExtraLight',
  poppinsLight: 'Poppins-Light',
};

export const CornerRadius ={
  button: 26
}

export const ComponentHeights = {
  button : 55
}

const appTheme = {COLORS, SIZES, FONTS, CornerRadius, ComponentHeights};

export default appTheme;
