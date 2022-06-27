import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../constants/color/Colors'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import CardUpcomingVaccines from '../components/atoms/home/CardUpcomingVaccines'
import { useEffect } from 'react'
import axios from 'axios'
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
  const dispatch = useDispatch()
  const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)

  const vaccineData = useSelector(state => state.vaccine.vaccine)

  const globalTime = useSelector(state => state.globalTime.time)




  if (data && vaccineData && globalTime) {
    const timeToday = moment(globalTime.datetime).format('YYYY-MM-DD')
    const BirthDate = moment(data.childBirthDate).format('YYYY-MM-DD')
    timeDiff = moment(timeToday).diff(moment(BirthDate), 'days')
  }

  let [nextVaccine, setNextVaccine] = React.useState([]);

  useEffect(() => {
    if (data) {
      axios.get(`http://10.0.2.2:5000/Home/Report/ChildNotVaccine/${data.childId}`)
        .then(res => {
          setNextVaccine(res.data);
        })
    }
  }, [data])

  return (
    <View style={styles.container_screen}>
      <ScrollView  
        showsVerticalScrollIndicator={false}
      > 
        {
          nextVaccine.map((vaccine, index) => {
            if ((vaccine.vaccineAge * 30) - timeDiff < 25) {
              return (
                <CardUpcomingVaccines
                  switchInfo={() => navigation.navigate("InformationVaccine", {
                    title: vaccine.vaccineName,
                    diseasesName: vaccine.diseasesName,
                    doseRoute: vaccine.doseRoute,
                    vaccineAge: vaccine.vaccineAge,  
                  })}
                  key={index}
                  typeVaccine={vaccine.type}
                  titleVaccine={vaccine.vaccineName}
                  vaccineAge={vaccine.vaccineAge}

                />)
            }
          })
        }
      </ScrollView>
      {/* {
        NextVaccine && NextVaccine.length > 0 && <CardUpcomingVaccines
          switchInfo={() => navigation.navigate("InformationVaccine", {
            title: NextVaccine[0].vaccineName,
            diseasesName: NextVaccine[0].diseasesName,
            doseRoute: NextVaccine[0].doseRoute,
            vaccineAge: NextVaccine[0].vaccineAge,
          })}
          // childId={NextVaccine[0].childId}
          key={NextVaccine[0].vaccineId}
          typeVaccine={NextVaccine[0].type}
          titleVaccine={NextVaccine[0].vaccineName}
          vaccineAge={NextVaccine[0].vaccineAge}

        />
      } */}


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