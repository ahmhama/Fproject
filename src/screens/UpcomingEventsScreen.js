import Timeline from 'react-native-timeline-flatlist'

import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/color/Colors'
import Card from '../components/atoms/data/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getEventsSlice } from '../stores/eventsSlice'
import { useEffect } from 'react'
import moment from 'moment'


const UpcomingEventsScreen = ({ route }) => {
  const dispatch = useDispatch();
  const eventsData = useSelector(state => state.events.events)


  useEffect(() => {
    dispatch(getEventsSlice())
  }, [dispatch, eventsData])


  return (
    <View style={styles.screen}  >
      {eventsData ? <Timeline
        data={eventsData}
        circleSize={14}
        circleColor='#FDCFCF'
        lineColor='#9E9FA3'
        rowContainerStyle={{
          marginTop: 4,
          paddingTop: 18,
        }}
        timeStyle={{
          marginTop: -22
        }}

        renderDetail={item => {
          //check if item is arr or obj
          let aaa = Array.isArray(item) ? item.map(item => {

            return (
              <Card
                vaccineName={item.vaccineCampingName}
                // type={item.type}
                date={moment(item.endDate).format('YYYY/MM/DD')}
              />
            )
          }) : (
            <Card
              vaccineName={item.vaccineCampingName}
              // type={item.type}
              date={moment(item.endDate).format('YYYY/MM/DD')}
            />
          )

          return aaa
        }}
        renderTime={item => {

          if (item) {
            let aaa = Array.isArray(item) ? item.map((item, i) => {

              let first = i === 0 ? item.startDate : null

              return (
                <Text key={item.id}>{first}</Text>
              )
            }) : (
              <Text style={{ marginTop: -20 }} key={item.id}>{moment(item.startDate).format('MM/DD')}</Text>
            )



            return aaa
          }
        }
        }
        showTime={true}
      />

        : null}
    </View>
  )
}

export default UpcomingEventsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 17,
    backgroundColor: Colors.PrimaryBackGround
  }
})