import { updateObject } from 'shared/objectUtility';
import { FETCH_TEST_SUCCESS, FETCH_TEST_FAIL } from 'store/actions/actionTypes';

const initialState = {
  loading: true,
  error: null,
  test: null,
};

const setTest = (state, text) => updateObject(state, { test: text, loading: false });

const fetchTestFail = (state, error) => updateObject(state, { error, loading: false });

const reducer = (state = initialState, action) => {
  console.log('[housing] action: ', action);

  switch (action.type) {
    case FETCH_TEST_SUCCESS: return setTest(state, action.text);
    case FETCH_TEST_FAIL: return fetchTestFail(state, action.error);
    default: return state;
  }
};

export default reducer;
