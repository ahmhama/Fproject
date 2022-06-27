import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCheckStatusSlice } from '../../../stores/checkStatusSlice'

const UserStatus = () => {
    const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)
    const checkStatus = useSelector(state => state.checkStatus.checkStatus)
    const dispatch = useDispatch()


    useEffect(() => {
        if (data) {
            dispatch(getCheckStatusSlice(data.childId))
        }
    }, [dispatch, data])

    return (
        <View>
            {checkStatus && <Text style={checkStatus.status == "Unhealthy" ? styles.unhealthy : styles.healthy}>{checkStatus.status}</Text>}
        </View>
    )
}

export default UserStatus

const styles = StyleSheet.create({

    unhealthy: {
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 5,
        fontSize: 14,
        textAlign: 'center',
        marginRight: 10
    },
    healthy: {
        backgroundColor: '#00FF00',
        color: '#000',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 5,
        fontSize: 14,
        textAlign: 'center',
        marginRight: 10
    }

})