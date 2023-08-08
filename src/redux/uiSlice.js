import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    errorMsj: '',
    openModal: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        initialState
    },
    reducers:{
        setLoading: (state, action) =>{
            state.loading = action.payload
        },

        setError: (state, action) => {
            state.error = action.payload
        },

        setOpenModal: (state, action) => {
            state.openModal = action.payload
        },
        setErrorMsj: (state, action)=>{
            state.errorMsj = action.payload
        }
    }
})

export const {setError, setLoading, setOpenModal, setErrorMsj} = uiSlice.actions

export default uiSlice.reducer