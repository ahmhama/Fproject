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
import InformationVaccineScreen from '../screens/InformationVaccineScreen';
import NextVaccinesScreen from '../screens/NextVaccinesScreen';
import MissedVaccineScreen from '../screens/MissedVaccineScreen';
import TakenVaccineScreen from '../screens/TakenVaccineScreen';
import SelectChildScreen from '../screens/SelectChildScreen';
import HomeScreen from '../screens/HomeScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import SignUpScreen from '../screens/SignUpScreen';
import EventInfoScreen from '../screens/EventInfoScreen';
import EnrolledEventsScreen from '../screens/EnrolledEventsScreen';


const Stack = createNativeStackNavigator();

const StackNavigate = () => {
    return (
        <Stack.Navigator>


            <Stack.Screen
                name='SelectChild'
                component={SelectChildScreen}
                initialRouteName='SelectChild'
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Home"
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
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Campaigns</Text>,

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


            <Stack.Screen name="InformationVaccine"
                component={InformationVaccineScreen}
                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeader }}>Information Vaccine</Text>,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.BackGroundSection },
                    headerShadowVisible: false,
                }} />

            <Stack.Screen name="NextVaccines"
                component={NextVaccinesScreen}
                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Upcoming Vaccines</Text>,
                    headerTitleAlign: 'center',
                }} />

            <Stack.Screen name="MissedVaccine"
                component={MissedVaccineScreen}
                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Missed Vaccines</Text>,
                    headerTitleAlign: 'center',
                }} />

            <Stack.Screen name="TakenVaccine"
                component={TakenVaccineScreen}
                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Taken Vaccines</Text>,
                    headerTitleAlign: 'center',
                }} />

            <Stack.Screen name="ChangePassword"
                component={ChangePasswordScreen}
                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Change Password</Text>,
                    headerTitleAlign: 'center',
                }} />


            <Stack.Screen name="EventInfo"
                component={EventInfoScreen}
                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Event Info</Text>,
                    headerTitleAlign: 'center',
                }} />

            <Stack.Screen name="EnrolledEvents"
                component={EnrolledEventsScreen}
                options={{
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Enrolled Events</Text>,
                    headerTitleAlign: 'center',
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
            <Stack.Screen name="SignUp"
                component={SignUpScreen}
                options={{
                    header: () => null,
                    headerTitle: () => null,
                }}
            />

        </Stack.Navigator>
    )
}


const MainNavigator = () => {

    const { isLoggedIn } = useSelector(state => state.userAuth);

    return (
        <NavigationContainer>
            {isLoggedIn ? <StackNavigate /> : <StackAuth />}
        </NavigationContainer>
    );
}


export default MainNavigator;