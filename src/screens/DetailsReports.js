import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../constants/color/Colors';
import { getUpcomingVaccinesSlice } from '../stores/upcomingVaccinesSlice';
import moment from 'moment'

const DetailsReports = ({ route }) => {
    const { childId, date, checkResultDescription, weight, height } = route.params
    const dispatch = useDispatch();
    const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)

    useEffect(() => {
        dispatch(getUpcomingVaccinesSlice(childId))
    }, [dispatch])

    return (
        data ? <View style={styles.container_screen} >
            <View style={styles.container_carve}>
                <View style={styles.container_report}>

                    <View style={styles.item_row}>
                        <Text style={styles.item_header}>{data.childFirstName + " " + data.childLastName}</Text>
                        <Text style={styles.item_text}> {moment(date).format('YYYY/MM/DD')}</Text>
                    </View>

                    <Text style={styles.item_header}>Description:</Text>
                    <Text style={styles.item_text}>{checkResultDescription}</Text>

                    <Text style={{ ...styles.item_header, paddingTop: 15 }}>Height:</Text>
                    <View style={styles.item_row}>
                        <Text style={styles.item_text}>Before: {data.height}</Text>
                        <Text style={styles.item_text}>After: {height}</Text>
                    </View>

                    <Text style={{ ...styles.item_header, paddingTop: 15 }}>weight:</Text>
                    <View style={styles.item_row}>
                        <Text style={styles.item_text}>Before: {data.weight}</Text>
                        <Text style={styles.item_text}>After: {weight}</Text>
                    </View>

                </View>
            </View>
        </View>
            : null
    )
}

export default DetailsReports

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
    container_report: {
        width: '95%',
        marginVertical: 10,
        paddingHorizontal: 20,

    },
    item_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    item_header: {
        fontSize: 20,
        color: Colors.TextHeader,
        fontWeight: 'bold',

    },
    item_text: {
        fontSize: 16,
        color: "#F8F8F8",
    }
})