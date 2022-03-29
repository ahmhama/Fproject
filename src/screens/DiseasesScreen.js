import { StyleSheet } from 'react-native'
import DiseasesCard from '../components/atoms/diseases/DiseasesCard'
import { ScrollView } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiseasesSlice } from '../stores/diseasesSlice'
import { getReportSlice } from '../stores/reportsSlice'

const DiseasesScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const reportsData = useSelector(state => state.reports.reports)
  const child = useSelector(state => state.upcomingVaccines.upcomingVaccine)

  useEffect(() => {
    dispatch(getReportSlice())
    dispatch(getDiseasesSlice())
  }, [dispatch])


  return (
    <ScrollView style={styles.container_screen}>
      {
        reportsData && child ? reportsData.map(item => {
          if (item.childId === child.childId && item.status === true) {
            return (
              <DiseasesCard
                key={item.diseasesId}
                name={item.diseases.name}
                discription={item.diseases.discription}
                switchInfo={() => navigation.navigate("Information", {
                  title: item.diseases.name,
                  discription: item.diseases.discription,
                  doctorName: item.doctor.firstName + " " + item.doctor.lastName,
                  date: item.date,

                  // vaccineName: item.vaccineName,
                  // sideEffect: item.sideEffect
                })}
              />
            )
          }
        }) : null

      }

      {/* {data && data.map((item) => <DiseasesCard
        key={item.diseaseId}
        {...item}
        switchInfo={() => navigation.navigate("Information", {
          title: item.name,
          discription: item.discription,
          vaccineName: item.vaccineName,
          sideEffect: item.sideEffect
        })} />)} */}

    </ScrollView>
  )
}

export default DiseasesScreen

const styles = StyleSheet.create({
  container_screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  }
})