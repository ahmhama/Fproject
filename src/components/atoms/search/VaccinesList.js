import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,

} from "react-native";
import Colors from "../../../constants/color/Colors";

import Card from "../data/Card"

// the filter
const VaccinesList = ({ searchPhrase, setClicked, data }) => {

    const renderItem = ({ item }) => {

        if (searchPhrase === "") {
            return <View style={{ padding: 2 }}><Card {...item} /></View>
        }

        if (item.vaccineName.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
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
                ListHeaderComponent={() => <Text style={{ fontSize: 18, color: Colors.PrimaryText, marginBottom: 10 }}>Vaccine</Text>}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={{
                    marginBottom: 25
                }}
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

