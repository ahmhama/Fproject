import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import Card from '../components/atoms/data/Card';

const TakenVaccineScreen = ({ route, navigation }) => {
    const { VaccineTaken } = route.params;

    return (
        <View style={styles.screen}>
            {
                VaccineTaken && VaccineTaken.map((vaccine) => {
                    return (
                        <Card key={vaccine.vaccineId} {...vaccine} />
                    )
                }
                )

            }
        </View>
    )
}

export default TakenVaccineScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 17,
        backgroundColor: '#F8F8F8',
        paddingTop: 10
    }
})