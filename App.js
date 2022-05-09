import { Provider } from 'react-redux';
import store from './src/stores/store';
import MainNavigator from './src/navigations/StackNavigate';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Permissions, Notifications } from 'expo';

SplashScreen.preventAutoHideAsync();

export default function App() {

  useEffect(() => {
    firebase.auth().siginInWithEmailAndPassword('ahmhama61@gmail.com', '123456');
    registerForPushNotificationsAsync();

  }, []);


  registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.

    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    const token = await Notifications.getExpoPushTokenAsync();

    var updates = {};
    updates['/expoToken'] = token;
    firebase.database().ref('user').child(user.uid).update(updates);
  }


  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1000);
  }, [])
  return (

    <Provider store={store} >
      <MainNavigator />
    </Provider >
  )
}





