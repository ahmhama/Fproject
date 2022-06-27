import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardEnrolled = ({ healthOfficeName, doctorName, vaccineCampingName, date }) => {
    console.log(healthOfficeName);
    return (
        <View style={styles.container_card}>
            <Text style={styles.bold_text}>{vaccineCampingName} </Text>
            <Text><Text style={styles.bold_text}>Dr</Text> : {doctorName}</Text>
            <Text><Text Health style={styles.bold_text}>Health Office</Text> : {healthOfficeName}</Text>
            <Text><Text style={styles.bold_text}>Date </Text>: {date} </Text>
        </View >
    )
}

export default CardEnrolled

const styles = StyleSheet.create({
    container_card: {
        width: '100%',
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 18,
        borderRadius: 10,
        elevation: 1,

    },
    top_card: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottom_card: {
        flexDirection: "row",
        alignItems: "center",
    },
    bold_text: {
        fontWeight: "bold",
        fontSize: 16,
    }
})