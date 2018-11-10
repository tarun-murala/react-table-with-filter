import T from '../constants/ActionTypes';

function filterByTestName(state, action) {
    if(action && action.type === T.FILTER_BY_TEST_NAME) {
        var newState = {};
        newState[action.payload] = Object.assign({}, state[action.payload]);
        return newState;
    } else {
        return state;
    }
}