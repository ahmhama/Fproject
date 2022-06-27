import React, { useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import HeaderSection from './HeaderSection'
import CardUpcomingVaccines from './CardUpcomingVaccines'
import { useDispatch, useSelector } from 'react-redux'
import { getUpcomingVaccinesSlice } from '../../../stores/upcomingVaccinesSlice'
import { getVaccineSlice } from '../../../stores/vaccineSlice'
import Colors from '../../../constants/color/Colors'
import moment from 'moment'
import axios from 'axios'

const UpcomingVaccinesSection = ({ switchTo, navigation, childId }) => {
    let NoTaken = []
    let timeDiff

    const dispatch = useDispatch();

    const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)

    const vaccineData = useSelector(state => state.vaccine.vaccine)

    const globalTime = useSelector(state => state.globalTime.time)

    useEffect(() => {
        dispatch(getUpcomingVaccinesSlice(childId))
        dispatch(getVaccineSlice())
    }, [dispatch])

    if (data && vaccineData && globalTime) {

        const timeToday = moment(globalTime.datetime).format('YYYY-MM-DD')
        const BirthDate = moment(data.childBirthDate).format('YYYY-MM-DD')
        timeDiff = moment(timeToday).diff(moment(BirthDate), 'days')
    }

    let [nextVaccine, setNextVaccine] = React.useState([]);
    let [VaccineMissed, setVaccineMissed] = React.useState([]);
    let [VaccineTaken, setVaccineTaken] = React.useState([]);
    let [enrolled, setEnrolled] = React.useState([]);
    useEffect(() => {
        if (data) {
            axios.get(`http://10.0.2.2:5000/Home/Report/ChildNotVaccine/${data.childId}`)
                .then(res => {
                    setNextVaccine(res.data);
                })
            axios.get(`http://10.0.2.2:5000/Home/Report/ChildMissedVaccine/${data.childId}`)
                .then(res => {
                    setVaccineMissed(res.data);
                })
            axios.get(`http://10.0.2.2:5000/Home/Report/ChildVaccined/${data.childId}`)
                .then(res => {
                    setVaccineTaken(res.data);
                })
            axios.get(`http://10.0.2.2:5000/Home/Event/Id/${data.childId}`).then(res => {
                setEnrolled(res.data);
            })
        }
    }, [data])


    return (
        <View style={styles.upcoming_vaccines}>
            <HeaderSection content="Vaccines" />

            {data && vaccineData ? <View style={styles.container_btn}>

                <TouchableOpacity
                    style={nextVaccine.length !== 0 ? (nextVaccine[0].vaccineAge * 30) - timeDiff < 25 ? styles.btn_vaccines_acctive : styles.btn_vaccines : styles.btn_vaccines_acctive}
                    onPress={() => {
                        navigation.navigate('NextVaccines', {
                            data: data,
                            nextVaccine: nextVaccine,
                        })
                    }}
                >
                    <Text style={styles.text_vaccines}>Upcoming Vaccine</Text>
                    <Text style={styles.no_vaccines}>({nextVaccine.length})</Text>

                </TouchableOpacity>



                <TouchableOpacity
                    style={styles.btn_vaccines}
                    onPress={() => {
                        navigation.navigate('TakenVaccine', {
                            data: data,
                            VaccineTaken: VaccineTaken
                        })
                    }}
                >
                    <Text style={styles.text_vaccines}>Taken Vaccine</Text>
                    <Text style={styles.no_vaccines}>({VaccineTaken.length})</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn_vaccines}
                    onPress={() => {
                        navigation.navigate('MissedVaccine', {
                            data: data,
                            VaccineMissed: VaccineMissed
                        })
                    }}
                >
                    <Text style={styles.text_vaccines}>Missed Vaccine</Text>
                    <Text style={styles.no_vaccines}>({VaccineMissed.length})</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn_vaccines}
                    onPress={() => {
                        navigation.navigate('EnrolledEvents', {
                            data: data,
                            enrolled: enrolled
                        })
                    }}
                >
                    <Text style={styles.text_vaccines}>Enrolled Events</Text>

                    <Text style={styles.no_vaccines}>({enrolled.length})</Text>

                </TouchableOpacity>

            </View>
                : null}

        </View>
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