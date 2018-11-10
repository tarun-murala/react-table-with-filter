import T from '../constants/ActionTypes';

function filterBySourceClassName(state, action) {
    if(action && action.type === T.FILTER_BY_SOURCE_CLASS) {
        var newState = {};
        var sourceClassName = action.payload;
        for(var testClass in state) {
            var allSourceClasses = state[testClass];
            if(allSourceClasses && allSourceClasses[action.payload]) {
                newState[testClass] = {sourceClassName: Object.assign({}, allSourceClasses[sourceClassName])};
            }
        }
        return newState;
    } else {
        return state;
    }
}