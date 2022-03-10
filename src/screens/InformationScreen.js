import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constants/color/Colors';

const InformationScreen = ({ route }) => {
    const { title, image, description } = route.params;

    return (
        <View style={styles.screen}>

            <Image style={styles.pic}
                source={{ uri: image }}
            />
            <View style={styles.containerInfo}>
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.container} > {description} </Text>
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
    }
});


export default InformationScreen