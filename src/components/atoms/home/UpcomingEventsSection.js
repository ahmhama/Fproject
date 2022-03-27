import moment from 'moment'
import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import HeaderSection from './HeaderSection'
import CardUpcomingEvent from './CardUpcomingEvent'
import { useDispatch, useSelector } from 'react-redux'
import { getGlobalTime } from '../../../stores/timeGlobalSlice'
import { getEventsSlice } from '../../../stores/eventsSlice'

const UpcomingVaccinesSection = ({ swichTo, navigation }) => {
    const dispatch = useDispatch();

    const globalTime = useSelector(state => state.globalTime.time)
    const eventsData = useSelector(state => state.events.events)

    useEffect(() => {
        dispatch(getGlobalTime())
    }, [dispatch])

    useEffect(() => {
        dispatch(getEventsSlice())
    }, [dispatch])



    /* -------------------------------------------------------------------------- */
    /*               function to check if the event is in the future              */
    /* -------------------------------------------------------------------------- */

    const checkTheDate = (endDate) => {
        if (!globalTime) {
            return null
        }
        const fromatDate = moment(globalTime.utc_datetime, 'YYYY-MM-DD')
        const fromatEndDate = moment(endDate, 'YYYY-MM-DD')

        if (!fromatEndDate.isBefore(fromatDate)) {
            return true
        }
        else {
            return false
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                     get the deffernt between two dates                     */
    /* -------------------------------------------------------------------------- */
    const getDifferenceBetweenDates = (firstDate, endDate) => {
        const fromatDate = moment(firstDate, 'YYYY-MM-DD')
        const fromatEndDate = moment(endDate, 'YYYY-MM-DD')
        const diff = fromatEndDate.diff(fromatDate, 'days')
        return diff
    }




    return (
        <View style={styles.upcoming_vaccines}>
            <HeaderSection content="UpComing Events" switchTo={swichTo} />

            {eventsData ? <FlatList
                nestedScrollEnabled
                style={styles.flatlist}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                data={eventsData}

                renderItem={({ item }) => checkTheDate(item.endDate) && <CardUpcomingEvent
                    switchInfo={() => navigation.navigate("Information", {
                        title: item.vaccineCampingName,
                        image: item.image,
                        description: item.description
                    })}
                    eventDuration={getDifferenceBetweenDates(item.startDate, item.endDate)}
                    typeEvent={item.type}
                    titleEvent={item.vaccineCampingName}

                />
                }
            />
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    upcoming_vaccines: {
        flex: 1,
        paddingTop: 20,

    }
})

export default UpcomingVaccinesSection;