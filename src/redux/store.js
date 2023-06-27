import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import uiReducer from './uiSlice'
import newsReducer from './newsSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        ui: uiReducer,
        news: newsReducer,
    }
})

export default store