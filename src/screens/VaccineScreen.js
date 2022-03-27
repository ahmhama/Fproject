import { FlatList, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Card from '../components/atoms/data/Card'
import { useSelector } from 'react-redux'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Colors from '../constants/color/Colors';

const VaccineScreen = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'missed', title: 'Missed' },
        { key: 'taken', title: 'Taken' },
    ]);

    const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)
    const vaccineData = useSelector(state => state.vaccine.vaccine)


    const MissedVaccune = () => (
        <View style={{ flex: 1 }}>
            {
                data && <FlatList data={data.childVaccines} renderItem={({ item }) => item.isMissed ?
                    vaccineData.map((vaccine) => {
                        if (item.vaccineId === vaccine.vaccineId) {
                            return (
                                <Card key={item.vaccineId} {...vaccine} {...item} />
                            )
                        }
                    })

                    : null}
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
                data && <FlatList data={data.childVaccines} renderItem={({ item }) => item.status ? vaccineData.map
                    (vaccine => {
                        if (item.vaccineId === vaccine.vaccineId) {
                            return (
                                <Card key={item.vaccineId}  {...vaccine}  {...item} />
                            )
                        }
                    })
                    : null}
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
            renderTabBar={props => <TabBar {...props} style={{ backgroundColor: Colors.BackGroundSection }} />}
            sceneContainerStyle={styles.container_screen}
        />

    )
}

export default VaccineScreen

const styles = StyleSheet.create({

    container_screen: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 17,
    }
})