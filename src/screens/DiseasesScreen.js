import { StyleSheet } from 'react-native'
import DiseasesCard from '../components/atoms/diseases/DiseasesCard'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import { useEffect } from 'react'
const fakeData = [
  {
    id: 1,
    title: "poliomyelitis",
    description: "this is poliomyelitis description",
    image: "https://images.unsplash.com/photo-1541832039-cab7e4310f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",


  },
  {
    id: 2,
    title: "vaccine",
    description: "this is poliomyelitis description",
    image: "https://images.unsplash.com/photo-1541832039-cab7e4310f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",


  },
  {
    id: 3,
    title: "poliomyelitis",
    description: "this is poliomyelitis description",
    image: "https://images.unsplash.com/photo-1541832039-cab7e4310f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",


  },
  {
    id: 4,
    title: "poliomyelitis",
    description: "this is poliomyelitis description",
    image: "https://images.unsplash.com/photo-1541832039-cab7e4310f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",


  },
  {
    id: 5,
    title: "poliomyelitis",
    description: "this is poliomyelitis description",

  },
  {
    id: 6,
    title: "poliomyelitis",
    description: "this is poliomyelitis description",

  },
  {
    id: 7,
    title: "poliomyelitis",
    description: "this is poliomyelitis description",

  },
]
const DiseasesScreen = ({ navigation }) => {


  return (
    <ScrollView style={styles.container_screen}>

      {fakeData.map((item) => <DiseasesCard
        key={item.id}
        {...item}
        switchInfo={() => navigation.navigate("Information", {
          title: item.title,
          image: item.image,
          description: item.description
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