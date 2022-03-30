import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import NotificationCard from '../components/atoms/notifications/NotificationCard'
import Colors from '../constants/color/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { getUpcomingVaccinesSlice } from '../stores/upcomingVaccinesSlice'
import { getVaccineSlice } from '../stores/vaccineSlice'
import moment from 'moment'
import CardUpcomingVaccines from '../components/atoms/home/CardUpcomingVaccines'
// const fakeData = [
//   {
//     id: 1,
//     msg: "Please go to your health office to receive ",
//     time: "1m",
//   },
//   {
//     id: 2,
//     msg: "health office to receive the vaccination",
//     time: "1m",
//   },
//   {
//     id: 3,
//     msg: "Please go to your health",
//     time: "3m",
//   },
//   {
//     id: 4,
//     msg: "health office ",
//     time: "4m",
//   },
//   {
//     id: 5,
//     msg: "health office ",
//     time: "4m",
//   },
//   {
//     id: 6,
//     msg: "health office ",
//     time: "4m",
//   },
//   {
//     id: 7,
//     msg: "health office ",
//     time: "4m",
//   },
// ]





const NotificationScreen = ({ navigation }) => {
  let timeDiff
  let NextVaccine = []
  const dispatch = useDispatch()
  const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)

  const vaccineData = useSelector(state => state.vaccine.vaccine)

  const globalTime = useSelector(state => state.globalTime.time)




  if (data && vaccineData && globalTime) {
    NextVaccine = vaccineData.filter((vaccine) => !data.childVaccines.find(item => vaccine.vaccineId === item.vaccineId))
    const timeToday = moment(globalTime.datetime).format('YYYY-MM-DD')
    const BirthDate = moment(data.childBirthDate).format('YYYY-MM-DD')
    timeDiff = moment(timeToday).diff(moment(BirthDate), 'days')
  }

  return (
    <View style={styles.container_screen}>
      {
        NextVaccine && NextVaccine.length > 0 && <CardUpcomingVaccines
          switchInfo={() => navigation.navigate("InformationVaccine", {
            title: NextVaccine[0].vaccineName,
            diseasesName: NextVaccine[0].diseasesName,
            doseRoute: NextVaccine[0].doseRoute,
            vaccineAge: NextVaccine[0].vaccineAge,
          })}
          childId={NextVaccine[0].childId}
          key={NextVaccine[0].vaccineId}
          typeVaccine={NextVaccine[0].type}
          titleVaccine={NextVaccine[0].vaccineName}
          vaccineAge={NextVaccine[0].vaccineAge}

        />
      }

    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container_screen: {
    flex: 1,
    backgroundColor: Colors.PrimaryBackGround,
    paddingHorizontal: 20,
  }

})