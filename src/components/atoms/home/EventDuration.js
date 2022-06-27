import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const IconText = ({ name, color, eventDuration, style }) => {
    return (
        <View style={{ ...styles.right_top_card, ...style }} >
            <MaterialCommunityIcons name={name} size={20} color={color} />
            <Text style={styles.date_top_card}>{eventDuration}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    right_top_card: {
        flexDirection: 'row',
    },
    date_top_card: {
        marginLeft: 3,
        fontSize: 14,
        color: '#F8F8F8',
        backgroundColor:'#FF0000',
        paddingVertical:2 ,
        paddingHorizontal:8,
        borderRadius:10,

    }
})

export default IconText;