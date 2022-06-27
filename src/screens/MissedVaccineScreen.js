import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Card from '../components/atoms/data/Card';

const MissedVaccineScreen = ({ route }) => {
    const { VaccineMissed } = route.params;
    return (
        <View style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {

                    VaccineMissed && VaccineMissed.map((vaccine) => {
                        return (
                            <Card key={vaccine.vaccineId} {...vaccine} />
                        )
                    })


                }
            </ScrollView>
        </View>
    )
}

export default MissedVaccineScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 17,
        backgroundColor: '#F8F8F8',
        paddingTop: 10
    }
})