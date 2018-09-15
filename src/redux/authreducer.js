import { SET_EMAIL, SET_NAME, SET_PASSWORD } from './constants';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
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
  }
};
