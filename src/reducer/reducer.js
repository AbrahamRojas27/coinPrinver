import { SET_ERROR, SET_LOADING, SET_NEWS, SET_OPEN_MODAL, SET_USER } from "../actions/types"

const initialState = {
    dark: false,
    user: null,
    news: [],
    loading: false,
    error: false,
    modal: false,
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_NEWS:
            return {...state, news: action.payload};

        case SET_LOADING: 
            return {...state, loading: action.payload};

        case SET_USER:
            return {...state, user: action.payload};

        case SET_ERROR:
            return {...state, error: action.payload};

        case SET_OPEN_MODAL:
            return {...state, modal: action.payload}

        default: 
            return {...state}
    }
}

export default reducer