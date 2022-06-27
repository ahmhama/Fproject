import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    emailUser: null,
    passwordUser: null,
    token: null,
    userId: null,
    error: null,
}


const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },

        setSignIn: (state, action) => {
            state.emailUser = action.payload.emailUser;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.passwordUser = action.payload.passwordUser;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
        },
        setSignOut: (state) => {
            state.emailUser = null;
            state.passwordUser = null;
            state.isLoggedIn = false;
        }
    }
});

export const { setSignIn, setSignOut ,setError} = authSlice.actions;



export default authSlice.reducer;
