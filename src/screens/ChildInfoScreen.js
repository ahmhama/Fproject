import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../constants/color/Colors'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { getGlobalTime } from '../stores/timeGlobalSlice'

const ChildInfoScreen = () => {
    const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)
    const globalTime = useSelector(state => state.globalTime.time)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getGlobalTime())
    }, [dispatch])

    // data.childBirthDate
    //globalTime.datetime

    const getAge = (birthDate, timeNow, unit) => {
        const birth = moment(birthDate).format('YYYY/MM/DD')
        const time = moment(timeNow).format('YYYY/MM/DD')
        const diff = moment(time).diff(birth, unit)

        return diff
    }








    return (
        data ? <View style={styles.container_screen} >
            <View style={styles.container_child_info}>
                <Text style={styles.name_child} >{data.childFirstName + " " + data.childLastName}</Text>

                <View style={styles.item_row}>
                    <View style={styles.item_column}>
                        <Text style={styles.item_header}>Height</Text>
                        <Text style={styles.item_text}>100m</Text>
                    </View>
                    <View style={styles.item_column}>
                        <Text style={styles.item_header}>Weight</Text>
                        <Text style={styles.item_text}>1000000k</Text>
                    </View>
                    <View style={styles.item_column}>
                        <Text style={styles.item_header}>Gender</Text>
                        <Text style={styles.item_text}>{data.childGender}</Text>
                    </View>

                    <View style={styles.item_column}>
                        <Text style={styles.item_header}>Age</Text>
                        <Text style={styles.item_text}>
                            {globalTime ?
                                getAge(data.childBirthDate, globalTime.datetime, 'days') > 360 ? getAge(data.childBirthDate, globalTime.datetime, 'Years') + "Y" + " " + (getAge(data.childBirthDate, globalTime.datetime, 'Months') - (getAge(data.childBirthDate, globalTime.datetime, 'Years') * 12)) + "M"
                                    : getAge(data.childBirthDate, globalTime.datetime, 'days') < 360 ? getAge(data.childBirthDate, globalTime.datetime, 'Months') + " M" + " " + (getAge(data.childBirthDate, globalTime.datetime, 'Days') - (getAge(data.childBirthDate, globalTime.datetime, 'Months') * 30)) + "D"
                                        : getAge(data.childBirthDate, globalTime.datetime, 'days') + " D"
                                : null
                            }

                        </Text>

                    </View>
                </View>

            </View>


        </View > : null

    )
}

export default ChildInfoScreen

const styles = StyleSheet.create({
    container_screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.PrimaryBackGround,
    },
    container_child_info: {
        width: '95%',
        backgroundColor: "#fff",
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        elevation: 1,

    },

    name_child: {
        textAlign: 'center',
        paddingBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.PrimaryText
    },
    item_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    item_column: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    item_header: {
        fontSize: 16,
        color: Colors.PrimaryText,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    item_text: {
        fontSize: 14,
        color: Colors.PrimaryText,
        textAlign: 'center'

    }



})