import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InputLogin from '../components/atoms/login/InputLogin'
import ErrorInput from '../components/atoms/login/ErrorInput'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Colors from '../constants/color/Colors';
import { useDispatch, useSelector } from 'react-redux';
import BtnSignUp from '../components/atoms/BtnSignUp';
import { setGender, setSignUp } from '../stores/signupSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';

const data = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },

];


const SignUpScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(null);
    const { UserName, firstName, lastName, address, number, email, password, error } = useSelector(state => state.signup);

    const SignInSchema = Yup.object().shape({
        UserName: Yup.string().required('Required'),
        firstName: Yup.string().matches(/^[A-Za-z]*$/, 'Please enter valid name').min(3, 'should be 3 chars minimum.').max(40).required(),
        lastName: Yup.string().matches(/^[A-Za-z]*$/, 'Please enter valid name').min(3, 'should be 3 chars minimum.').max(40).required(),
        email: Yup.string().email('Invalid email').required('Required'),
        address: Yup.string().required('Required'),
        number: Yup.string().matches(/^01[0-9]{9}$/, 'Please enter valid number').required('Required'),
        // password contain at least one number, one uppercase letter and one lowercase letter, and at least 5 characters
        password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/, 'Password must contain at least uppercase letter & one lowercase letter, and at least 5 characters').required('Required'),
    });

    return (
        <View style={styles.Signup_screen}>
            <Formik
                validationSchema={SignInSchema}
                initialValues={{
                    UserName: UserName,
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    number: number,
                    email: email,
                    password: password

                }}

                onSubmit={values => dispatch(setSignUp(values))}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.container_form}>

                        <View style={styles.container_item}>

                            <InputLogin
                                nameIcon="card-account-details-outline"
                                handleInput={handleChange('firstName')}
                                handleOnBlur={handleBlur('firstName')}
                                valueInput={values.firstName}
                                placeHolderInput="firstName"
                            />
                            {errors.firstName && touched.firstName ? <ErrorInput>{errors.firstName}</ErrorInput> : null}

                        </View>
                        <View style={styles.container_item}>

                            <InputLogin
                                nameIcon="card-account-details-outline"
                                handleInput={handleChange('lastName')}
                                handleOnBlur={handleBlur('lastName')}
                                valueInput={values.lastName}
                                placeHolderInput="lastName"
                            />
                            {errors.lastName && touched.lastName ? <ErrorInput>{errors.lastName}</ErrorInput> : null}

                        </View>

                        <View style={styles.container_item}>

                            <InputLogin
                                nameIcon="account"
                                handleInput={handleChange('UserName')}
                                handleOnBlur={handleBlur('UserName')}
                                valueInput={values.UserName}
                                placeHolderInput="User Name"

                            />
                            {errors.UserName && touched.UserName ? <ErrorInput>{errors.UserName}</ErrorInput> : null}
                        </View>

                        <View style={styles.container_item}>
                            <InputLogin
                                nameIcon="email-outline"
                                handleInput={handleChange('email')}
                                handleOnBlur={handleBlur('email')}
                                valueInput={values.email}
                                placeHolderInput="E-mail"
                                secure={false}
                            />

                            {errors.email && touched.email ? <ErrorInput>{errors.email}</ErrorInput> : null}
                        </View>

                        <View style={styles.container_item}>
                            <InputLogin
                                nameIcon="phone-outline"
                                handleInput={handleChange('number')}
                                handleOnBlur={handleBlur('number')}
                                valueInput={values.number}
                                placeHolderInput="Phone Number"
                            />
                            {errors.number && touched.number ? <ErrorInput>{errors.number}</ErrorInput> : null}

                        </View>
                        <View style={styles.container_item}>

                            <InputLogin
                                nameIcon="map-marker-check-outline"
                                handleInput={handleChange('address')}
                                handleOnBlur={handleBlur('address')}
                                valueInput={values.address}
                                placeHolderInput="address"
                            />
                            {errors.address && touched.address ? <ErrorInput>{errors.address}</ErrorInput> : null}
                        </View>

                        <View style={styles.container_item}>

                            <View style={styles.container}>
                                <Dropdown
                                    style={[styles.dropdown]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    iconStyle={styles.iconStyle}
                                    data={data}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder='Select Gender'
                                    value={value}

                                    onChange={item => {
                                        setValue(item.value);

                                    }}
                                    renderLeftIcon={() => (
                                        <MaterialCommunityIcons
                                            style={styles.icon}
                                            name="gender-female"
                                            size={20}
                                        />
                                    )}
                                />
                            </View>


                        </View>

                        <View style={styles.container_item}>

                            <InputLogin
                                nameIcon="lock-outline"
                                handleInput={handleChange('password')}
                                handleOnBlur={handleBlur('password')}
                                valueInput={values.password}
                                placeHolderInput="password"
                                secure={true}
                            />
                            {errors.password && touched.password ? <ErrorInput>{errors.password}</ErrorInput> : null}
                        </View>
                        {error ? <ErrorInput>{error}</ErrorInput> : null}
                        <BtnSignUp
                            onHandleBtn={handleSubmit}
                            Gender={value}
                            values={values}
                            navigation={navigation}
                        />
                    </View>
                )}
            </Formik>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Login')
                }}
            >
                <Text style={{ color: Colors.PrimaryText, fontSize: 15 }}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    Signup_screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PrimaryBackGround,
        paddingTop: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: '90%'
    },
    container_form: {
        width: '95%',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20
    },
    container_item: {
        marginBottom: 20
    }
    ,

    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },

    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
})