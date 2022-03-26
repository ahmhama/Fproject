import { ScrollView, StyleSheet, View } from 'react-native'


import UpcomingEventsSection from "../components/atoms/home/UpcomingEventsSection";
import UpcomingVaccines from '../components/atoms/home/UpcomingVaccinesSection';

const HomeScreen = ({  navigation }) => {




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
