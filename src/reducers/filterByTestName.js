import T from '../constants/actionsTypes';
import {combineReducers} from 'redux'

function filterByTestName(state, action) {
    if(action && action.type === T.FILTER_BY_TEST_NAME) {
        // do something here
    } else {
        return state;
    }
}