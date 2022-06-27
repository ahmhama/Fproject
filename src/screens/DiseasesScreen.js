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
  const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)

  useEffect(() => {
    dispatch(getReportSlice(data.childId))
  }, [dispatch])

  return (
    <ScrollView style={styles.container_screen}>
  
      {reportsData && reportsData.map((item, index) => {
        return <DiseasesCard {...item} key={index} switchInfo={() => navigation.navigate("Information", {
          title: item.diseaseName,
          discription: item.discription,
          doctorName: item.doctorName,
          date: item.date,
          healthoffice: item.healthofficeName
        })} />
      })
      }





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