import {combineReducers} from 'redux'

import {ADD_CONTACT, UPDATE_CONTACT} from './actions'

const addContactReducer = (state = [], action) => {
    if (action.type === ADD_CONTACT) return [...state, action.payload];
    return state;
}

const updateContactReducer = (state = {}, action) => {
    if (action.type === UPDATE_CONTACT) return [...state, action.payload];
    return state;
}

const reducer = combineReducers({
    add: addContactReducer,
    update: updateContactReducer,
})

export default reducer;