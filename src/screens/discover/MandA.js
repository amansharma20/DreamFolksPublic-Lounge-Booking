import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';
import { COLORS, FONTS } from '../../../constants';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DropDownPicker from 'react-native-dropdown-picker';
import MandAItems from '../../components/flatlistItems/discoverItems/MandAItems';
import { ScrollView } from 'react-native-gesture-handler';

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

export default function MandA() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Arrival, domestic', value: 'type' },
        { label: 'Arrival, domestic', value: 'type' }
    ]);
    const [checkboxState, setCheckboxState] = React.useState(false);
    const renderItem = ({ item }) => (
        <MandAItems />
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
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
            <ScrollView>
            <View style={styles.selectContainer}>
                <Text style={styles.selectTypeText}>
                    Select meet & assist type
                </Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{
                        backgroundColor: COLORS.mainBackground,
                        borderColor: COLORS.mainBackground,
                        height: 65,
                        paddingLeft: 18
                    }}
                    labelStyle={{
                        fontFamily: FONTS.poppinsRegular
                    }}
                    textStyle={{
                        fontSize: 17,
                        color: COLORS.brownText,
                        lineHeight: 24
                    }}
                    zIndex={100000}
                />
            </View>
            <Text style={styles.selectPackageText}>
                Select Package
            </Text>
            <FlatList
            showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{paddingBottom: 50}}
            />
</ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 10
    },

    complimentaryText: {
        color: COLORS.muddyText,
        fontSize: 14,
        fontFamily: FONTS.poppinsRegular,
    },

    selectContainer: {
        paddingHorizontal: 20,
        paddingBottom: 30
    },

    selectTypeText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingBottom: 10
    },

    selectPackageText: {
        color: COLORS.lightGreyText,
        fontFamily: FONTS.poppinsRegular,
        fontSize: 14,
        paddingBottom: 10,
        paddingHorizontal: 20
    }
}
)