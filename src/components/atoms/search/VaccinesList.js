import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SectionList,
    ScrollView,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from "../../../constants/color/Colors";

import Card from "../data/Card"

// the filter
const VaccinesList = ({ searchPhrase, setClicked, data }) => {

    const renderItem = ({ item }) => {

        if (searchPhrase === "") {
            return <View style={{ padding: 2 }}><Card {...item} /></View>
        }

        if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <View style={{ padding: 2 }}><Card {...item} /></View>
        }

    };

    return (
        <View
            onStartShouldSetResponder={() => {
                setClicked(false);
            }}
        >
            <FlatList
                ListHeaderComponent={() => <Text style={{ fontSize: 18, color: Colors.TextHeader, marginBottom: 10 }}>Popular Diseases</Text>}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    header_diseases: {
        fontSize: 18,
        marginBottom: 10
    }


});

export default VaccinesList;

