import { StyleSheet, Text, View } from 'react-native'

const TitleCard = ({ title }) => {
    return (
        <View style={styles.mid_card}>
            <Text style={styles.title_vaccine}>{title}</Text>
        </View>
    )
}

export default TitleCard

const styles = StyleSheet.create({
    mid_card: {
        marginVertical: 12
    },
    title_vaccine: {
        fontSize: 22,
        fontWeight: "900"
    },
})