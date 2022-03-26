import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getReportSlice = createAsyncThunk('reports/getReportSlice', async (_, thunkAPI) => {
    const res = await axios.get('http://10.0.2.2:5000/api/Report',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

    const data = await res.data;
    return data;
})

const reportsSlice = createSlice({
    name: 'reports',
    initialState: { reports: null, loading: false },
    extraReducers: {
        [getReportSlice.pending]: (state, action) => {
            state.loading = true;
        },

        [getReportSlice.fulfilled]: (state, action) => {
            state.loading = false;
            state.reports = action.payload;

        },
        [getReportSlice.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})

export default reportsSlice.reducer

