import {
  SET_EMAIL,
  SET_NAME,
  SET_PASSWORD,
  SUBMIT_USER_SUCCESS,
  SUBMIT_USER_ERROR,
} from './constants';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  errorMessage: '',
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

    case SUBMIT_USER_SUCCESS:
      return {
        ...state,
      };

    case SUBMIT_USER_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
  }
};
