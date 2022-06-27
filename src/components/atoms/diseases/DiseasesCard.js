
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import TitleCard from '../common/TitleCard';

const DiseasesCard = ({ diseaseName, checkResultDescription, switchInfo }) => {
    console.log(checkResultDescription);
    return (
        <TouchableOpacity style={styles.container_card} onPress={switchInfo}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                <TitleCard title={diseaseName} />
                {/* <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: 'red' }}></View> */}
                <View style={{ paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20, backgroundColor: '#FF2323' }}><Text style={{ color: "#fff" }}>Alert</Text></View>
            </View>
            {/* <View style={styles.bottom_card}>
                <Text>{checkResultDescription.length > 45 ? `${checkResultDescription.substring(0, 45)}...` : checkResultDescription}</Text>
            </View> */}
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