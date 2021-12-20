/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, images } from '../../../../constants';

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{}} style={{flex: 1, backgroundColor: 'white'}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          
            <Text style={styles.headerText}>My profile</Text>
          <View>
            {
              icons.j==1?
              null:
          
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
              <View>
                <Text style={styles.editText}>Edit profile</Text>
              </View>
            </TouchableOpacity>
}
          </View>
        </View>

        <View style={styles.container2}>
          {
            icons.j==1?
            <View>
            <Image
              source={images.dominos}
              style={styles.pic}
            />
          </View>
          :
          <View>
          <Image
            source={images.profilePic}
            style={styles.pic}
          />
        </View>
          }
          
          <View style={{ marginLeft: 33 }}>
            {
              icons.j==1?
              <View>
              <Text style={styles.nameText}>Guest User</Text>
            </View>
            :
            <View>
              <Text style={styles.nameText}>Naman Rathi</Text>
            </View>
            }
          

            <View>
              <View>
                {
                  icons.j==1?
                  null
                  :
                  <View>
                  <Text style={styles.infoText}>+91 01234 56789</Text>
                  <Text style={styles.infoText}>xyz@gmail.com</Text>
                  </View>
                }
                {/* <Text style={styles.infoText}>+91 01234 56789</Text>
                <Text style={styles.infoText}>xyz@gmail.com</Text> */}
              </View>
            </View>
          </View>
        </View>
       
          <View style={styles.upgradeGapView}>
          <View style={styles.upgradeWhitecontainer}>
            <View style={styles.upgradeContainer}>
              <View style={styles.innerUpgradeContainer}>
                <Image
                  source={icons.silverCrown}
                  style={styles.silverPic}
                />
                <Text style={styles.silverText}>Silver membership</Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MyMembership')}>
                  <Text style={styles.editText}>Upgrade</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        
        {/* <View style={styles.upgradeGapView}>
          <View style={styles.upgradeWhitecontainer}>
            <View style={styles.upgradeContainer}>
              <View style={styles.innerUpgradeContainer}>
                <Image
                  source={icons.silverCrown}
                  style={styles.silverPic}
                />
                <Text style={styles.silverText}>Silver membership</Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MyMembership')}>
                  <Text style={styles.editText}>Upgrade</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View> */}
       
        <View style={styles.lastContainer}>
          <View style={styles.innerLastContainer}>
            {
               icons.j==1?

            
            <TouchableOpacity onPress={() => {
              icons.j = 2
              navigation.navigate('AddCard')}}>
              <View style={styles.imageAndText}>
                <View>
                  <Image
                    source={icons.cards}
                    style={styles.lastImages}
                  />
                </View>
                <View style={styles.textPad}>
                  <Text style={styles.lastTexts}>My cards</Text>
                </View>
              </View>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() =>{
              icons.kl=2
              navigation.navigate('ViewCards')}
            }>
            <View style={styles.imageAndText}>
              <View>
                <Image
                  source={icons.cards}
                  style={styles.lastImages}
                />
              </View>
              <View style={styles.textPad}>
                <Text style={styles.lastTexts}>My cards</Text>
              </View>
            </View>
          </TouchableOpacity>
}
{
  icons.j==1?
  <TouchableOpacity onPress={() => {
    icons.j = 2
    navigation.navigate('PurchaseMembershipFlatList')}}>
    <View style={styles.imageAndText}>
      <View>
        <Image
          source={icons.cards}
          style={styles.lastImages}
        />
      </View>
      <View style={styles.textPad}>
        <Text style={styles.lastTexts}>My membership</Text>
      </View>
    </View>
  </TouchableOpacity>
  :
            <TouchableOpacity
              onPress={() => navigation.navigate('MyMembership')}>
              <View style={styles.imageAndText}>
                <View>
                  <Image
                    source={icons.membership}
                    style={styles.lastImages}
                  />
                </View>
                <View style={styles.textPad}>
                  <Text style={styles.lastTexts}>My membership</Text>
                </View>
              </View>
            </TouchableOpacity>
}
{icons.j==1?
  <TouchableOpacity onPress={() => {
              icons.j = 2
              navigation.navigate('MyAccessCode')}}>
              <View style={styles.imageAndText}>
                <View>
                  <Image
                    source={icons.cards}
                    style={styles.lastImages}
                  />
                </View>
                <View style={styles.textPad}>
                  <Text style={styles.lastTexts}>My access codes</Text>
                </View>
              </View>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => navigation.navigate('MyAccessCode')}>
              <View style={styles.imageAndText}>
                <View>
                  <Image
                    source={icons.accessCodes}
                    style={styles.lastImages}
                  />
                </View>
                <View style={styles.textPad}>
                  <Text style={styles.lastTexts}>My access codes</Text>
                </View>
              </View>
            </TouchableOpacity>
}
            <TouchableOpacity
              onPress={() => navigation.navigate('TermsAndCondition')}>
              <View style={styles.imageAndText}>
                <View>
                  <Image
                    source={icons.terms}
                    style={styles.lastImages}
                  />
                </View>
                <View style={styles.textPad}>
                  <Text style={styles.lastTexts}>Terms & conditions</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Faqs')}>
              <View style={styles.imageAndText}>
                <View>
                  <Image
                    source={icons.faq}
                    style={styles.lastImages}
                  />
                </View>
                <View style={styles.textPad}>
                  <Text style={styles.lastTexts}>FAQ’s</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <View style={styles.imageAndText}>
                <View>
                  <Image
                    source={icons.logout}
                    style={styles.lastImages}
                  />
                </View>
                {
                  icons.j==1?
                  <View style={styles.textPad}>
                  <Text style={styles.lastTexts}>LogOut</Text>
                </View>
                :
                <View style={styles.textPad}>
                <Text style={styles.lastTexts}>LogOut</Text>
              </View>

                }
               
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    paddingTop: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: (Platform.OS === 'ios') ? 40 : 0
  },

  backText: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  editText: {
    color: COLORS.orangeText,
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: FONTS.poppinsRegular,
    lineHeight: 20,
  },

  pic: {
    width: 85,
    height: 85,
  },

  nameText: {
    fontSize: 20,
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsSemiBold,
  },

  infoText: {
    fontSize: 14,
    color: COLORS.greyText,
    fontFamily: FONTS.poppinsRegular,
  },

  silverPic: {
    width: 31,
    height: 31,
    resizeMode: 'contain',
  },

  silverText: {
    fontSize: 14,
    color: COLORS.brownText,
    padding: 9,
    fontFamily: FONTS.poppinsRegular,
    lineHeight: 20,
  },

  headerText: {
    color: COLORS.brownText,
    fontSize: 17,
    fontFamily: FONTS.poppinsMedium,
    lineHeight: 24
  },


  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 35,
    paddingBottom: 13
  },

  upgradeGapView: {
    paddingVertical: 28
  },

  upgradeWhitecontainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 30,
    elevation: 5
  },

  upgradeContainer: {
    paddingRight: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  innerUpgradeContainer: {
    flexDirection: 'row',
    padding: 7,
    alignItems: 'center'
  },

  lastContainer: {
    flex: 1,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    elevation: 1,
    backgroundColor: 'white'
    //paddingBottom: 65
  },

  innerLastContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    //backgroundColor: COLORS.white,
    //flex: 1
  },

  imageAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  lastTexts: {
    fontSize: 17,
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    lineHeight: 22,
  },

  lastImages: {
    width: 20,
    height: 17,
    resizeMode: 'contain',
  },

  textPad: {
    padding: 20,
  },
});
