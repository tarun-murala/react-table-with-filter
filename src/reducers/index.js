import filterByTestByTestName from './filterByTestName';
import filterBySourceClass from './filterBySourceClass';
import {combineReducers} from 'redux';

export default combineReducers({
    testCases: filterByTestByTestName,
    sourceClass: filterBySourceClass
});