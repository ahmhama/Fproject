import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: true,
    emailUser: null,
    passwordUser: null
}

const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.emailUser = action.payload.emailUser;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.passwordUser = action.payload.passwordUser;

        },
        setSignOut: (state) => {
            state.emailUser = null;
            state.passwordUser = null;
            state.isLoggedIn = false;
        }
    }
});

export const { setSignIn, setSignOut } = authSlice.actions;



export default authSlice.reducer;
