import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    oldPassword: null,
    newPassword: null,
}


const changePasswordSlice = createSlice({
    name: 'changePassword',
    initialState,
    reducers: {
        changePassword: (state, action) => {
            state.oldPassword = action.payload.oldPassword;
            state.newPassword = action.payload.newPassword;
            console.log(state);
        }
    }
});

export const { changePassword } = changePasswordSlice.actions;



export default changePasswordSlice.reducer;
