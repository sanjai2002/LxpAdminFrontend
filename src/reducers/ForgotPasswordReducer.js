// reducer.js

import { UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILURE } from '../actions/ForgotPasswordAction';

const initialState = {
  loading: false,
  error: null,
};

const ForgotPasswordreducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_PASSWORD_SUCCESS:
      return { ...state, loading: false };
    case UPDATE_PASSWORD_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default ForgotPasswordreducer;