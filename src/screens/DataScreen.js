import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/atoms/data/Card'
import Colors from '../constants/color/Colors'
import { getUpcomingVaccinesSlice } from '../stores/upcomingVaccinesSlice';





// const data = [
//   {
//     id: 1,
//     title: "poliomyelitis",
//     date: "28 / 11 / 2020",
//     typeVaccine: "must",
//     location: "maadi"
//   },
//   {
//     id: 2,
//     title: "vaccine",
//     date: "20 / 12 / 2022",
//     typeVaccine: "additional",
//     location: "Giza"
//   },
//   {
//     id: 3,
//     title: "poliomyelitis",
//     date: " 18 / 01 / 2021",
//     typeVaccine: "additional",
//     location: "alex"
//   },
//   {
//     id: 4,
//     title: "poliomyelitis",
//     date: " 18 / 01 / 2021",
//     typeVaccine: "must",
//     location: "alex"
//   }, {
//     id: 5,
//     title: "poliomyelitis",
//     date: " 18 / 01 / 2021",
//     typeVaccine: "additional",
//     location: "alex"
//   }, {
//     id: 6,
//     title: "poliomyelitis",
//     date: " 18 / 01 / 2021",
//     typeVaccine: "must",
//     location: "alex"
//   }, {
//     id: 7,
//     title: "poliomyelitis",
//     date: " 18 / 01 / 2021",
//     typeVaccine: "additional",
//     location: "alex"
//   },


// ]

const DataScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)

  const accountChildren = useSelector(state => state.account.account)




  useEffect(() => {
    if (accountChildren) {
      dispatch(getUpcomingVaccinesSlice(accountChildren.children[0].childId))
    }
  }, [dispatch, accountChildren])


  return (
    <View style={styles.container_screen}>

      {data && <FlatList data={data.vaccines} renderItem={({ item }) => item.status && <Card {...item} />}
        keyExtractor={item => item.vaccineId}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingBottom: 10, paddingTop: 10 }}
      />
      }
    </View >
  )
}

export default DataScreen

const styles = StyleSheet.create({
  container_screen: {
    flex: 1,
    backgroundColor: Colors.PrimaryBackGround,
    paddingHorizontal: 20,
  },
})