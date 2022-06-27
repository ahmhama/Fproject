import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import CardUpcomingVaccines from '../components/atoms/home/CardUpcomingVaccines';


const NextVaccinesScreen = ({ route, navigation }) => {
    const { data, nextVaccine } = route.params;

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.screen}>
                {
                    nextVaccine && nextVaccine.map((vaccine) => {
                        return (
                            <CardUpcomingVaccines
                                switchInfo={() => navigation.navigate("InformationVaccine", {
                                    title: vaccine.vaccineName,
                                    doseRoute: vaccine.doseRoute,
                                    vaccineAge: vaccine.vaccineAge,

                                })}
                                childId={data.childId}
                                key={vaccine.vaccineId}
                                typeVaccine={vaccine.type}
                                titleVaccine={vaccine.vaccineName}
                                vaccineAge={vaccine.vaccineAge}
                            />
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default NextVaccinesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 17,
        backgroundColor: '#F8F8F8',
        paddingTop: 10
    }
})