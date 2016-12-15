/**
 * Created by jaseemabbas on 15/12/16.
 */
// Actions describe the fact that something happened, but don't specify how the application's state changes in response.
// This is the job of a reducer.
import * as types from '../actions/actionTypes';

// The reducer must be pure. Given the same arguments, it should calculate the next state and return it. No surprises.
// No side effects. No API calls. No mutations. Just a calculation.
export default function userReducer(state = [], action) {
  // We don't mutate the state. We create a copy with Object.assign()
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS :
      return action.users;
    // case 'something':
    // return [...state, Object.assign({}, action.users)];
    // We return the previous state in the default case. It's important to return the previous state
    // for any unknown action.
    default :
      return state;
  }
}
