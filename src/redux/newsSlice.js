import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    news: null
}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (_, {dispatch}) =>{
        dispatch(setLoading(true))
        const news = await fetchApi('https://coinpinver.com/Subastaexchange/api/getNoticiaNewStructure')
        dispatch(setNews(news.data))
        dispatch(setLoading(false))
    }
)

export const newsSlice = createSlice({
    name: 'news',
    initialState:{
        initialState
    },
    reducers: {
        setNews: (state, action) =>{
            state.news = action.payload
        }
    }
})

export const {setNews} = newsSlice.actions

export default newsSlice.reducer