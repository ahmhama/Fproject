import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import CardUpcomingVaccines from '../components/atoms/home/CardUpcomingVaccines';

const NextVaccinesScreen = ({ route, navigation }) => {
    const { data, vaccineData } = route.params;

    let nextVacc = vaccineData.filter((vaccine) => !data.childVaccines.find(item => vaccine.vaccineId === item.vaccineId))

    return (
        <ScrollView>
            <View style={styles.screen}>
                {
                    nextVacc.map((vaccine) => {
                        return (
                            <CardUpcomingVaccines
                                switchInfo={() => navigation.navigate("InformationVaccine", {
                                    title: vaccine.vaccineName,
                                    diseasesName: vaccine.diseasesName,
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

                {/* {data && vaccineData ? data.childVaccines.map((item) => !item.status && !item.isMissed ? vaccineData.map((vaccine) => {

                if (item.vaccineId === vaccine.vaccineId) {
                    return (
                        <CardUpcomingVaccines

                            switchInfo={() => navigation.navigate("InformationVaccine", {
                                title: vaccine.vaccineName,
                                diseasesName: vaccine.diseasesName,
                                doseRoute: vaccine.doseRoute,
                                vaccineAge: vaccine.vaccineAge,
                            })}
                            childId={item.childId}
                            key={vaccine.vaccineId}
                            typeVaccine={vaccine.type}
                            titleVaccine={vaccine.vaccineName}
                            vaccineAge={vaccine.vaccineAge}
                        />
                    )
                }
            })


                : null)
                : null
            } */}
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