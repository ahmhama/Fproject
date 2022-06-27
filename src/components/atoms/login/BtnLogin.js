import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { setError, setSignIn } from '../../../stores/authSlice';
import axios from 'axios';
import { getAccountSlice } from '../../../stores/accountSlice';


const BtnLogin = ({ onHandleBtn, values }) => {

    const dispatch = useDispatch()

    return (

        <TouchableOpacity style={styles.btn_login} onPress={() => {
            axios.post('http://10.0.2.2:5000/Home/Parents/Login', {
                email: values.email,
                password: values.password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {

                    dispatch(setSignIn({ isLoggedIn: true, token: res.data.token, userId: res.data.relativeId }))
                    dispatch(getAccountSlice(res.data.relativeId))

                }).catch(err => {
                    dispatch(setError("Invalid email or password"))
                })
        }}  >
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


//خرا
// const res = axios.get('http://10.0.2.2:5000/Home/Parents/All')
//             res.then(data => {
//                 const check = data.data.filter(item => {
//                     if (item.email.toLowerCase() === values.email.toLowerCase() && item.password.toLowerCase() === values.password.toLowerCase()) {
//                         dispatch(getAccountSlice(item.relativeId))
//                         dispatch(setSignIn({ isLoggedIn: true }))
//                     }
//                 })
//             })




// Object {
//     "aud": "https://localhost:41664/",
//     "exp": 1652472417,
//     "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": "Parent",
//     "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": "Mohamed",
//     "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": "1",
//     "iss": "http://localhost:41664/",
//   }