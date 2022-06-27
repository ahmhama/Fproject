import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getCheckStatusSlice = createAsyncThunk('reports/getCheckStatusSlice', async (userId, thunkAPI) => {

    const res = await axios.get(`http://10.0.2.2:5000/Home/ChildDisease/Check/${userId}`,
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

const checkStatusSlice = createSlice({
    name: 'checkStatus',
    initialState: { checkStatus: null, loading: false },
    extraReducers: {
        [getCheckStatusSlice.pending]: (state, action) => {
            state.loading = true;
        },

        [getCheckStatusSlice.fulfilled]: (state, action) => {
            state.loading = false;
            state.checkStatus = action.payload;

        },
        [getCheckStatusSlice.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})

export default checkStatusSlice.reducer

