import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getUpcomingVaccinesSlice = createAsyncThunk('upcomingVaccines/getUpcomingVaccinesSlice', async (userId, thunkAPI) => {


    const res = await axios.get(`http://10.0.2.2:5000/api/Child/${userId}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

    const data = await res.data;
    return data;
})

const upcomingVaccinesSlice = createSlice({
    name: 'upcomingVaccines',
    initialState: { upcomingVaccine: null, loading: false },
    extraReducers: {
        [getUpcomingVaccinesSlice.pending]: (state, action) => {
            state.loading = true;
        },

        [getUpcomingVaccinesSlice.fulfilled]: (state, action) => {
            state.loading = false;
            state.upcomingVaccine = action.payload;
        },
        [getUpcomingVaccinesSlice.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})

export default upcomingVaccinesSlice.reducer
