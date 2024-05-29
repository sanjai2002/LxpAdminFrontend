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
import AllLearnerReducer from '../reducers/AllLearnerReducer';
import apiViewAllLearners from '../middleware/apiViewAllLearners';
import ProfileCardReducer from '../reducers/Admin/IndividualLearnerReducer';
import GetProfileCard from '../middleware/Admin/apiIndividualLearners';
import ProfileCoursesReducer from '../reducers/Admin/ProfileCoursesReducers';
import GetProfileCourses from '../middleware/Admin/apiProfileCourses';
import LastEnrolledCourseReducer from '../reducers/Admin/LastEnrolledCourseReducer';
import LastEnrolledCourse from '../middleware/Admin/apiLastEnrolledCourse';
import EnableDisableCourseReducer from '../reducers/Admin/EnableDisbaleCourseReducer';
import EnableDisableCourse from '../middleware/Admin/apiEnableDisbaleCourse';
import fetchDataReducer from '../reducers/DashboardReducer';
import FetchdashboardData from '../middleware/apiDashboard';
import emailReducer from '../reducers/EmailReducers';
import emailMiddleware from '../middleware/Emailapi';

import ApiForgotpassword from '../middleware/Admin/ApiForgotpassword';
import forgotPasswordReducer from '../reducers/ForgotPasswordReducer';

import ApiViewlearnersReport from '../middleware/Admin/ApiViewlearnersReport';
import ViewLearnersreportsReducer from '../reducers/Admin/ViewLearnersreportsReducer';
import ApiViewCourseReport  from '../middleware/Admin/ApiViewCourseReport';
import ViewCoursereportReducers from '../reducers/Admin/ViewCoursereportReducers';
import QuizReportReducer from '../reducers/Admin/ViewQuizReportReducers';
import ApiViewQuizReport from '../middleware/Admin/ApiViewQuizReport';

const rootReducer = combineReducers({
  forgotPassword: ForgotPasswordreducer,
  user: userReducer,
  course: courseReducer,
  allcourse: AllcourseReducer,
  deletecourse: DeletecourseReducer,
  updatecourse: courseupdateReducer,
  alllearner: AllLearnerReducer,
  profilecard: ProfileCardReducer,
  profilecourses: ProfileCoursesReducer,
  enrolledcourse: LastEnrolledCourseReducer,
  enabledisablecourse: EnableDisableCourseReducer,
  fetchdashboard: fetchDataReducer,
  learnerreport:ViewLearnersreportsReducer,
  coursereport:ViewCoursereportReducers,
  quizreport:QuizReportReducer,
  email:emailReducer,

});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, apiMiddleware,ApiForgotpassword,emailMiddleware,apiviewallcourse, loginUser, apiDeletecourse, UpdateCourse, apiViewAllLearners, GetProfileCard, GetProfileCourses, LastEnrolledCourse, EnableDisableCourse, FetchdashboardData,ApiViewlearnersReport,ApiViewCourseReport,ApiViewQuizReport,)
);

export default store;