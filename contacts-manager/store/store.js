import { createStore } from "redux";
import {addContact} from './actions'
import reducer from "./reducers";

const store = createStore(reducer)

store.dispatch(addContact({name: 'nirav b', phone: '1234567890'}))
store.dispatch(addContact({name: 'anjali k', phone: '43563755785'}))

console.log(store.getState())

export default store;