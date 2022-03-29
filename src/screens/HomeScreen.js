import { ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux';


import UpcomingEventsSection from "../components/atoms/home/UpcomingEventsSection";
import UpcomingVaccines from '../components/atoms/home/UpcomingVaccinesSection';

const HomeScreen = ({ route, navigation }) => {
  const childId = useSelector(state => state.upcomingVaccines.childId)

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#f8f8f8" }}>

      <View style={styles.screen}>

        <UpcomingEventsSection
          swichTo={() => navigation.navigate("UpcomingEvents")}
          navigation={navigation}
        />

        <UpcomingVaccines
          childId={childId}
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
