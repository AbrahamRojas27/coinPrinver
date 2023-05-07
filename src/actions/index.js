import { SET_ERROR, SET_LOADING, SET_NEWS, SET_OPEN_MODAL, SET_USER } from "./types";

export const setNews = (payload) =>({
    type: SET_NEWS,
    payload,
})

export const setLoading = (payload) =>({
    type: SET_LOADING,
    payload
})

export const setUser = (payload) =>({
    type: SET_USER,
    payload
})

export const setError = (payload) =>({
    type: SET_ERROR,
    payload
})

export const setOpenModal = (payload) => ({
    type: SET_OPEN_MODAL,
    payload
})