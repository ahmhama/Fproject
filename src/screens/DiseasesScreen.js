import { StyleSheet } from 'react-native'
import DiseasesCard from '../components/atoms/diseases/DiseasesCard'
import { ScrollView } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiseasesSlice } from '../stores/diseasesSlice'

const DiseasesScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const data = useSelector(state => state.diseases.diseases)


  useEffect(() => {
    dispatch(getDiseasesSlice())
  }, [dispatch])


  return (
    <ScrollView style={styles.container_screen}>

      {data && data.map((item) => <DiseasesCard
        key={item.diseaseId}
        {...item}
        switchInfo={() => navigation.navigate("Information", {
          title: item.name,
          discription: item.discription,
          vaccineName: item.vaccineName,
          sideEffect: item.sideEffect
        })} />)}

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