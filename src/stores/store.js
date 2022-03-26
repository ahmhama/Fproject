import { configureStore, compose } from '@reduxjs/toolkit';
import timeReducer from './timeGlobalSlice'
import authSlice from './authSlice'
import vaccineSlice from './vaccineSlice';
import accountSlice from './accountSlice';
import upcomingVaccinesSlice from './upcomingVaccinesSlice';
import diseasesSlice from './diseasesSlice';
import eventsSlice from './eventsSlice';
import reportsSlice from './reportsSlice';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default store = configureStore({
    reducer: {
        globalTime: timeReducer,
        userAuth: authSlice,
        vaccine: vaccineSlice,
        account: accountSlice,
        upcomingVaccines: upcomingVaccinesSlice,
        diseases: diseasesSlice,
        events: eventsSlice,
        reports: reportsSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }),
    composeEnhancers

})