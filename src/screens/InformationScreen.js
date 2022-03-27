import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constants/color/Colors';

const InformationScreen = ({ route }) => {
    const { title, discription, vaccineName, sideEffect } = route.params;

    return (
        <View style={styles.screen}>


            <View style={styles.containerInfo}>
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.header_sextion}>description</Text>

                <Text style={styles.container} > {discription} </Text>

                <Text style={styles.header_sextion}>vaccineName</Text>
                <Text style={styles.container} > {vaccineName} </Text>

                <Text style={styles.header_sextion}>sideEffect</Text>
                <Text style={styles.container} > {sideEffect} </Text>

            </View >
        </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,

    },
    containerInfo: {
        paddingHorizontal: 15,
        paddingTop: 10
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    pic: {
        width: '100%',
        height: 250,
    },
    header_sextion: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5,
    },
    container: {
        paddingBottom: 20
    }
});


export default InformationScreen