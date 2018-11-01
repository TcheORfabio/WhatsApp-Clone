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

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  errorMessage: '',
  errorMessageLogin: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;

    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case SUBMIT_USER:
      return {
        ...state,
        loading: true,
      };

    case SUBMIT_USER_SUCCESS:
      return {
        ...state,
        name: '',
        password: '',
        errorMessage: '',
        loading: false,
      };

    case SUBMIT_USER_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };

    case AUTH_USER:
      return {
        ...state,
        loading: true,
      };

    case AUTH_USER_SUCCESS:
      return {
        ...state,
        errorMessageLogin: '',
        loading: false,
      };

    case AUTH_USER_ERROR:
      return {
        ...state,
        errorMessageLogin: action.payload,
        loading: false,
      };
  }
};
