import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUser, userLogin } from "../api"
import { setError, setErrorMsj, setLoading } from "./uiSlice"


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

export const submitLogin = createAsyncThunk(
    'user/submitLogin',
    async ({userEmail, userPassword, navigate}, {dispatch}) =>{
        dispatch(setLoading(true))
        const res =  await userLogin(userEmail, userPassword)
        if(res.data.message === 'Correcto'){
            localStorage.setItem('user', res.data.data.jwt)
            dispatch(userData())
            dispatch(setError(false))
            dispatch(setLoading(false))
            navigate('/')
        }else{
            dispatch(setError(true))
            dispatch(setLoading(false))
            dispatch(setErrorMsj(res.data.msj))
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