import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/color/Colors'
const InformationVaccineScreen = ({ route }) => {

    const { title, diseasesName, doseRoute, vaccineAge } = route.params;
    return (
        <View style={styles.container_screen} >
            <View style={styles.container_carve}>
                <View style={styles.containerInfo}>
                    <Text style={styles.header_section}>Name Vaccine</Text>
                    <Text style={styles.container} >{title}</Text>


                    <Text style={styles.header_section}>diseasesName Name</Text>
                    <Text style={styles.container} > {diseasesName} </Text>

                    <Text style={styles.header_section}>Dose Route</Text>
                    <Text style={styles.container} > {doseRoute} </Text>

                    <Text style={styles.header_section}>vaccine Age</Text>
                    <Text style={styles.container} > {vaccineAge} </Text>

                </View >
            </View>
        </View>
    )
}

export default InformationVaccineScreen

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

    header_section: {
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