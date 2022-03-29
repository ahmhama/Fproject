import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import Card from '../components/atoms/data/Card';

const MissedVaccineScreen = ({ route, navigation }) => {
    const { data, vaccineData } = route.params;

    return (
        <View style={styles.screen}>
            {
                data && <FlatList data={data.childVaccines} renderItem={({ item }) => item.isMissed && item.status ?

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
    )
}

export default MissedVaccineScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 17,
        backgroundColor: '#F8F8F8',
        paddingTop: 10
    }
})