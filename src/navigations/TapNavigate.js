import Colors from '../constants/color/Colors';
// import icons 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

//to create a tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import screens
import DiseasesScreen from '../screens/DiseasesScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AccountScreen from '../screens/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import UserHeader from '../components/atoms/common/UserHeader';
import { Image, Text, View } from 'react-native';
import SelectChildScreen from '../screens/SelectChildScreen';


const Tabs = createBottomTabNavigator();

//Tap For All Screens
const TapOptions = {
    tabBarStyle: {
        borderTopWidth: 2,
        borderTopColor: Colors.TabActive
    }
}

// Tap style & Screen options
const StyleHome = {
    tabBarShowLabel: false,
    headerLeft: () => (
        <UserHeader />
    ),
    headerRight: () => (
        <View style={{ marginRight: 10, marginBottom: 10 }}>
            <Image source={require('../assets/images/logo.png')}
                style={{ width: 55, height: 55 }}
            />
        </View>
    ),
    headerTitle: () => null,
    tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={20} color={color} />,
    headerStyle: {
        backgroundColor: Colors.PrimaryBackGround, elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }

}


const TabNavigator = ({ route }) => {

    return (
        <Tabs.Navigator TabBarOPtions={TapOptions}>


            <Tabs.Screen name="HomeTap"
                component={HomeScreen}
                options={StyleHome}

            />

            <Tabs.Screen name="DiseasesTap" component={DiseasesScreen}
                options={{

                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Ionicons name="medkit-outline" size={20} color={color} />,
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Diseases</Text>,
                    headerTitleAlign: 'center',
                }}

            />

            {/* <Tabs.Screen name="SearchTap" component={SearchScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Ionicons name="ios-search-outline" size={20} color={color} />,
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Search</Text>,
                    headerTitleAlign: 'center',
                }}
            /> */}
            {/* <Tabs.Screen name="NotificationTap" component={NotificationScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={20} color={color} />,
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeaderBlack }}>Notifications</Text>,
                    headerTitleAlign: 'center',
                    headerTintColor: "#000",
                    headerStyle: { backgroundColor: "#F8F8F8" },
                }}
            /> */}

            <Tabs.Screen name="AccountTap" component={AccountScreen}
                options={{
                    tabBarShowLabel: false,
                    headerTitleAlign: 'center',
                    headerTintColor: Colors.TextHeader,
                    headerTitle: () => <Text style={{ fontSize: 20, color: Colors.TextHeader }}>My Account</Text>,
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user" size={20} color={color} />,
                    headerStyle: {
                        backgroundColor: Colors.BackGroundSection,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    }

                }}
            />

        </Tabs.Navigator>
    );
}

export default TabNavigator;