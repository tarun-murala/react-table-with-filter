import {createStore} from 'redux';
import initialState from './initialState.json'
import appReducers from '../reducers/'

var store = createStore(appReducers, initialState);

export default store;