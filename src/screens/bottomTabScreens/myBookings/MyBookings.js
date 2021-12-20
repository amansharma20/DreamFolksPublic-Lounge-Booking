/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import {COLORS, FONTS, icons} from '../../../../constants';
import BookingTopTab from '../../../navigation/topTabs/BookingTopTab';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { ScrollView } from 'react-native-gesture-handler';

export default function MyBookings() {
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);;
    }, 2000);;
  });;

  if (loading) {
    return (
      <SkeletonPlaceholder>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            alignContent: 'center',
            marginTop: Platform.select({
              ios: 80,
              android: 0,
            }),
          }}>
          <View style={{width: '100%', height: 40,marginTop: 225,}} />
        </View>
        <View style={{ paddingTop: 160}}>
          <View
            style={{
              width: '90%',
              height: 350,
              marginTop: 30,
              borderRadius: 14,
              marginLeft: 20,
            }}
          />
          </View>
          <View style={{ paddingTop: 10}}>
          <View
            style={{
              width: '90%',
              height: 350,
              marginTop: 30,
              borderRadius: 14,
              marginLeft: 20,
            }}
          />
          </View>       
      </SkeletonPlaceholder>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <View style={styles.header}>
          <View style={styles.headerInnerPart}>
            <Text style={styles.headerText}>My bookings</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            <Image source={icons.filterIcon} style={styles.filterSize} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={{width: '100%', height: '100%'}}>
          <BookingTopTab />
        </View>
      </View>

      {showModal && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setShowModal(!showModal);
          }}>
          <View style={styles.popupBackground}>
            <ScrollView>
            <View style={styles.popUpScreen}>
              <View style={styles.popupHeader}>
                <Text style={styles.filterText}>Filters</Text>
                <View>
                  <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                    <Image source={icons.closeIcon} style={styles.closeSize} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.innerPopupContainers}>
                <View style={styles.leftFilters}>
                  <View style={styles.innerPopupContainer}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: checkboxState ? '' : '',
                      }}>
                      <BouncyCheckbox
                        onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderRadius: 6, borderColor: COLORS.orangeText}}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>Lounges</Text>
                  </View>
                  <View style={styles.innerPopupContainer}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: checkboxState ? '' : '',
                      }}>
                      <BouncyCheckbox
                        onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderRadius: 6, borderColor: COLORS.orangeText}}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>Spa</Text>
                  </View>
                  <View style={styles.innerPopupContainer}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: checkboxState ? '' : '',
                      }}>
                      <BouncyCheckbox
                        onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderRadius: 6, borderColor: COLORS.orangeText}}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>
                      Food & Beverages
                    </Text>
                  </View>
                  <View style={styles.innerPopupContainer}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: checkboxState ? '' : '',
                      }}>
                      <BouncyCheckbox
                        onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderRadius: 6, borderColor: COLORS.orangeText}}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>Meet & Assist</Text>
                  </View>
                </View>

                <View>
                  <View style={styles.innerPopupContainer}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: checkboxState ? '' : '',
                      }}>
                      <BouncyCheckbox
                        onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderRadius: 6, borderColor: COLORS.orangeText}}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>
                      Airport Transport
                    </Text>
                  </View>
                  <View style={styles.innerPopupContainer}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: checkboxState ? '' : '',
                      }}>
                      <BouncyCheckbox
                        onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderRadius: 6, borderColor: COLORS.orangeText}}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>Sleeping Pods</Text>
                  </View>
                  <View style={styles.innerPopupContainer}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: checkboxState ? '' : '',
                      }}>
                      <BouncyCheckbox
                        onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderRadius: 6, borderColor: COLORS.orangeText}}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>Hotel Transit</Text>
                  </View>
                  <View style={styles.innerPopupContainer}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: checkboxState ? '' : '',
                      }}>
                      <BouncyCheckbox
                        onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderRadius: 6, borderColor: COLORS.orangeText}}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>
                      Complimentary only
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.footerContainer}>
                <View style={styles.innerFooter}>
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <View style={styles.clearIcon}>
                    <Text style={styles.clearAllText}>Clear all</Text>
                  </View>
                </TouchableOpacity>
                </View>
                <View style={styles.innerFooter}>
                <TouchableOpacity>
                  <View style={styles.applyIcon}>
                    <Text style={styles.applyText}>Apply</Text>
                  </View>
                </TouchableOpacity>
                </View>
              </View>
            </View>
            </ScrollView>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainBackground,
    flex: 1,
    // paddingHorizontal: 24,
    paddingTop: 40,
  },

  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },

  headerText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsMedium,
    fontSize: 17,
  },

  filterSize: {
    width: 20,
    height: 25,
    resizeMode: 'contain',
  },

  headerInnerPart: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  body: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  popupBackground: {
    paddingTop: '90%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  popUpScreen: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: COLORS.mainBackground,
  },

  popupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: COLORS.greyBorderLine,
    paddingBottom: 10
  },

  filterText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    color: COLORS.muddyText,
  },

  closeSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  innerPopupContainers: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  leftFilters: {
    width: '47%'
  },

  innerPopupContainer: {
    flexDirection: 'row',
    paddingTop: 25,
    width: '100%',
  },

  filterOptionText: {
    fontSize: 14,
    fontFamily: FONTS.poppinsMedium,
    color: COLORS.brownText,
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    width: '100%',
    paddingBottom: '3%'
  },
  innerFooter:{
    width: '47%'
  },
  clearIcon: {
    paddingVertical: 14,
    borderRadius: 26,
    borderColor: COLORS.orangeText,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  clearAllText: {
    fontSize: 17,
    fontFamily: FONTS.poppinsMedium,
    color: COLORS.orangeText,
    lineHeight: 24,
  },

  applyIcon: {
    paddingVertical: 14,
    borderRadius: 26,
    backgroundColor: COLORS.orangeText,
    alignItems: 'center',
    justifyContent: 'center',
  },

  applyText: {
    fontSize: 17,
    fontFamily: FONTS.poppinsMedium,
    color: COLORS.white,
    lineHeight: 24,
  },
});
