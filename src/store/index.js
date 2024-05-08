import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import ForgotPasswordreducer from '../reducers/ForgotPasswordReducer';
import userReducer from '../reducers/loginReducer';

// Combine the reducers
const rootReducer = combineReducers({
  forgotPassword:  ForgotPasswordreducer,
  user: userReducer,
});

// Create the Redux store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply the thunk middleware
);

export default store;
