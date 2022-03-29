import { useEffect, useRef } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import BottomSheet from "react-native-gesture-bottom-sheet";
import Colors from '../constants/color/Colors';


import UserAccount from '../components/atoms/AccountScreen/UserAccount'
import ListItem from '../components/atoms/AccountScreen/ListItem'

// import icons 
import { SimpleLineIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { getAccountSlice, getChildIndex } from '../stores/accountSlice';
import { getUpcomingVaccinesSlice } from '../stores/upcomingVaccinesSlice';


const AccountScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const accountChildren = useSelector(state => state.account.account)

    useEffect(() => {
        dispatch(getAccountSlice())
    }, [dispatch])



    const bottomSheet = useRef();

    return (
        <View style={styles.container_screen}>

            <UserAccount name={accountChildren.firstName + " " + accountChildren.lastName} email={accountChildren.email} />

            <View style={styles.container_list}>
                {/* <ListItem
                    targetNavigate={() => navigation.navigate('Data')}
                    icon={<MaterialIcons name="favorite" size={24} color={Colors.Icon} />}
                    title='My Data'
                    description='Check your Data'
                /> */}
                <BottomSheet hasDraggableIcon ref={bottomSheet} height={200} draggable={false} >
                    <View style={{ padding: 20 }}>
                        {accountChildren ? <FlatList
                            data={accountChildren.children}
                            renderItem={({ item, index }) => <ScrollView>
                                <TouchableOpacity
                                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}
                                    onPress={() => {
                                        dispatch(getChildIndex(index))
                                        dispatch(getUpcomingVaccinesSlice(item.childId))
                                        
                                        bottomSheet.current.close()
                                        navigation.navigate('HomeTap')
                                    }}

                                >
                                    <Image source={require('../assets/images/childIcon.png')} style={{ width: 40, height: 38, borderRadius: 50, marginRight: 6 }} />
                                    <Text style={{ fontSize: 16, marginTop: -2 }}>{item.childFirstName}</Text>
                                </TouchableOpacity>
                            </ScrollView>
                            }
                            keyExtractor={item => item.childId}
                        /> : null}
                    </View>

                </BottomSheet>
                <ListItem
                    targetNavigate={() => bottomSheet.current.show()}
                    icon={<Feather name="refresh-cw" size={24} color={Colors.Icon} />}
                    title='Switch Child'
                    description='Select Your child'
                />

                {/* <ListItem
                    targetNavigate={() => navigation.navigate('Calendar')}
                    icon={<Octicons name="calendar" size={24} color={Colors.Icon} />}
                    title='Calendar'
                    description='Check out our events'
                /> */}
                <ListItem
                    targetNavigate={() => navigation.navigate('ChildInfo')}
                    icon={<MaterialCommunityIcons name="card-account-details-outline" size={24} color={Colors.Icon} />}
                    title='Child Info'
                    description='Check out your child info'
                    
                />


                <ListItem
                    targetNavigate={() => navigation.navigate('Reports')}
                    icon={<Feather name="mail" size={24} color={Colors.Icon} />}
                    title='Reports'
                    description='More support options'
                />



                <ListItem
                    icon={<SimpleLineIcons name="logout" size={24} color={Colors.Icon} />}
                    title='Log out'
                />
            </View >

        </View >
    )

}

export default AccountScreen

const styles = StyleSheet.create({
    container_screen: {
        flex: 1,
        backgroundColor: Colors.PrimaryBackGround,
    },
    container_list: {
        paddingVertical: 20
    }
})