import { useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CardReport from '../components/atoms/reports/CardReport'
import Colors from '../constants/color/Colors'
import { getReportSlice } from '../stores/reportsSlice'

const ReportsScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const reportsData = useSelector(state => state.reports.reports)
  const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)

  useEffect(() => {
    dispatch(getReportSlice())
  }, [dispatch])

  return (
    <View style={styles.screen}>
      {reportsData && <FlatList
        data={reportsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => data.childId == item.childId ? <CardReport {...item} switchTo={() => navigation.navigate('DetailsReports', {
          childId: item.childId,
          date: item.date,
          checkResultDescription: item.checkResultDescription,
          height: item.height,
          weight: item.weight
        })} /> : null}
      />}


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