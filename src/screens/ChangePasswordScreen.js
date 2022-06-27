import axios from 'axios';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../constants/color/Colors'
import { changePassword } from '../stores/changePasswordSlice';

const ChangePasswordScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.changePassword)
    console.log(state);
    const [oPassword, setOldPassword] = React.useState('');
    const [nPassword, setNewPassword] = React.useState('');
    const [error, setError] = React.useState('');
    return (
        <View style={styles.container_screen}>
            <TextInput style={styles.input} placeholder="Old Password" onChangeText={text => setOldPassword(text)} />
            <TextInput style={styles.input} placeholder="New Password" onChangeText={text => setNewPassword(text)} />
            <Text style={styles.error}>{error}</Text>
            <Button title="Change Password" onPress={() => {
                axios.post('http://10.0.2.2:5000/Home/Parents/ChangePassword/1', {
                    oldPassword: oPassword,
                    newPassword: nPassword
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(res => {
                    console.log(res);
                    navigation.navigate('HomeTap')
                }).catch(err => {
                    if (err.response.data.errors.OldPassword && err.response.data.errors.NewPassword) {
                        setError(err.response.data.errors.OldPassword);
                    }
                    if (!err.response.data.errors.OldPassword || !err.response.data.errors.NewPassword) {
                        setError("");
                    }
                    if (err.response.data.errors.NewPassword || err.response.data.errors.OldPassword) {
                        setError(err.response.data.errors.NewPassword || err.response.data.errors.OldPassword);
                    }



                }
                )

            }}
            />
        </View>
    )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({
    container_screen: {
        flex: 1,
        backgroundColor: Colors.PrimaryBackGround,
        padding: 20,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: "#010A1C",
        shadowOffset: { width: 0, height: 1, },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    error: {
        color: 'red',
        fontSize: 12,
    }


})