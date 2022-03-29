import React, { useEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import TitleCard from './TitleCard';
import TopVaccine from '../home/TopVaccine';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalTime } from '../../../stores/timeGlobalSlice';
import moment from 'moment'
import { getUpcomingVaccinesSlice } from '../../../stores/upcomingVaccinesSlice';

const CardUpcomingVaccines = ({ typeVaccine, titleVaccine, switchInfo, childId, vaccineAge }) => {
    let timeDiff
    const dispatch = useDispatch();

    const globalTime = useSelector(state => state.globalTime.time)

    const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)

    useEffect(() => {
        dispatch(getGlobalTime())
        getUpcomingVaccinesSlice(childId)
    }, [dispatch])

    if (globalTime && data) {
        const timeToday = moment(globalTime.datetime).format('YYYY-MM-DD')
        const BirthDate = moment(data.childBirthDate).format('YYYY-MM-DD')
        timeDiff = moment(timeToday).diff(moment(BirthDate), 'days')
    }


    return (
        <TouchableOpacity style={styles.card_container} onPress={switchInfo}>
            <TopVaccine
                typeVaccine={typeVaccine}
                titleVaccine={titleVaccine}
                ageGroup={timeDiff}
                vaccineAge={vaccineAge}
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