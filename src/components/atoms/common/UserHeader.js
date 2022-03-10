import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../../constants/color/Colors'

const UserHeader = () => {
    return (
        <View style={styles.user_header_container}>
            <Image style={styles.user_header_image}
                source={{ uri: "https://images.unsplash.com/photo-1629783509182-68c8c190e952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }}
            />
            <Text style={styles.user_header_name}> Ahmed Hamada </Text>
        </View>
    )
}

export default UserHeader

const styles = StyleSheet.create({
    user_header_container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,

    },
    user_header_image: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 5,
    },
    user_header_name: {
        color: Colors.TextHeaderBlack,
    }
})