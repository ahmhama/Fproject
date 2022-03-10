import { Provider } from 'react-redux';
import store from './src/stores/store';
import MainNavigator from './src/navigations/StackNavigate';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {


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





