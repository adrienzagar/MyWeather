//! == Import : local (actions)
import { SET_INPUT_VALUE, SAVE_REPOSITORIES, SET_ERROR } from '../actions/home'

//! == Initial state
export const initialState = {
    inputValue: '',
    repositories: [],
    loading: true,
    error : false
};

//! == Actions to modified state
const home = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.inputValue,    
            };
        case SAVE_REPOSITORIES:
            return {
                ...state,
                repositories: action.repositories
            };
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state;
    }
}


export default home;