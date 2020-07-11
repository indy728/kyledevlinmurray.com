import { database } from 'database';
import { FETCH_TEST_SUCCESS, FETCH_TEST_FAIL } from './actionTypes';

export const fetchListings = () => {
  const testRef = database.ref().child('test');

  testRef.once('value', (snapshot) => console.log(snapshot.val()));

  return (dispatch) => {
    testRef.once('value', (snapshot) => dispatch({
      type: FETCH_TEST_SUCCESS,
      text: snapshot.val(),
    }), (errorObject) => dispatch({
      type: FETCH_TEST_FAIL,
      error: errorObject.code,
    }));
  };
};
