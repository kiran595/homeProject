import * as AuthType from './auth.types';

const INITIAL_STATE = {
  isAuthenticated: null,
  currentUser: {},
  newUser: {},
  company: {},
  domain: '',
  error: null,
  loading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case AuthType.SIGN_IN_START:
    case AuthType.SIGN_UP_START:
      return {
        ...state,
        loading: true,
      };

    case AuthType.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: payload,
      };

    case AuthType.SIGN_IN_FAILURE:
    case AuthType.SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case AuthType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: null,
        currentUser: {},
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
