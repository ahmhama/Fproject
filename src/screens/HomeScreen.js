import { useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { getVaccineSlice } from '../stores/vaccineSlice';
import UpcomingEventsSection from "../components/atoms/home/UpcomingEventsSection";
import UpcomingVaccines from '../components/atoms/home/UpcomingVaccinesSection';

const HomeScreen = ({ route, navigation }) => {

  const dispatch = useDispatch();

  const data = useSelector(state => state.vaccine.vaccine)
  useEffect(() => {
    dispatch(getVaccineSlice())



  }, [dispatch])
  console.log(data)
  return (
    <ScrollView showsVerticalScrollIndicator={false}    >

      <View style={styles.screen}>
        <UpcomingEventsSection
          swichTo={() => navigation.navigate("UpcomingEvents")}
          navigation={navigation}
        />
        <UpcomingVaccines
          switchTo={() => navigation.navigate("Vaccine")}
          navigation={navigation}
        />
      </View>

    </ScrollView>

  )
}


export default HomeScreen


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 17,
    backgroundColor: '#F8F8F8'
  }
});
