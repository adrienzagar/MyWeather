// Action Types
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

// Action Creators
export const setInputValue = (inputValue) => ({
    type: SET_INPUT_VALUE,
    inputValue,
})