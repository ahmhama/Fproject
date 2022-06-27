import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TitleCard = ({ title }) => {
    return (
        <View>
            <Text style={styles.title_text}>{title.length > 5 ? `${title.substring(0, 20)}` : title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title_text: {
        fontSize: 16,
        letterSpacing: 0.7,
        color: '#010A1C'
    }
})

export default TitleCard;