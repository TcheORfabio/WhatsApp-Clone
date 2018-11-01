import { combineReducers } from 'redux';
import authReducer from './authreducer';
import AddContactReducer from './addcontactreducer';

export default combineReducers({
  authReducer,
  AddContactReducer,
});
