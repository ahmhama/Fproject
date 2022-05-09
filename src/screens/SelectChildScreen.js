import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../constants/color/Colors'
import { getAccountSlice } from '../stores/accountSlice';
import { getUpcomingVaccinesSlice, setChildId } from '../stores/upcomingVaccinesSlice';

const SelectChildScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const accountChildren = useSelector(state => state.account.account)
    useEffect(() => {
        dispatch(getAccountSlice())
    }, [dispatch])

    return (
        <View style={styles.screen}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: Colors.primary }}>Select Your Child</Text>
            {
                accountChildren ? accountChildren.children.map((item) => {
                    return (
                        <TouchableOpacity
                            key={item.childId}
                            style={styles.btn_child}
                            onPress={() => {
                                navigation.replace('Home')
                                dispatch(setChildId(item.childId))
                                dispatch(getUpcomingVaccinesSlice(item.childId))
                            }}
                        >
                            <Text style={styles.text}>{item.childFirstName + " " + item.childMiniName + " " + item.childLastName}</Text>
                        </TouchableOpacity>
                    )
                }


                ) : null
            }

        </View >
    )
}

export default SelectChildScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 17,
        backgroundColor: '#F8F8F8'
    },
    btn_child: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: Colors.InputTextBackGround,
        padding: 10,
        borderRadius: 10,
        width: '100%',
        paddingVertical: 25,
        marginVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 4,
    },
    text: {
        fontSize: 20,
        color: Colors.TextHeaderBlack,
        letterSpacing: .5,
        fontWeight: 'bold',

    }

})