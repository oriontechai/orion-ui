import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from './state/auth';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;