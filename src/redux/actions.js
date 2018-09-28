import firebase from 'firebase';
import { SET_EMAIL, SET_NAME, SET_PASSWORD, SUBMIT_USER_SUCCESS, SUBMIT_USER_ERROR } from './constants';

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const submitUser = ({ name, email, password }) => (
  dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => dispatch({ type: SUBMIT_USER_SUCCESS }))
      .catch(error => dispatch({ type: SUBMIT_USER_ERROR, payload: error.message }));
  });
