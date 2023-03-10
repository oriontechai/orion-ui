import { createSlice } from '@reduxjs/toolkit';
  
interface User{
    uid: string
}

const initialState: User = {
    uid: ''
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        createUser: (state, action) => action.payload.uid,
        modifyUser: (state, action) => ({...state, ...action.payload}),
        resetUser:  (state, action) => initialState
    }
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;