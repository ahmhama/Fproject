import React, { useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import HeaderSection from './HeaderSection'
import CardUpcomingVaccines from './CardUpcomingVaccines'
import { useDispatch, useSelector } from 'react-redux'
import { getUpcomingVaccinesSlice } from '../../../stores/upcomingVaccinesSlice'
import { getVaccineSlice } from '../../../stores/vaccineSlice'
import Colors from '../../../constants/color/Colors'
import moment from 'moment'

const UpcomingVaccinesSection = ({ switchTo, navigation, childId }) => {
    let NoMissed = []
    let NoTaken = []
    let NextVaccine = []
    let timeDiff

    const dispatch = useDispatch();

    const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)

    const vaccineData = useSelector(state => state.vaccine.vaccine)

    const globalTime = useSelector(state => state.globalTime.time)


    useEffect(() => {
        dispatch(getUpcomingVaccinesSlice(childId))
        dispatch(getVaccineSlice())
    }, [dispatch])

    //no length of data isMissed
    if (data && vaccineData && globalTime) {
        data.childVaccines.map((item) => {
            if (item.isMissed ) {
                vaccineData.map((vaccine) => {
                    if (item.vaccineId === vaccine.vaccineId) {
                        NoMissed.push(item)
                    }
                })
            }
        })

        //no length of data isTaken
        data.childVaccines.map((item) => {
            if (item.status) {
                vaccineData.map((vaccine) => {
                    if (item.vaccineId === vaccine.vaccineId) {
                        NoTaken.push(item)

                    }
                })
            }
        })


        // nextVacc.map((item) => {
        //     if (!item.isMissed && !item.status) {
        //         vaccineData.map((vaccine) => {
        //             if (item.vaccineId === vaccine.vaccineId) {
        //                 NextVaccine.push(item)
        //                 const timeToday = moment(globalTime.datetime).format('YYYY-MM-DD')
        //                 const BirthDate = moment(data.childBirthDate).format('YYYY-MM-DD')
        //                 timeDiff = moment(timeToday).diff(moment(BirthDate), 'days')
        //             }
        //         })
        //     }
        // })
        NextVaccine = vaccineData.filter((vaccine) => !data.childVaccines.find(item => vaccine.vaccineId === item.vaccineId ))
        const timeToday = moment(globalTime.datetime).format('YYYY-MM-DD')
        const BirthDate = moment(data.childBirthDate).format('YYYY-MM-DD')
        timeDiff = moment(timeToday).diff(moment(BirthDate), 'days')
    }


    return (
        <View style={styles.upcoming_vaccines}>
            <HeaderSection content="Vaccines" />

            {data && vaccineData ? <View style={styles.container_btn}>

                <TouchableOpacity
                    style={NextVaccine.length !== 0 ? (NextVaccine[0].vaccineAge * 30) - timeDiff < 55 ? styles.btn_vaccines_acctive : styles.btn_vaccines : styles.btn_vaccines_acctive}
                    onPress={() => {
                        navigation.navigate('NextVaccines', {
                            data: data,
                            vaccineData: vaccineData,
                        })
                    }}
                >
                    <Text style={styles.text_vaccines}>Upcoming Vaccine</Text>
                    <Text style={styles.no_vaccines}>({NextVaccine.length})</Text>

                </TouchableOpacity>



                <TouchableOpacity
                    style={styles.btn_vaccines}
                    onPress={() => {
                        navigation.navigate('TakenVaccine', {
                            data: data,
                            vaccineData: vaccineData
                        })
                    }}
                >
                    <Text style={styles.text_vaccines}>Taken Vaccine</Text>
                    <Text style={styles.no_vaccines}>({NoTaken.length})</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn_vaccines}
                    onPress={() => {
                        navigation.navigate('MissedVaccine', {
                            data: data,
                            vaccineData: vaccineData
                        })
                    }}
                >
                    <Text style={styles.text_vaccines}>Missed Vaccine</Text>
                    <Text style={styles.no_vaccines}>({NoMissed.length})</Text>

                </TouchableOpacity>

            </View>
                : null}
            {/* {data ? data.childVaccines.map((item) => !item.status && !item.isMissed ? vaccineData.map((vaccine) => {
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
                            ageGroup={vaccine.vaccineAge}
                        />
                    )
                }
            })


                : null) : null} */}
        </View >
    )
}

const styles = StyleSheet.create({
    upcoming_vaccines: {
        flex: 1,
        paddingTop: 20,
    },
    container_btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btn_vaccines: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: Colors.InputTextBackGround,
        padding: 10,
        borderRadius: 10,
        width: '100%',
        paddingVertical: 25,
        marginVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 4,
    },
    btn_vaccines_acctive: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "#85EA2D",
        padding: 10,
        borderRadius: 10,
        width: '100%',
        paddingVertical: 25,
        marginVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 4,
    },

    text_vaccines: {
        fontSize: 20,
        color: Colors.TextHeaderBlack,
        letterSpacing: .5,
        fontWeight: 'bold',
    },
    no_vaccines: {
        fontSize: 20,
        color: "#FF2323",
        letterSpacing: .5,
        fontWeight: 'bold',
    }



})

export default UpcomingVaccinesSection;