import { StyleSheet, Text, View } from 'react-native'

const DetailsReports = ({ route, navigation }) => {
    const { name } = route.params

    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default DetailsReports

const styles = StyleSheet.create({

})