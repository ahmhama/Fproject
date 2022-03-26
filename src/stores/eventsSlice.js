import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getEventsSlice = createAsyncThunk('events/getEventsSlice', async (_, thunkAPI) => {
    const res = await axios.get('http://10.0.2.2:5000/api/Event',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

    const data = await res.data;
    return data;
})

const eventsSlice = createSlice({
    name: 'events',
    initialState: { events: null, loading: false },
    extraReducers: {
        [getEventsSlice.pending]: (state, action) => {
            state.loading = true;
        },

        [getEventsSlice.fulfilled]: (state, action) => {
            state.loading = false;
            state.events = action.payload;

        },
        [getEventsSlice.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})

export default eventsSlice.reducer

