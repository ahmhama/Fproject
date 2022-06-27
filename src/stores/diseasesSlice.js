import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getDiseasesSlice = createAsyncThunk('diseases/getDiseasesSlice', async (_, thunkAPI) => {
    const res = await axios.get('http://10.0.2.2:5000/Home/Diseases/All',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Authorization': `Bearer ${thunkAPI.getState().userAuth.token}` 

            }
        });

    const data = await res.data;
    return data;
})

const diseasesSlice = createSlice({
    name: 'diseases',
    initialState: { diseases: null, loading: false },
    extraReducers: {
        [getDiseasesSlice.pending]: (state, action) => {
            state.loading = true;
        },

        [getDiseasesSlice.fulfilled]: (state, action) => {
            state.loading = false;
            state.diseases = action.payload;

        },
        [getDiseasesSlice.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})

export default diseasesSlice.reducer

