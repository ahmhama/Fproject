import Timeline from 'react-native-timeline-flatlist'

import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/color/Colors'
import Card from '../components/atoms/data/Card'



const UpcomingEventsScreen = () => {
  let data = [

    [
      { id: 1, time: '25/02', title: 'Event 1', typeVaccine: "additional", date: "20 / 12 / 2022", location: "A" },
      { id: 2, time: '25/02', title: 'Event 2', typeVaccine: "additional", date: "21 / 12 / 2022", location: "B" },
      { id: 3, time: '25/02', title: 'Event 3', typeVaccine: "additional", date: "22 / 12 / 2022", location: "C" },

    ],
    { id: 4, time: '26/02', title: 'Event 3', typeVaccine: "must", date: "20 / 12 / 2022", location: "C" },
    { id: 5, time: '27/02', title: 'Event 4', typeVaccine: "must", date: "20 / 12 / 2022", location: "D" },
    { id: 6, time: '28/02', title: 'Event 5', typeVaccine: "must", date: "20 / 12 / 2022", location: "E" },
    { id: 7, time: '29/02', title: 'Event 6', typeVaccine: "must", date: "20 / 12 / 2022", location: "F" },
    { id: 8, time: '30/02', title: 'Event 7', typeVaccine: "must", date: "20 / 12 / 2022", location: "G" },

  ]
  
  return (
    <View style={styles.screen}  >

      <Timeline
        data={data}
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
                title={item.title}
                typeVaccine={item.typeVaccine}
                date={item.date}
                location={item.location}
                key={item.id}
              />
            )
          }) : (
            <Card
              title={item.title}
              typeVaccine={item.typeVaccine}
              date={item.date}
              location={item.location}
              key={item.id}
            />
          )

          return aaa
        }}
        renderTime={item => {
          //check if item is arr or obj
          if (item) {
            let aaa = Array.isArray(item) ? item.map((item, i) => {
              let first = i === 0 ? item.time : null

              return (

                <Text key={item.id}>{first}</Text>
              )
            }) : (
              <Text key={item.id}>{item.time}</Text>
            )



            return aaa
          }
        }
        }




        showTime={true}
      />
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