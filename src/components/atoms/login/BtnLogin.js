import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { setSignIn } from '../../../stores/authSlice';


const BtnLogin = ({ onHandleBtn }) => {
    const { isLoggedIn } = useSelector(state => state.userAuth);
    const dispatch = useDispatch()
    return (
        <TouchableOpacity style={styles.btn_login} onPress={() => dispatch(setSignIn({ isLoggedIn: true }))
        }>
            <Text style={styles.btn_login_text}>Log In</Text>
        </TouchableOpacity >

    )
}


const styles = StyleSheet.create({
    btn_login: {
        width: '100%',
        height: 50,
        backgroundColor: '#3862F8',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btn_login_text: {
        color: "#E7EEFE",
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1
    }
})

export default BtnLogin

