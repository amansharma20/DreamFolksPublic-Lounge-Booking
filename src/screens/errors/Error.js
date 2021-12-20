import React from "react";
import { View, Text, StyleSheet, Image,  TouchableOpacity} from 'react-native';
import { COLORS, FONTS, images } from "../../../constants";
import CommonButton from "../../components/CommonButton";



export default function Error(){
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Image
          source={images.error}
          style={styles.internetimg}
        />
        <Text style={styles.somthingtext}>
        Something went wrong!{'\n'} Please try again later.
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
    backgroundColor:COLORS.mainBackground,
    flex: 1,
    justifyContent: 'center'
  },
  innercontainer:{
    alignItems: 'center',
    height: '50%',
    justifyContent: 'space-between'
  },
  internetimg: {
    width:'50%',
    height: 120,
    resizeMode:'contain'
  },
  Button: {
    paddingHorizontal:72,
    borderRadius: 26,
    backgroundColor: COLORS.orangeText,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  somthingtext: {
    fontSize: 17,
    color:COLORS.brownText,
    fontFamily: FONTS.poppinsMedium
  },
  buttontext:{
    fontSize: 17,
     color:COLORS.white,
     fontFamily: FONTS.poppinsMedium,
     lineHeight: 22
  },


});

