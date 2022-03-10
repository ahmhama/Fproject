import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import TitleCard from './TitleCard';
import TopVaccine from '../home/TopVaccine';

const CardUpcomingVaccines = ({ typeVaccine, titleVaccine, ageGroup, switchInfo }) => {
    return (
        <TouchableOpacity style={styles.card_container} onPress={switchInfo}>
            <TopVaccine
                typeVaccine={typeVaccine}
                titleVaccine={titleVaccine}
                ageGroup={ageGroup}
            />
            <TitleCard title={titleVaccine} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card_container: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 15,
        width: '100%',
        shadowColor: "#261c28",
        shadowOffset: { width: 0, height: 1, },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 3,
    }
})

export default CardUpcomingVaccines;