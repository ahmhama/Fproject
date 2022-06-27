import { StyleSheet, View } from 'react-native'
import React from 'react'
import CardEnrolled from '../components/atoms/CardEnrolled'

const EnrolledEventsScreen = ({ route }) => {
    const { enrolled } = route.params;
    return (
        <View style={styles.screen}>
            {enrolled.map((item, index) => {
                return <CardEnrolled
                    key={index}
                    healthOfficeName={item.healthOfficeName}
                    doctorName={item.doctorName}
                    vaccineCampingName={item.vaccineCampingName}
                    date={item.date}
                />
            }
            )}
        </View>
    )
}

export default EnrolledEventsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 17,
        backgroundColor: '#F8F8F8',
        paddingTop: 10
    }
})