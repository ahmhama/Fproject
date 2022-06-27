import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getAccountSlice = createAsyncThunk('account/getAccountSlice', async (userId, thunkAPI) => {

    const res = await axios.get(`http://10.0.2.2:5000/Home/Parents/Parent/${userId}`,
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


const accountSlice = createSlice({
     name: 'account',
    initialState: {
        account: null,
        childIndex: 0,
        loading: false,
    },
    reducers: {
        getChildIndex: (state, action) => {
            state.childIndex = action.payload;
        },
    },


    extraReducers: {
        [getAccountSlice.pending]: (state, action) => {
            state.loading = true;

        },

        [getAccountSlice.fulfilled]: (state, action) => {
            state.loading = false;
            state.account = action.payload;

        },
        [getAccountSlice.rejected]: (state, action) => {
            console.log('rejected')
        }
    }
})

export const { getChildIndex } = accountSlice.actions




export default accountSlice.reducer

