import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/color/Colors'
import moment from 'moment'

const EventInfoScreen = ({ route, navigation }) => {
    const { title, description } = route.params

    return (
        <View style={styles.container_screen} >
            <View style={styles.container_carve}>

                <View style={styles.containerInfo}>
                    <Text style={styles.header_sextion}>Event</Text>
                    <Text style={styles.container} >{title}</Text>

                    <Text style={styles.header_sextion}>Description</Text>

                    <Text style={styles.container} >{description} </Text>

                </View >

            </View>
        </View >
    )
}

export default EventInfoScreen

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

})