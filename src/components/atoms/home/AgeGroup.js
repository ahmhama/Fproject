import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AgeGroup = ({ name, color, ageGroup, style }) => {
    return (
        <View style={{ ...styles.age_group, ...style }} >
            <MaterialCommunityIcons
                name={name}
                size={20}
                color={color}
            />
            <Text style={styles.age}>{ageGroup}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    age_group: {
        flexDirection: 'row',
    },
    age: {
        marginLeft: 3,
        fontSize: 14,
        color: '#010A1C'
    }
})

export default AgeGroup;