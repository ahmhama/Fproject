import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import EventDuration from './EventDuration'

const TopCardSlice = ({ typeEvent, eventDuration }) => {
    return (
        <View style={styles.top_card}>
        
            <EventDuration
                name="clock-time-four-outline"
                color="#8F9BB1"
                eventDuration={eventDuration}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    top_card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

   


})

export default TopCardSlice;