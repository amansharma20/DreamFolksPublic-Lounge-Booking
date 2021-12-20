/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { COLORS, FONTS, icons } from '../../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import CommonButton from '../../components/CommonButton';

export default function BankIssuedCard() {
  const [checkboxState, setCheckboxState] = React.useState(false);
  const navigation = useNavigation();
  return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text
            style={styles.headingText}>
            Name on the card
          </Text>
          <TextInput
            style={styles.input}
            maxLength={25}
            keyboardType="default"
            placeholderTextColor="#5E423D"
            placeholder="Naman Rathi"
            maxLength={30}
          />

          <View style={{ paddingVertical: 20 }}>
            <Text
              style={styles.headingText}>
              Card no.
            </Text>
            <TextInput
              style={styles.input}
              maxLength={25}
              keyboardType="numeric"
              placeholderTextColor="#5E423D"
              placeholder="2738 8294 8294 9204"
              maxLength={16}
            />
          </View>

          <View style={styles.container3}>
            <View style={styles.dateCvvContainer}>
              <Text
                style={styles.headingText}>
                Exp date
              </Text>
              <TextInput
                style={styles.inputInner1}
                maxLength={25}
                keyboardType="default"
                placeholderTextColor="#5E423D"
                placeholder="MM/YY"
              />
            </View>

            <View style={styles.dateCvvContainer}>
              <Text
                style={styles.headingText}>
                CVV
              </Text>
              <TextInput
                style={styles.inputInner1}
                maxLength={25}
                keyboardType="numeric"
                placeholderTextColor="#5E423D"
                maxLength={3}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={styles.imageContainer}>
            <View
              style={{
                alignItems: "center",
                backgroundColor: checkboxState ? "" : "",
              }
              }>
              <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                fillColor={COLORS.orangeText}
                iconStyle={{borderRadius:  6, borderColor: COLORS.cardOrange}}
                size={20}
              />
            </View>
            <View style={styles.termContainer}>
                    <Text style={styles.termText}>
                        I accept all 
                    </Text>
                    <Text style={styles.termUnderlineText}>
                    terms
                    </Text>
                    <Text style={styles.andText}>
                    &
                    </Text>
                    <Text style={styles.termUnderlineText}>
                    conditions
                    </Text>
                    </View>
          </View>

          <View style={styles.footerTextContainer}>
          <CommonButton onPress={() => navigation.navigate('MyCards')} 
          title={'Add now'} 
          />
          </View>
          
          <View style={styles.lastContainer}>
            <View style={styles.footer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.addLaterText}>
                  Add later
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainBackground,
    flex: 1,
    paddingTop:Platform.select({
      ios:10,
      android:0
    }),
    paddingHorizontal: 20,
  },
  innerContainer: {
    paddingTop: 50,
    backgroundColor: COLORS.mainBackground
  },
  headingText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 12,
    color: COLORS.lightGreyText,
    paddingBottom: 10,
  },

  input: {
    paddingVertical: 17,
    borderRadius: 10,
    backgroundColor: COLORS.background,
    width: '100%',
    fontSize: 17,
    paddingLeft: 18,
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsRegular,
    lineHeight: 24,
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 30
  },

  checkBoxView: {
    width: 20,
    height: 20
  },
  termContainer:{
    flexDirection: 'row'
},

  termText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    color: COLORS.muddyText
},
andText:{
  fontFamily: FONTS.poppinsRegular,
  fontSize: 14,
  color: COLORS.muddyText,
  paddingLeft: 5
},
termUnderlineText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    color: COLORS.muddyText,
    textDecorationLine: 'underline',
    paddingLeft: 5
},


  footerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 10
  },
  lastContainer: {
    paddingVertical: 50,
  },
  inputInner1: {
    borderRadius: 10,
    backgroundColor: COLORS.background,
    fontSize: 17,
    paddingLeft: 18,
    paddingVertical: 17,
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsRegular,
    lineHeight: 22
  },

  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateCvvContainer: {
    width: '47%'
  },
  footer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addLaterText: {
    color: COLORS.brownText,
    textDecorationLine: 'underline',
    fontSize: 14,
    fontFamily: FONTS.poppinsMedium
  },
});
