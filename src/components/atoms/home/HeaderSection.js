import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const HeaderSection = ({ content, switchTo }) => {
    return (
        <View style={styles.container_header}>
            <Text style={styles.header_text}>{content}</Text>
            {switchTo && <TouchableOpacity style={styles.button_header} onPress={switchTo}>
                <Text style={styles.button_text} >View All</Text>
                <Ionicons
                    name="ios-arrow-forward-sharp"
                    size={16}
                    color="#010A1C"
                />
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    container_header: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header_text: {
        fontSize: 23,
        letterSpacing: .7,
    },
    button_header: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    button_text: {
        fontSize: 14,
        color: '#010A1C',
        marginRight: 5,
        letterSpacing: .5,

    },
})

export default HeaderSection;