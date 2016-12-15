/**
 * Created by jaseemabbas on 15/12/16.
 */
import {combineReducers} from 'redux';
import users from './UserReducer';

const rootReducer = combineReducers({
  users
});

export default rootReducer;
