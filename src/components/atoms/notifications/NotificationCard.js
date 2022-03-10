import { LinearGradient } from 'expo-linear-gradient';

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconCard from '../common/IconCard'
import { Entypo } from '@expo/vector-icons';
import Colors from '../../../constants/color/Colors';

const NotificationCard = ({ time, msg }) => {
    return (
        <View style={styles.container_card}>
            <View style={styles.top_card}>
                <IconCard icon={<Entypo name="star" size={24} color="#FF2323" />} text_icon="Alert" />
                <Text>a {time} age</Text>
            </View>
            <Text style={styles.body_notification}>{msg}</Text>
        </View>
    )
}

export default NotificationCard

const styles = StyleSheet.create({
    container_card: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 15,
        backgroundColor: "#FFFFFF",
        elevation: 4,
        borderRadius: 10,
        margin: 1,
        marginBottom: 20,
        overflow: "hidden"
    },
    top_card: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    body_notification: {
        paddingTop: 11,
        paddingHorizontal: 10,
        paddingBottom: 5,
        color: Colors.BodyNotification
    }

})