import T from '../constants/ActionTypes';

export const filterByTestCaseAction = (testClassName) => ({
        type: T.FILTER_BY_TEST_NAME,
        payload: testClassName
});

export default filterByTestCaseAction;