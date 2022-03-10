import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ searchPhrase, setSearchPhrase, setClicked, clicked }) => {
    return (
        <View style={styles.container}>
            <View style={!clicked ? styles.searchBar__unclicked : styles.searchBar__clicked}
            >
                <Feather name="search" size={18} color="#fff" />

                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor={"#fff"}
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />


                {clicked && (
                    <Entypo name="cross"
                        size={18} color="#fff"
                        onPress={() => {
                            setSearchPhrase("")
                            Keyboard.dismiss();
                            setClicked(false);
                        }} />
                )}
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    searchBar__unclicked: {
        padding: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        backgroundColor: "#4B86B4",
        borderRadius: 35,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        backgroundColor: "#4B86B4",
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 10
    },
    input: {
        fontSize: 16,
        marginLeft: 10,
        width: "90%",
        color: "#fff"
    },
});



export default SearchBar;
