import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import ForgotPasswordreducer from '../reducers/ForgotPasswordReducer';
import userReducer from '../reducers/loginReducer';
import emailReducer from '../reducers/EmailReducer';
import emailMiddleware from '../middleware/Emailapi';
// Combine the reducers
const rootReducer = combineReducers({
  forgotPassword:  ForgotPasswordreducer,
  user: userReducer,
  email:emailReducer,
});

// Create the Redux store
const store = createStore(
  rootReducer,
  applyMiddleware(emailMiddleware) // Apply the thunk middleware
);

export default store;
