import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getGlobalTime = createAsyncThunk('time/getGlobalTime', async (_, thunkAPI) => {
    const res = await axios.get('https://worldtimeapi.org/api/timezone/Africa/Cairo');
    const data = await res.data;
    return data;
})

const timeGlobalSlice = createSlice({
    name: 'time',
    initialState: { time: null, loading: false },
    extraReducers: {
        [getGlobalTime.pending]: (state, action) => {
            state.loading = true;
        },

        [getGlobalTime.fulfilled]: (state, action) => {
            state.loading = false;
            state.time = action.payload;
        },
        [getGlobalTime.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})

export default timeGlobalSlice.reducer

