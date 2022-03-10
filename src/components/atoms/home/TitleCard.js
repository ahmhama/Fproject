import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TitleCard = ({ title }) => {
    return (
        <View style={{ paddingTop: 17, paddingBottom: 10 }}>
            <Text style={styles.title_text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title_text: {
        fontSize: 18,
        letterSpacing: 0.7,
        color: '#010A1C'
    }
})

export default TitleCard;