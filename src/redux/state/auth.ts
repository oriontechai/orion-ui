import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uid: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        saveSession: (state, action) => action.payload,
        deleteSession: () => initialState
    }
});

export const { saveSession, deleteSession } = authSlice.actions;

export default authSlice.reducer;

