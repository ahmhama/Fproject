import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import HeaderSection from './HeaderSection'
import CardUpcomingEvent from './CardUpcomingEvent'

const UpcomingVaccinesSection = ({ swichTo, navigation }) => {

    data = [
        {
            id: 1,
            type: 'must',
            title: 'Vaccine 1',
            age: '1 - 2 years',
            image: "https://images.unsplash.com/photo-1541832039-cab7e4310f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            description: "any description",
        },
        {
            id: 2,
            type: 'must',
            title: 'Vaccine 2',
            age: '3 - 4 years',
            image: "https://images.unsplash.com/photo-1541832039-cab7e4310f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            description: "any  here",
        },
        {
            id: 3,
            type: 'additional',
            title: 'Vaccine 3',
            age: '5 - 6 years',
            image: "https://images.unsplash.com/photo-1541832039-cab7e4310f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            description: "any thing ",
        },
        {
            id: 4,
            type: 'must',
            title: 'Vaccine 4',
            age: '7 - 8 years',
            image: "https://images.unsplash.com/photo-1541882270037-d3cf216b2ca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "any thing cscsssc",
        },
        {

            id: 5,
            type: 'additional',
            title: 'Vaccine 5',
            age: '9 - 10 years',
            image: "https://images.unsplash.com/photo-1541832039-cab7e4310f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            description: "any thing q",

        },

    ]

    return (
        <View style={styles.upcoming_vaccines}>
            <HeaderSection content="UpComing Events" switchTo={swichTo} />

            <FlatList
                nestedScrollEnabled
                style={styles.flatlist}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={({ item }) => <CardUpcomingEvent
                    switchInfo={() => navigation.navigate("Information", {
                        title: item.title,
                        image: item.image,
                        description: item.description
                    })}
                    typeEvent={item.type}
                    titleEvent={item.title}
                    ageGroup={item.age}

                />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    upcoming_vaccines: {
        flex: 1,
        paddingTop: 20,

    }
})

export default UpcomingVaccinesSection;