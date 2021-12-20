import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { COLORS, FONTS, images } from "../../../constants";
import CommonButton from "../../components/CommonButton";


export default function NoInternet() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          source={images.noInternet}
          style={styles.nointernet}
        />
        <Text style={styles.text}>
          No internet, please check{'\n'}       your connection.
        </Text>
        <CommonButton onPress={() => navigation.goBack()}
          title={'Try again'}
        />
      </View>

    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    justifyContent: 'center',


  },
  body: {
    alignItems: 'center',
    //justifyContent: 'space-between'

  },
  nointernet: {
    height: 152,
    width: 170

  },
  Button: {
    borderRadius: 26,
    backgroundColor: COLORS.orangeText,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 72,


  },
  text: {
    fontSize: 17,
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsSemiBold,
    paddingVertical: 71

  },
  tryagain: {
    fontSize: 17,
    color: COLORS.white,
    fontFamily: FONTS.poppinsMedium,
    lineHeight: 22

  }


});

