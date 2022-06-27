import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getUpcomingVaccinesSlice = createAsyncThunk('upcomingVaccines/getUpcomingVaccinesSlice', async (userId, thunkAPI) => {

    const res = await axios.get(`http://10.0.2.2:5000/Home/Children/Child/${userId}`,
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

const upcomingVaccinesSlice = createSlice({
    name: 'upcomingVaccines',
    initialState: { upcomingVaccine: null, loading: false, childId: null },
    reducers: {
        setChildId: (state, action) => {
            state.childId = action.payload;
        },
    },
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

export const { setChildId } = upcomingVaccinesSlice.actions

export default upcomingVaccinesSlice.reducer

