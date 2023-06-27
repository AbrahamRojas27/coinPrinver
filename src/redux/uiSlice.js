import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
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
        }
    }
})

export const {setError, setLoading, setOpenModal} = uiSlice.actions

export default uiSlice.reducer