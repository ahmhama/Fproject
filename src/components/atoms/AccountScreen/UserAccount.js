import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../constants/color/Colors'

const UserAccount = ({ name, email }) => {
    return (
        <View style={styles.container_account}>
            <View style={styles.container_image}>
                <Image
                    style={styles.user_image}
                    source={{ uri: "https://images.unsplash.com/photo-1629783509182-68c8c190e952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }}
                />
            </View>
            <View style={styles.container_user}>
                <Text style={styles.user_name}>{name}</Text>
                <Text style={styles.user_email}>{email}</Text>
            </View>
        </View>
    )
}

export default UserAccount

const styles = StyleSheet.create({
    container_account: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.BackGroundSection,
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingTop: 20,
    },
    user_image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#fff',
    },
    container_user: {
        paddingLeft: 10,
        color: Colors.TextHeader
    },
    user_name: {
        color: Colors.TextHeader,
        fontSize: 20
    },
    user_email: {
        color: Colors.TextParagraph,
        fontSize: 14

    }

})