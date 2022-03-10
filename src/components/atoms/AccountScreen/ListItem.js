import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../../../constants/color/Colors';

const ListItem = ({ targetNavigate, icon, title, description }) => {
    return (
        <TouchableOpacity onPress={targetNavigate}>
            <View style={styles.container}>
                <View style={styles.icon_item}>
                    {icon}
                </View>
                <View style={styles.container_item}>
                    <Text style={styles.title_item}>
                        {title}
                    </Text>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    icon_item: {
        marginRight: 7
    },
    container_item: {
        paddingTop: 1
    },
    title_item: {
        color: Colors.TextIcon,
        fontSize: 16,
        fontWeight: '900',
        letterSpacing: 0.5
    },
    description: {
        color: Colors.TextParagraph,
    }
})