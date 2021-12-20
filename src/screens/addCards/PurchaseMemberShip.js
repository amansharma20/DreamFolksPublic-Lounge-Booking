/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
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
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ScrollView } from 'react-native-gesture-handler';
import CommonButton from '../../components/CommonButton';

export default function PurchaseMembership() {
  const [checkboxState, setCheckboxState] = React.useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.back}
            style={styles.backIconView} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
        Add card
        </Text>
      </View>

      <View>
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
          <View style={{width: '47%'}}>
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

          <View style={{width: '47%'}}>
            <Text
              style={styles.headingText}>
              CVV
            </Text>
            <TextInput
              style={styles.inputInner1}
              maxLength={25}
              keyboardType="numeric"
              placeholderTextColor="#5E423D"
              placeholder="***"
              maxLength={3}
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
                            iconStyle={{ borderColor: COLORS.brownText, borderRadius:  6, borderColor: COLORS.cardOrange }}
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
          title={'Add card'}
          />
        </View>

        <View
          style={styles.OrTextContainer}>
          <Text
            style={styles.orText}>
            Or
          </Text>
        </View>

        <View style={styles.lastContainer}>
          <View style={styles.bottomButtonAlign}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PurchaseMembershipFlatList')}>
              <View style={styles.bottomButtonView}>
                <Text style={styles.bottomButtonText}>
                  Purchase Membership
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
    paddingTop: (Platform.OS === 'ios') ? 40 : 0,
    paddingHorizontal: 20,
  },

  headerText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
    lineHeight: 22,
    paddingLeft: 15
  },
  
  header: {
    flexDirection: 'row',
    paddingVertical: 40,
  },

  backIconView: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  headingText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    color: COLORS.muddyText,
    paddingBottom: 10
  },

  input: {
    height: 58,
    borderRadius: 10,
    backgroundColor: COLORS.background,
    width: '100%',
    fontSize: 17,
    paddingLeft: 18,
    color: COLORS.brownText
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 30
  },

  termContainer:{
    flexDirection: 'row',
},

termText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    lineHeight:24,
    color: COLORS.muddyText
},
andText:{
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    lineHeight:24,
    color: COLORS.muddyText,
    paddingLeft: 5
},
termUnderlineText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    color: COLORS.muddyText,
    textDecorationLine: 'underline',
    lineHeight:24,
    paddingLeft: 5
},

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.orangeText,
    borderRadius: 26,
    paddingVertical: 14,
    paddingHorizontal: 92,
  },

  addButtonText: {
    color: COLORS.white,
    fontSize: 17,
    fontFamily: FONTS.poppinsMedium,
    lineHeight: 24
  },

  OrTextContainer: {
    alignItems: 'center',
    alignContent: 'center',
  },

  orText: {
    color: COLORS.brownText,
    fontSize: 17,
    fontFamily: FONTS.poppinsMedium
  },

  footerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 30
  },

  bottomButtonAlign: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 26,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: COLORS.orangeText,
  },

  bottomButtonText: {
    fontSize: 17,
    color: COLORS.orangeText,
    fontFamily: FONTS.poppinsMedium,
    lineHeight: 24
    },

  lastContainer: {
    paddingTop: 30,
    flex: 1,
    paddingBottom: 95
  },
  inputInner1: {
    height: 58,
    borderRadius: 10,
    backgroundColor: COLORS.background,
    width: 150,
    fontSize: 17,
    paddingLeft: 18,
    color: COLORS.brownText,
    width: '100%'
  },

  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width :'100%',
  },
});
