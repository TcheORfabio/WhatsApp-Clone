import b64 from 'base-64';
import _ from 'lodash';
import firebase from 'firebase';
import {
  SET_NEW_CONTACT,
  ADD_NEW_CONTACT_ERROR,
  ADD_NEW_CONTACT_SUCCESS,
} from './constants';

const INITIAL_STATE = {
  newContact: '',
  newContactError: '',
  addContactResult: false,
};

export const setNewContact = newContact => ({
  type: SET_NEW_CONTACT,
  payload: newContact,
});

export const addNewContactError = (error, dispatch) => (
  dispatch({
    type: ADD_NEW_CONTACT_ERROR,
    payload: error,
  })
);

export const addNewContactSuccess = dispatch => (
  dispatch({
    type: ADD_NEW_CONTACT_SUCCESS,
    payload: true,
  })
);

export const setIncludeNewContact = () => ({
  type: ADD_NEW_CONTACT_SUCCESS,
  payload: false,
});

export const addNewContact = email => (
  dispatch => {
    const emailB64 = b64.encode(email);
    firebase.database().ref(`/contacts/${emailB64}`)
      .once('value')
      .then(snap => {
        if (snap.val()) {
          const userData = _.first(_.values(snap.val()));
          console.log(userData);
          const { currentUser } = firebase.auth();
          const emailUserB64 = b64.encode(currentUser.email);
          firebase.database().ref(`/user_contacts/${emailUserB64}`)
            .push({ email, name: userData.name })
            .then(() => dispatch(addNewContactSuccess(dispatch)))
            .catch(error => dispatch(addNewContactError(error.message, dispatch)));
        }
      });
  });

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
    case SET_NEW_CONTACT:
      return {
        ...state,
        newContact: action.payload,
      };
    case ADD_NEW_CONTACT_ERROR:
      return {
        ...state,
        newContactError: action.payload,
        addContactResult: false,
      };
    case ADD_NEW_CONTACT_SUCCESS:
      return {
        ...state,
        newContact: '',
        addContactResult: action.payload,
      };
  }
};
