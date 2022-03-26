import { FlatList, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Card from '../components/atoms/data/Card'
import { useSelector } from 'react-redux'
import { TabView, SceneMap } from 'react-native-tab-view';

const VaccineScreen = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'missed', title: 'Missed' },
        { key: 'taken', title: 'Taken' },
    ]);

    const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)

    console.log(data);


    //   {
    //                 data && <FlatList data={data.vaccines} renderItem={({ item }) => item.isMissed ? <Card {...item} /> : null}
    //                     keyExtractor={item => item.vaccineId}
    //                     showsVerticalScrollIndicator={false}
    //                     style={{ flex: 1, paddingBottom: 10, paddingTop: 10 }}
    //                     ListHeaderComponent={<Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 10 }}>Missing Vaccines</Text>}
    //                 />
    //             } 


    const MissedVaccune = () => (
        <View style={{ flex: 1 }}>
            {
                data && <FlatList data={data.vaccines} renderItem={({ item }) => item.isMissed ? <Card {...item} /> : null}
                    keyExtractor={item => item.vaccineId}
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1, paddingBottom: 10, paddingTop: 10 }}
                />
            }
        </View>
    );

    const TakenVaccune = () => (
        <View style={{ flex: 1 }}>
            {
                data && <FlatList data={data.vaccines} renderItem={({ item }) => item.status ? <Card {...item} /> : null}
                    keyExtractor={item => item.vaccineId}
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1, paddingBottom: 10, paddingTop: 10 }}
                />
            }
        </View>
    );

    const renderScene = SceneMap({
        missed: MissedVaccune,
        taken: TakenVaccune,

    });


    return (

        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />

    )
}

export default VaccineScreen

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
    container_screen: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 20,
    }
})