import firebase from 'firebase';
import b64 from 'base-64';
import NavigationService from '../../navigationservice';

import {
  SET_EMAIL,
  SET_NAME,
  SET_PASSWORD,
  SUBMIT_USER,
  SUBMIT_USER_SUCCESS,
  SUBMIT_USER_ERROR,
  AUTH_USER,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
} from './constants';

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

const signInSuccess = dispatch => {
  dispatch({ type: SUBMIT_USER_SUCCESS });
  NavigationService.navigate('Welcome');
};

const signInError = (error, dispatch) => (
  dispatch({
    type: SUBMIT_USER_ERROR,
    payload: error.message,
  })
);

export const submitUser = ({ name, email, password }) => (
  dispatch => {
    dispatch({ type: SUBMIT_USER, payload: true });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        const emailB64 = b64.encode(email);
        firebase.database().ref(`/contatos/${emailB64}`)
          .push({ name })
          .then(() => signInSuccess(dispatch));
      })
      .catch(error => signInError(error, dispatch));
  });

export const authUserSuccess = dispatch => {
  dispatch({ type: AUTH_USER_SUCCESS });
  NavigationService.navigate('Main');
};

export const authUserError = (error, dispatch) => (
  dispatch({
    type: AUTH_USER_ERROR,
    payload: error.message,
  })
);

export const authUser = ({ email, password }) => (
  dispatch => {
    dispatch({ type: AUTH_USER, payload: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => authUserSuccess(dispatch))
      .catch(error => authUserError(error, dispatch));
  }
);
