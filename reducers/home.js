//! == Import : local (actions)
import { SET_INPUT_VALUE, SAVE_REPOSITORIES } from '../actions/home'

//! == Initial state
export const initialState = {
    inputValue: '',
    page: 10,
    repositories: [],
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
            }
        default:
            return state;
    }
}


export default home;