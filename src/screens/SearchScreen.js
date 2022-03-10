import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/atoms/search/SearchBar';
import VaccinesList from '../components/atoms/search/VaccinesList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
const fakeData = [
  {
    id: 1,
    title: "poliomyelitis",
    date: "28 / 11 / 2020",
    typeVaccine: "must",
    location: "maadi"
  },
  {
    id: 2,
    title: "vaccine",
    date: "20 / 12 / 2022",
    typeVaccine: "additional",
    location: "Giza"
  },
  {
    id: 3,
    title: "poliomyelitis",
    date: " 18 / 01 / 2021",
    typeVaccine: "additional",
    location: "alex"
  },
  {
    id: 4,
    title: "poliomyelitis",
    date: " 18 / 01 / 2021",
    typeVaccine: "must",
    location: "alex"
  }, {
    id: 5,
    title: "poliomyelitis",
    date: " 18 / 01 / 2021",
    typeVaccine: "additional",
    location: "alex"
  }, {
    id: 6,
    title: "poliomyelitis",
    date: " 18 / 01 / 2021",
    typeVaccine: "must",
    location: "alex"
  }, {
    id: 7,
    title: "poliomyelitis",
    date: " 18 / 01 / 2021",
    typeVaccine: "additional",
    location: "alex"
  },
]
const SearchScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     const apiResponse = await fetch(
  //       "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
  //     );
  //     const data = await apiResponse.json();
  //     setFakeData(data);
  //   };
  //   getData();
  // }, []);

  return (
    <SafeAreaView style={styles.root}>

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />

      <View style={{
        width: "90%",
        margin: 10,
      }}>
        <VaccinesList
          searchPhrase={searchPhrase}
          data={fakeData}
          setClicked={setClicked}
        />
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  title: {
    width: "100%",
    marginTop: 15,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
})