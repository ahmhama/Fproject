import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/atoms/data/Card'

const data = [
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

const VaccineScreen = () => {

    return (
        <View style={styles.container_screen}>
            <FlatList data={data} renderItem={({ item }) => <Card {...item} />}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, paddingBottom: 10, paddingTop: 10 }}
            />
        </View>
    )
}

export default VaccineScreen

const styles = StyleSheet.create({
    container_screen: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 20,
    }
})