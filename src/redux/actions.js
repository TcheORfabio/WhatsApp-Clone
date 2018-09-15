import { SET_EMAIL, SET_NAME, SET_PASSWORD } from './constants';

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
