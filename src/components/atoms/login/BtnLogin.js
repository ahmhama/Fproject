import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { setSignIn } from '../../../stores/authSlice';
import axios from 'axios';
import { getAccountSlice } from '../../../stores/accountSlice';


const BtnLogin = ({ onHandleBtn, values }) => {
    const { isLoggedIn } = useSelector(state => state.userAuth);
    const dispatch = useDispatch()
    return (
        // () => dispatch(setSignIn({ isLoggedIn: true })) 
        <TouchableOpacity style={styles.btn_login} onPress={() => {

            const res = axios.get('http://10.0.2.2:5000/Home/Parents/All')
            res.then(data => {
                const check = data.data.filter(item => {
                    if (item.email.toLowerCase() === values.email.toLowerCase() && item.password.toLowerCase() === values.password.toLowerCase()) {
                        dispatch(getAccountSlice(item.relativeId))
                        dispatch(setSignIn({ isLoggedIn: true }))
                    }
                })
            })

        }}>
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

