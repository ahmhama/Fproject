import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { StyleSheet, View } from 'react-native';
import TypeVaccine from '../common/TypeVaccine'
import IconCard from '../common/IconCard'
import TitleCard from '../common/TitleCard'

const Card = ({ vaccineName, date, type }) => {
    return (

        <View style={styles.container_card}>
            <View style={styles.top_card}>
                {/* <TypeVaccine typeVaccine={type} /> */}
                {/* color={type.toLowerCase() !== "must" ? "#8F9BB1" : "#FF2323"} */}
                <IconCard icon={<MaterialIcons name="access-time" size={24} color="#8F9BB1" />} text_icon={date} />
            </View>

            <TitleCard title={vaccineName} />


        </View>

    )
}

export default Card

const styles = StyleSheet.create({
    container_card: {
        width: '100%',
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 18,
        borderRadius: 10,
        elevation: 1,

    },
    top_card: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottom_card: {
        flexDirection: "row",
        alignItems: "center",
    },
})