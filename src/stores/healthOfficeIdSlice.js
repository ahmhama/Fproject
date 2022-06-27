import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getHealthOfficeSlice = createAsyncThunk('upcomingVaccines/getHealthOfficeSlice', async (userId, thunkAPI) => {


    const res = await axios.get(`http://10.0.2.2:5000/Home/HealthOffices/HealthOffice/${userId}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${thunkAPI.getState().userAuth.token}` 

            }
        });

    const data = await res.data;
    return data;
})

const healthOfficeSlice = createSlice({
    name: 'healthOffice',
    initialState: { healthOffice: null, loading: false },
    extraReducers: {
        [getHealthOfficeSlice.pending]: (state, action) => {
            state.loading = true;
        },

        [getHealthOfficeSlice.fulfilled]: (state, action) => {
            state.loading = false;
            state.healthOffice = action.payload;
        },
        [getHealthOfficeSlice.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})

export const { setChildId } = healthOfficeSlice.actions

export default healthOfficeSlice.reducer

