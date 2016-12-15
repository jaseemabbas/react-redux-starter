/**
 * Created by jaseemabbas on 15/12/16.
 */
import * as actionTypes from './actionTypes';
import userApi from '../api/mockCourseApi';

// Actions are payloads of information that send data from your application to your store.
// They are the only source of information for the store.
// You send them to the store using store.dispatch().

export function loadUsersSuccess(users) {
  
  // Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action
  // being performed.
  return {type: actionTypes.LOAD_USERS_SUCCESS, users};
}

export function loadUsers() {

  return function (dispatch) {
    return userApi.getAllCourses()
      .then(users => {
        dispatch(loadUsersSuccess(users));
      }).catch(error => {
        throw(error);
      });
  };

}
