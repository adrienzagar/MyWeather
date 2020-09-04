//! == Import : local (actions)
import { SET_INPUT_VALUE } from '../actions/home'

//! == Initial state
export const initialState = {
    inputValue: ''
};

//! == Actions to modified state
const searchBar = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.inputValue,    
            };
        default:
            return state;
    }
}


export default searchBar;