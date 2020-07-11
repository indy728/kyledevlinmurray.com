import * as actionTypes from 'store/actions/actionTypes';
import { updateObject } from 'shared/objectUtility';
// import { authorize } from 'store/actions';

const initialState = {
  userInfo: null,
  uid: null,
  error: null,
  loading: false,
  authRedirectPath: '/',
  id: 123,
};

const authStart = (state) => updateObject(state, { error: null, loading: true });

const authFail = (state, action) => {
  const failState = updateObject(initialState, {
    error: action.error,
  });

  return updateObject(state, failState);
};

const authLogout = (state) => updateObject(state, initialState);

const setAuthRedirectPath = (state, action) => updateObject(state, {
  authRedirectPath: action.path,
});

const setUserInfo = (state, action) => {
  const updatedState = {
    uid: action.uid,
    userInfo: action.userInfo,
    error: null,
    loading: false,
  };
  return updateObject(state, updatedState);
};

const authorize = (state) => {
  console.log('[auth] state: ', state);

  return updateObject(state, { uid: 69 });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHORIZE: return authorize(state);
    // case actionTypes.AUTH_START: return authStart(state);
    // case actionTypes.AUTH_FAIL: return authFail(state, action);
    // case actionTypes.AUTH_LOGOUT: return authLogout(state);
    // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action)
    // case actionTypes.SET_USER_INFO: return setUserInfo(state, action)
    // case actionTypes.FETCH_USER_INFO_FAIL: return authFail(state, action)
    // case actionTypes.NEW_USER_FAIL: return authFail(state, action)
    default: return state;
  }
};

export default reducer;
