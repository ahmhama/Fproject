import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import { Calendar } from 'react-native-calendars';

import { getGlobalTime } from '../stores/timeGlobalSlice';
import Colors from '../constants/color/Colors';
import moment from 'moment';
import Card from '../components/atoms/data/Card';

const fakeData = [
  {
    id: 1,
    title: "poliomyelitis",
    date: "2022-02-26",
    typeVaccine: "must",
    location: "maadi"
  },
  {
    id: 2,
    title: "vaccine",
    date: "2022-02-26",
    typeVaccine: "additional",
    location: "Giza"
  },
  {
    id: 3,
    title: "poliomyelitis",
    date: "2022-02-26",
    typeVaccine: "additional",
    location: "alex"
  },
  {
    id: 4,
    title: "poliomyelitis",
    date: "2022-02-26",
    typeVaccine: "must",
    location: "alex"
  }, {
    id: 5,
    title: "poliomyelitis",
    date: "2022-02-22",
    typeVaccine: "additional",
    location: "alex"
  }, {
    id: 6,
    title: "poliomyelitis",
    date: "2022-02-21",
    typeVaccine: "must",
    location: "alex"
  }, {
    id: 7,
    title: "poliomyelitis",
    date: "2022-02-20",
    typeVaccine: "additional",
    location: "alex"
  },
]


const CalendarScreen = () => {
  const dispatch = useDispatch();
  const globalTime = useSelector(state => state.globalTime.time)

  useEffect(() => {
    dispatch(getGlobalTime())
  }, [dispatch])

  return (
    <View style={styles.container_screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {globalTime ? <Calendar
          minDate={moment(globalTime.datetime).format('YYYY-MM-DD')}
          maxDate={moment(globalTime.datetime).format('YYYY-MM-DD')}
          hideArrows={true}
          disableMonthChange={true}
          disableAllTouchEventsForDisabledDays={true}
          markedDates={{
            [moment(globalTime.datetime).format('YYYY-MM-DD')]: { selected: true }
          }}
          theme={{
            selectedDayBackgroundColor: Colors.SelectedDay,
            selectedDayTextColor: Colors.SelectedDayText,
          }}

        /> : null}

        {globalTime ? <View style={{ marginTop: 40 }}>
          {fakeData.map((item) => (
            item.date == moment(globalTime.datetime).format('YYYY-MM-DD') ? <Card key={item.id} {...item} /> : null
          ))}

        </View> : null}



      </ScrollView>
    </View>
  )
}

export default CalendarScreen

const styles = StyleSheet.create({
  container_screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
})