import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getVaccineSlice = createAsyncThunk('vaccine/getVaccineSlice', async (_, thunkAPI) => {
    const res = await axios.get('http://10.0.2.2:5000/Home/Vaccines/All',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

    const data = await res.data;
    return data;
})

const vaccineSlice = createSlice({
    name: 'vaccine',
    initialState: { vaccine: null, loading: false },
    extraReducers: {
        [getVaccineSlice.pending]: (state, action) => {
            state.loading = true;
        },

        [getVaccineSlice.fulfilled]: (state, action) => {
            state.loading = false;
            state.vaccine = action.payload;

        },
        [getVaccineSlice.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})

export default vaccineSlice.reducer

