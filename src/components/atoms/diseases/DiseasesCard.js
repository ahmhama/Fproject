
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import TitleCard from '../common/TitleCard';

const DiseasesCard = ({ name, discription, switchInfo }) => {
    return (
        <TouchableOpacity style={styles.container_card} onPress={switchInfo}>
            <TitleCard title={name} />
            <View style={styles.bottom_card}>
                <Text>{discription}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DiseasesCard

const styles = StyleSheet.create({
    container_card: {
        width: '100%',
        backgroundColor: "#FFF",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 18,
        borderRadius: 10,
        elevation: 2
    },

    bottom_card: {
        flexDirection: "row",
        paddingBottom: 15
    },
})