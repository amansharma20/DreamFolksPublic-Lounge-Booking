import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView
} from 'react-native';
import { COLORS, FONTS, images, icons } from '../../../constants';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import FandBItems from '../../components/flatlistItems/discoverItems/FandBItems';


const DATA = [
  {
    id: '1',
    title: 'First Item',

  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',

  },
  {
    id: '4',
    title: 'Fourth Item',
  },

];


export default function FandB() {
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [showModal, setShowModal] = useState(false);

  const renderItem = ({ item }) => (
    <FandBItems />
  );
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: checkboxState ? "" : "",
            }
            }>
            <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
              fillColor={COLORS.orangeText}
              iconStyle={{ borderColor: COLORS.brownText, borderRadius: 6 }}
              size={20}
            />
          </View>

          <Text style={styles.complimentaryText}>
            Complimentary only
          </Text>
        </View>

        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
          <View style={styles.sortFilterContainer}>
            <Text style={styles.complimentaryText}>
              Sort by
            </Text>
            <Image source={icons.downImg}
              style={styles.downImageSize} />
          </View>
        </TouchableOpacity>

      </View>
<ScrollView>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 50}}
      />

      {showModal &&
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setShowModal(!showModal);
          }}
        >
          <View style={styles.popupBackground}>
            <ScrollView style={styles.popUpScreen}>
              <View style={styles.popupHeader}>
                <Text style={styles.filterText}>
                  Sort by
                </Text>
                <View>
                <TouchableOpacity  onPress={() => setShowModal(false)}>
                  <Image source={icons.closeIcon}
                    style={styles.closeSize}
                  />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.sortOptionText}>
                Popularity
              </Text>
              <Text style={styles.sortOptionText}>
                Discount
              </Text>
              <Text style={styles.sortOptionText}>
                Customer ratings
              </Text>
              <Text style={styles.sortOptionText}>
                Price - high to low
              </Text>
              <Text style={styles.sortOptionText}>
                Price - low to high
              </Text>
              <View style={styles.fakeView}>
              </View>

              <View style={styles.filterContainer}>
                <Text style={styles.filterText}>
                  Filters
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>

                <View style={{ width: '50%' }}>
                  <View style={styles.filterElementsContainer}>
                    <View
                      style={{
                        alignItems: "center",
                        backgroundColor: checkboxState ? "" : "",
                      }
                      }>
                      <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{borderColor: COLORS.orangeText, borderRadius: 6 }}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>
                      Disabled access
                    </Text>
                  </View>

                  <View style={styles.filterElementsContainer}>
                    <View
                      style={{
                        alignItems: "center",
                        backgroundColor: checkboxState ? "" : "",
                      }
                      }>
                      <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderColor: COLORS.orangeText, borderRadius: 6 }}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>
                      Snacks
                    </Text>
                  </View>

                  <View style={styles.filterElementsContainer}>
                    <View
                      style={{
                        alignItems: "center",
                        backgroundColor: checkboxState ? "" : "",
                      }
                      }>
                      <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderColor: COLORS.orangeText, borderRadius: 6 }}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>
                      Flight monitor
                    </Text>
                  </View>

                  <View style={styles.filterElementsContainer}>
                    <View
                      style={{
                        alignItems: "center",
                        backgroundColor: checkboxState ? "" : "",
                      }
                      }>
                      <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderColor: COLORS.orangeText, borderRadius: 6  }}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>
                      Non-alcoholic {"\n"} drinks
                    </Text>
                  </View>
                </View>
                <View style={{ width: '50%' }}>
                  <View style={styles.filterElementsContainer}>
                    <View
                      style={{
                        alignItems: "center",
                        backgroundColor: checkboxState ? "" : "",
                      }
                      }>
                      <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderColor: COLORS.orangeText, borderRadius: 6  }}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>
                      Television
                    </Text>
                  </View>

                  <View style={styles.filterElementsContainer}>
                    <View
                      style={{
                        alignItems: "center",
                        backgroundColor: checkboxState ? "" : "",
                      }
                      }>
                      <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderColor: COLORS.orangeText, borderRadius: 6  }}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>
                      Vegetarian
                    </Text>
                  </View>

                  <View style={styles.filterElementsContainer}>
                    <View
                      style={{
                        alignItems: "center",
                        backgroundColor: checkboxState ? "" : "",
                      }
                      }>
                      <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderColor: COLORS.orangeText, borderRadius: 6  }}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>
                      Meal (hot/cold)
                    </Text>
                  </View>

                  <View style={styles.filterElementsContainer}>
                    <View
                      style={{
                        alignItems: "center",
                        backgroundColor: checkboxState ? "" : "",
                      }
                      }>
                      <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)}
                        fillColor={COLORS.orangeText}
                        iconStyle={{ borderColor: COLORS.orangeText, borderRadius: 6  }}
                        size={20}
                      />
                    </View>
                    <Text style={styles.filterOptionText}>
                      News paper/ {"\n"} magazines
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.footerContainer}>
              <View style={styles.innerFooter}>
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <View style={styles.clearAllIcon}>
                    <Text style={styles.clearAllText}>
                      Clear all
                    </Text>
                  </View>
                </TouchableOpacity>
                </View>

                <View style={styles.innerFooter}>
                <TouchableOpacity>
                  <View style={styles.applyIcon}>
                    <Text style={styles.applyIconText}>
                      Apply
                    </Text>
                  </View>
                </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
      }
 <View>
    <Text style={styles.complimentaryTextone}>
          Services
          </Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:10}}>
      <Image source={images.dominos}
      style={{height:63,width:63,marginLeft:10}}/>
      <Image source={images.dominos}
      style={{height:63,width:63,marginLeft:10}}/>
      <Image source={images.dominos}
      style={{height:63,width:63,marginLeft:10}}/>
       <Image source={images.dominos}
      style={{height:63,width:63,marginLeft:10}}/>
      
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:10,marginBottom:20}}>
    <Text style={{color:COLORS.muddyText,fontSize:14,marginLeft:10}}>
            Dominos
          </Text>
          <Text style={{color:COLORS.muddyText,fontSize:14,marginLeft:10}}>
            Dominos
          </Text>
          <Text style={{color:COLORS.muddyText,fontSize:14,marginLeft:10}}>
            Dominos
          </Text>
          <Text style={{color:COLORS.muddyText,fontSize:14,marginLeft:10}}>
            Dominos
          </Text>
          
      </View>
    </View>
    </ScrollView>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  innerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  sortFilterContainer: {
    width: 130,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    justifyContent: 'space-evenly',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  complimentaryText: {
    color: COLORS.muddyText,
    fontSize: 14,
    fontFamily: FONTS.poppinsRegular,
  },
  complimentaryTextone: {
    color: COLORS.brownText,
    fontSize: 14,
    paddingVertical:20,
    paddingHorizontal:20,
    marginTop:10,
    fontFamily: FONTS.poppinsRegular,
  },
  downImageSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },

  popupBackground: {
    paddingTop: '10%',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },

  popUpScreen: {
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: COLORS.mainBackground
  },

  popupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: COLORS.greyBorderLine,
    paddingTop: 30

  },

  filterText: {
    fontFamily: FONTS.poppinsRegular,
    fontSize: 14,
    color: COLORS.muddyText
  },

  closeSize: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },

  sortOptionText: {
    color: COLORS.brownText,
    fontFamily: FONTS.poppinsRegular,
    fontSize: 17,
    paddingTop: 20
  },

  fakeView: {
    paddingTop: 30
  },

  filterContainer: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 27,
    borderColor: COLORS.greyBorderLine
  },

  filterElementsContainer: {
    flexDirection: 'row',
    paddingTop: 30,
  },

  filterOptionText: {
    color: COLORS.brownText,
    fontSize: 14,
    fontFamily: FONTS.poppinsMedium,
  },


  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    width: '100%',
  },
  innerFooter:{
    width: '47%',
  },
  clearAllIcon: {
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
    lineHeight: 24
  },
  applyIcon: {
    paddingVertical: 14,
    borderRadius: 26,
    backgroundColor: COLORS.orangeText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyIconText: {
    fontSize: 17,
    fontFamily: FONTS.poppinsMedium,
    color: COLORS.white,
    lineHeight: 24
  },

})