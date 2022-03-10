import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AgeGroup from './AgeGroup'

const TopVaccine = ({ typeVaccine, ageGroup }) => {
    return (
        <View style={styles.top_card}>
            <View style={typeVaccine === 'must' ? styles.left_top_card : { ...styles.left_top_card, backgroundColor: '#8F9BB1' }}>
                <Text style={styles.title_top_card}>{typeVaccine}</Text>
            </View>

            <AgeGroup
                name="baby-face-outline"
                color={typeVaccine === 'must' ? "#FF2323" : "#8F9BB1"}
                ageGroup={ageGroup}
            />

        </View >
    )
}

const styles = StyleSheet.create({
    top_card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left_top_card: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#FF2323',
    },
    title_top_card: {
        color: '#ECF8FF'
    },

    right_top_card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date_top_card: {
        marginLeft: 3,
        fontSize: 14
    }
})

export default TopVaccine;