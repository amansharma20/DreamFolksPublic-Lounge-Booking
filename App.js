/* eslint-disable prettier/prettier */
import React from 'react';
import ApplicationNavigator from './src/navigation/ApplicationNavigator';
import {
  Text,
} from 'react-native';

export default function App() {
  Text.defaultProps = Text.defaultProps || {}

  Text.defaultProps.allowFontScaling = false
  return (
    <ApplicationNavigator />
  );
};

