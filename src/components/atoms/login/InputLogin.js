import InsetShadow from 'react-native-inset-shadow'

import { StyleSheet, View, TextInput } from 'react-native'
import Colors from '../../../constants/color/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InputLogin = ({ nameIcon, handleInput, handleOnBlur, valueInput, placeHolderInput }) => {
    return (
        <View style={styles.container_input}>
            <MaterialCommunityIcons
                style={styles.icons}
                name={nameIcon}
                size={24}
                color={Colors.PrimaryText}

            />

            <InsetShadow shadowColor="#707070" elevation={4} containerStyle={{
                width: "100%",
                borderRadius: 10,
            }}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleInput}
                    onBlur={handleOnBlur}
                    value={valueInput}
                    placeholder={placeHolderInput}
                    placeholderTextColor={Colors.PrimaryText}
                    secureTextEntry={true}

                />
            </InsetShadow>

        </View>
    )
}

const styles = StyleSheet.create({
    container_input: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icons: {
        position: 'absolute',
        paddingHorizontal: 10,
        zIndex: 999,
        color: Colors.PrimaryText
    },
    input: {
        width: '100%',
        height: 50,
        padding: 10,
        paddingLeft: 40,
        borderRadius: 10,
        backgroundColor: Colors.InputTextBackGround,
        color: Colors.PrimaryText,
    }



})

export default InputLogin

