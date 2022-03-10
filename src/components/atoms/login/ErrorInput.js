import { StyleSheet, Text } from 'react-native'
import React from 'react'

const ErrorInput = ({ children }) => {
    return (
        <Text style={styles.error_input}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    error_input: {
        color: '#B00020',
        fontSize: 14,
        marginVertical: 2
    },
})


export default ErrorInput
