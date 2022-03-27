import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import EventScreen from '../screens/EventsScreen';
import DiseasesScreen from '../screens/DiseasesScreen';
import LoginScreen from '../screens/LoginScreen';
import DataScreen from '../screens/DataScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ReportsScreen from '../screens/ReportsScreen';

import TabNavigator from './TapNavigate';
import Colors from '../constants/color/Colors';
import UpcomingEventsScreen from '../screens/UpcomingEventsScreen';
import VaccineScreen from '../screens/VaccineScreen';
import DetailsReports from '../screens/DetailsReports';
import InformationScreen from '../screens/InformationScreen';
import ChildInfoScreen from '../screens/ChildInfoScreen';


const Stack = createNativeStackNavigator();

const StackNavigate = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen name="Home"
                component={TabNavigator}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Event" component={EventScreen} />
            <Stack.Screen name="Diseases" component={DiseasesScreen} />
            {/* مكان الداتا هنا  */}
            <Stack.Screen
                name="Data"
                component={DataScreen}

                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>My Data</Text>,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.PrimaryBackGround }

                }}

            />
            <Stack.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    headerTitleAlign: 'center'
                }}

            />
            <Stack.Screen name="Reports"
                component={ReportsScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.PrimaryBackGround },
                }}
            />
            <Stack.Screen name="UpcomingEvents"
                component={UpcomingEventsScreen}
                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Upcoming Events</Text>,

                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.PrimaryBackGround },
                }}
            />

            <Stack.Screen name="Vaccine"
                component={VaccineScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.PrimaryBackGround },
                }} />

            <Stack.Screen name="DetailsReports"
                component={DetailsReports}
                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeader }}>Details Report</Text>,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.BackGroundSection },
                    headerShadowVisible: false
                }} />

            <Stack.Screen name="Information"
                component={InformationScreen}
                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Information</Text>,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.PrimaryBackGround },
                }} />

            <Stack.Screen name="ChildInfo"
                component={ChildInfoScreen}
                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeader }}>Child Info</Text>,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.BackGroundSection },
                    headerShadowVisible: false,



                }} />




        </Stack.Navigator>
    );
}


const StackAuth = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}


const MainNavigator = () => {

    const { isLoggedIn } = useSelector(state => state.userAuth);

    console.log(isLoggedIn)
    return (
        <NavigationContainer>
            {isLoggedIn ? <StackNavigate /> : <StackAuth />}
        </NavigationContainer>
    );
}


export default MainNavigator;