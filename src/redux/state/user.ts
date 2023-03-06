import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models';

export const EmptyUserState: User = {
    id: "",
    name: "",
    email: "",
    companyName: ""
};

export const userSlice = createSlice({
    name: "user",
    initialState: EmptyUserState,
    reducers: {
        createUser: (state, action) => action.payload,
        modifyUser: (state, action) => ({...state, ...action.payload}),
        resetUser:  (state, action) => EmptyUserState
    }
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;