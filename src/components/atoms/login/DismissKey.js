import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const DismissKey = ({ children }) => {
    return (
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            {children}
        </TouchableWithoutFeedback>
    )
}

export default DismissKey

