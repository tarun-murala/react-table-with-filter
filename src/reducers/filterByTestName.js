import T from '../constants/ActionTypes';

const filterByTestName = (state={}, action) => {
    if(action && action.type === T.FILTER_BY_TEST_NAME) {
        var newState = {};
        newState[action.payload] = Object.assign({}, state[action.payload]);
        return newState;
    } 
    return state;
}

export default filterByTestName;