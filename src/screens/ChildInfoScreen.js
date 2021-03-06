import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../constants/color/Colors'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { getCheckStatusSlice } from '../stores/checkStatusSlice'

const ChildInfoScreen = () => {
    const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)
    const checkStatus = useSelector(state => state.checkStatus.checkStatus)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCheckStatusSlice(data.childId))
    }, [dispatch])



    const getAge = (birthDate, timeNow, unit) => {
        const birth = moment(birthDate).format('YYYY/MM/DD')
        const time = moment(timeNow).format('YYYY/MM/DD')
        const differant = moment(time).diff(birth, unit)
        return differant
    }



    return (
        data ? <View style={styles.container_screen} >

    

            <View style={styles.container_carve}>
                <View style={styles.container_child_info}>
                    <View style={styles.item_row}>
                        <Text style={styles.item_header}> Name</Text>
                        <Text style={styles.item_text}> {data.childFirstName + " " + data.childLastName}</Text>
                    </View>

                    <View style={styles.item_row}>
                        <Text style={styles.item_header}> Gender</Text>
                        <Text style={styles.item_text}> {data.childGender}</Text>
                    </View>

                    <View style={styles.item_row}>
                        <Text style={styles.item_header}> Date of birth</Text>
                        <Text style={styles.item_text}>
                            {moment(data.childBirthDate).format('YYYY/MM/DD')}
                        </Text>
                    </View>

                    <View style={styles.item_row}>
                        <Text style={styles.item_header}> Height</Text>
                        <Text style={styles.item_text}> {data.height}</Text>
                    </View>

                    <View style={styles.item_row}>
                        <Text style={styles.item_header}>Weight</Text>
                        <Text style={styles.item_text}> {data.weight}</Text>
                    </View>
                    <View style={styles.item_row}>
                        <Text style={styles.item_header}>status</Text>
                        <Text style={styles.item_text}> {checkStatus.status}</Text>
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
        backgroundColor: Colors.PrimaryBackGround,
    },
    container_carve: {
        width: '100%',
        backgroundColor: Colors.BackGroundSection,
        borderBottomEndRadius: 130,
        borderBottomStartRadius: 0,
        paddingBottom: 55,
    },
    container_child_info: {
        width: '95%',
        marginVertical: 10,

    },
    item_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#F8F8F8",
    },
    item_header: {
        fontSize: 20,
        color: Colors.TextHeader,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    item_text: {
        fontSize: 16,
        color: "#F8F8F8",
        textAlign: 'center'

    }

})