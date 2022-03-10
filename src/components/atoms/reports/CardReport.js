import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TitleCard from '../common/TitleCard'
import IconCard from '../common/IconCard'
import { MaterialIcons } from '@expo/vector-icons';

const CardReport = ({ name, date, switchTo }) => {
    return (
        <TouchableOpacity style={styles.container_card} onPress={switchTo}>
            <TitleCard title={name} />
            <IconCard icon={<MaterialIcons name="access-time" size={24} />} text_icon={date} />
        </TouchableOpacity>
    )
}

export default CardReport

const styles = StyleSheet.create({
    container_card: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 18,
        borderRadius: 10,
        elevation: 1,

    }
})