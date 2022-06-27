import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import AgeGroup from './AgeGroup';
import TitleCard from './TitleCard';
import TopCardSlice from './TopCardSlice';

const CardUpcomingEvent = ({ titleEvent, eventDuration, switchInfo }) => {

    return (
        <TouchableOpacity style={styles.card_container} onPress={switchInfo}>
            <TitleCard title={titleEvent} />

            <TopCardSlice
                eventDuration={eventDuration === 0 ? `today` : `in ${eventDuration} days`}
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card_container: {
        width: Dimensions.get('screen').width * 0.55,
        padding: 20,
        paddingVertical: 30,
        marginLeft: 2,
        marginVertical: 10,
        marginRight: 17,
        borderColor: '#F25287',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#010A1C",
        shadowOffset: { width: 0, height: 1, },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 3,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',


    }
})

export default CardUpcomingEvent;