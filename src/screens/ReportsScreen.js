import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import CardReport from '../components/atoms/reports/CardReport'
import Colors from '../constants/color/Colors'

const ReportsScreen = ({ navigation }) => {
  let data = [
    {
      id: 1,
      name: "john",
      date: "20/02/2022"
    },
    {
      id: 2,
      name: "ahmed",
      date: "10/03/2022",
    },
    {
      id: 3,
      name: "Ali",
      date: "15/02/2022",
    }


  ]
  return (
    <View style={styles.screen}>
      <FlatList data={data}
        renderItem={({ item }) => <CardReport {...item} switchTo={() => navigation.navigate('DetailsReports', { name: item.name })} />}
      />


    </View>
  )
}

export default ReportsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 17,
    backgroundColor: Colors.PrimaryBackGround
  }
})