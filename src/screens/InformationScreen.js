import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constants/color/Colors';
import moment from 'moment';
const InformationScreen = ({ route }) => {
    const { title, discription, doctorName, date } = route.params;

    return (

        <View style={styles.container_screen} >
            <View style={styles.container_carve}>

                <View style={styles.containerInfo}>
                    <Text style={styles.header_sextion} >
                        This child was checked by
                        <Text style={styles.title} > Dr.{doctorName} </Text>
                        on <Text style={styles.title} > {moment(date).format('YYYY/MM/DD')} </Text>
                        and found that child has this  <Text style={styles.title} > {title} </Text>disease </Text>

                    <Text style={styles.header_sextion}>Description</Text>

                    <Text style={styles.container} >{discription} </Text>

                    {/* <Text style={styles.header_sextion}>Vaccine Name</Text>
                    <Text style={styles.container} > {vaccineName} </Text>

                    <Text style={styles.header_sextion}>Side Effect</Text>
                    <Text style={styles.container} > {sideEffect} </Text> */}

                </View >

            </View>
        </View >


    );
};

const styles = StyleSheet.create({
    container_screen: {
        flex: 1,
        backgroundColor: Colors.PrimaryBackGround,
    },
    container_carve: {
        width: '100%',
        backgroundColor: Colors.BackGroundSection,
        borderBottomEndRadius: 130,
        borderBottomStartRadius: 0,
        paddingBottom: 55,
        paddingHorizontal: 20,
        paddingTop: 20
    },


    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: Colors.TextHeader,
    },

    header_sextion: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5,
        color: Colors.TextHeader,
    },
    container: {
        paddingBottom: 20,
        color: Colors.TextHeader
    }
});


export default InformationScreen