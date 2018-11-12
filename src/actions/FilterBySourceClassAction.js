import T from '../constants/ActionTypes';

export const filterBySourceClassAction = (sourceClassName) => ({
        type: T.FILTER_BY_SOURCE_CLASS,
        payload: sourceClassName
});

export default filterBySourceClassAction;