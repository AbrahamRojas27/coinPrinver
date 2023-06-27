import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUser } from "../api"

const initialState = {
    user: null
}

export const userData = createAsyncThunk(
    'user/userData',
    async (_, {dispatch}) =>{
        if(localStorage.getItem('user')){
            const jwt = localStorage.getItem('user')
            const user = await getUser(jwt)
            dispatch(enterUser(user))
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        initialState
    },
    reducers: {
        enterUser: (state, action) =>{
            state.user = action.payload
        }
    }
})

export const {enterUser} = userSlice.actions

export default userSlice.reducer