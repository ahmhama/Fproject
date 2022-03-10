import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import AgeGroup from './AgeGroup';
import TitleCard from './TitleCard';
import TopCardSlice from './TopCardSlice';

const CardUpcomingEvent = ({ typeEvent, titleEvent, eventDuration, ageGroup, switchInfo }) => {

    return (
        <TouchableOpacity style={styles.card_container} onPress={switchInfo}>

            <TopCardSlice
                typeEvent={typeEvent.toLowerCase()}
                eventDuration={eventDuration === 0 ? `today` : `in 1 day`}
            />

            <TitleCard title={titleEvent} />

            <AgeGroup
                name="baby-face-outline"
                color={typeEvent === 'must' ? "#FF2323" : "#8F9BB1"}
                ageGroup={ageGroup}
            />


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card_container: {
        width: Dimensions.get('screen').width * 0.65,
        padding: 20,
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


    }
})

export default CardUpcomingEvent;