// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import {thunk} from 'redux-thunk';
// import ForgotPasswordreducer from '../reducers/ForgotPasswordReducer';
// import userReducer from '../reducers/loginReducer';
// import courseReducer from '../reducers/courseReducer';


// const rootReducer = combineReducers({
// forgotPassword:  ForgotPasswordreducer,
// user: userReducer,
//   course: courseReducer,

// });

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk) 
// );

// export default store;



import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import courseReducer from '../reducers/courseReducer';
import apiMiddleware from '../middleware/apiMiddleware';
import ForgotPasswordreducer from '../reducers/ForgotPasswordReducer';
import userReducer from '../reducers/loginReducer';
import AllcourseReducer from '../reducers/AllcourseReducer';
import apiviewallcourse from '../middleware/apiviewallcourse';
import loginUser from '../middleware/Admin/apiLogin';
import apiDeletecourse from '../middleware/Admin/apiDeletecourse';
import DeletecourseReducer from '../reducers/Admin/DeletecourseReducer';
import UpdateCourse from '../middleware/Admin/apiUpdatecourse';
import courseupdateReducer from '../reducers/Admin/Updatecourse';



const rootReducer = combineReducers({
  forgotPassword: ForgotPasswordreducer,
  user: userReducer,
  course: courseReducer,
  allcourse: AllcourseReducer,
  deletecourse: DeletecourseReducer,
  updatecourse:courseupdateReducer,
});


const store = createStore(

  rootReducer,
  applyMiddleware(thunk, apiMiddleware,apiviewallcourse,loginUser,apiDeletecourse,UpdateCourse)
);

export default store;

