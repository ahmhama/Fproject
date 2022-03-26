import { StyleSheet, Text } from 'react-native'
import React from 'react'

const TypeVaccine = ({ typeVaccine }) => {
    return (
        <Text style={typeVaccine !== "Must" ? styles.type_vaccine : styles.must_vaccine}>{typeVaccine}</Text>
    )
}

export default TypeVaccine

const styles = StyleSheet.create({
    type_vaccine: {
        backgroundColor: "#8F9BB1",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
    


    },
    must_vaccine: {
        backgroundColor: "#FF2323",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,

    }
})