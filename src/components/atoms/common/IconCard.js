import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../constants/color/Colors'

const IconCard = ({ icon, text_icon, style }) => {
    return (
        <View style={{ ...styles.container_icon, ...style }}>
            {icon}
            <Text style={styles.text_icon}>{text_icon}</Text>
        </View>
    )
}

export default IconCard

const styles = StyleSheet.create({
    container_icon: {
        flexDirection: "row",
        alignItems: "center",
    },

    text_icon: {
        paddingLeft: 3,
        color: Colors.TextIcon
    },
})