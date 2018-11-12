import filterByTestByTestName from './filterByTestName';
import filterBySourceClass from './filterBySourceClass';
import {combineReducers} from 'redux';

export default combineReducers({
    testClasses: filterByTestByTestName,
    sourceClass: filterBySourceClass
});