import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    UserName: null,
    firstName: null,
    lastName: null,
    gender: null,
    address: null,
    number: null,
    email: null,
    password: null,
    error: null
}


const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
        },

        setSignUp: (state, action) => {
            state.UserName = action.payload.UserName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.address = action.payload.address;
            state.number = action.payload.number;
            state.password = action.payload.password;
        },
        setGender: (state, action) => {
            state.gender = action.payload.gender;
        }

    }
});

export const { setSignUp, setGender, setError } = signupSlice.actions;



export default signupSlice.reducer;
