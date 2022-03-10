import { configureStore, compose } from '@reduxjs/toolkit';
import timeReducer from './timeGlobalSlice'
import authSlice from './authSlice'
import vaccineSlice from './vaccineSlice';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default store = configureStore({
    reducer: {
        globalTime: timeReducer,
        userAuth: authSlice,
        vaccine: vaccineSlice
    },
    composeEnhancers

})