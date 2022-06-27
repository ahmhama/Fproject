import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { setError } from '../../stores/signupSlice';


const BtnSignUp = ({ onHandleBtn, values, Gender, navigation }) => {
    const dispatch = useDispatch()
    return (

        <TouchableOpacity style={styles.btn_login} onPress={() => {
            axios.post('http://10.0.2.2:5000/Home/Parents/Register', {
                UserName: values.UserName,
                firstName: values.firstName,
                lastName: values.lastName,
                gender: Gender,
                address: values.address,
                number: values.number,
                email: values.email,
                Password: values.password

            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res);
                navigation.navigate('Login')
            }).catch(err => {
                dispatch(setError("samething went wrong"))
            })

        }}>
            <Text style={styles.btn_login_text}>Sign Up</Text>
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

export default BtnSignUp


