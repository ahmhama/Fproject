import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotificationCard from '../components/atoms/notifications/NotificationCard'
import Colors from '../constants/color/Colors'
const fakeData = [
  {
    id: 1,
    msg: "Please go to your health office to receive ",
    time: "1m",
  },
  {
    id: 2,
    msg: "health office to receive the vaccination",
    time: "1m",
  },
  {
    id: 3,
    msg: "Please go to your health",
    time: "3m",
  },
  {
    id: 4,
    msg: "health office ",
    time: "4m",
  },
  {
    id: 5,
    msg: "health office ",
    time: "4m",
  },
  {
    id: 6,
    msg: "health office ",
    time: "4m",
  },
  {
    id: 7,
    msg: "health office ",
    time: "4m",
  },
]

const NotificationScreen = () => {
  return (
    <View style={styles.container_screen}>
      <FlatList
        data={fakeData}
        renderItem={({ item }) => <NotificationCard {...item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <></>}
        ListFooterComponent={() => <></>}
        ListFooterComponentStyle={{ marginBottom: 10 }}
        ListHeaderComponentStyle={{ marginTop: 10 }}
      />
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