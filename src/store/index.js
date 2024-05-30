import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import courseReducer from '../reducers/Admin/courseReducer';
import apiMiddleware from '../middleware/Admin/apiMiddleware';
import ForgotPasswordreducer from '../reducers/Admin/ForgotPasswordReducer';
import userReducer from '../reducers/Admin/loginReducer';
import AllcourseReducer from '../reducers/Admin/AllcourseReducer';
import apiviewallcourse from '../middleware/Admin/apiviewallcourse';
import loginUser from '../middleware/Admin/apiLogin';
import apiDeletecourse from '../middleware/Admin/apiDeletecourse';
import DeletecourseReducer from '../reducers/Admin/DeletecourseReducer';
import UpdateCourse from '../middleware/Admin/apiUpdatecourse';
import courseupdateReducer from '../reducers/Admin/Updatecourse';
import AllLearnerReducer from '../reducers/Admin/AllLearnerReducer';
import apiViewAllLearners from '../middleware/Admin/apiViewAllLearners';
import ProfileCardReducer from '../reducers/Admin/IndividualLearnerReducer';
import GetProfileCard from '../middleware/Admin/apiIndividualLearners';
import ProfileCoursesReducer from '../reducers/Admin/ProfileCoursesReducers';
import GetProfileCourses from '../middleware/Admin/apiProfileCourses';
import LastEnrolledCourseReducer from '../reducers/Admin/LastEnrolledCourseReducer';
import LastEnrolledCourse from '../middleware/Admin/apiLastEnrolledCourse';
import EnableDisableCourseReducer from '../reducers/Admin/EnableDisbaleCourseReducer';
import EnableDisableCourse from '../middleware/Admin/apiEnableDisbaleCourse';
import fetchDataReducer from '../reducers/Admin/DashboardReducer';
import FetchdashboardData from '../middleware/Admin/apiDashboard';
import emailReducer from '../reducers/Admin/EmailReducers';
import emailMiddleware from '../middleware/Admin/Emailapi';

import ApiForgotpassword from '../middleware/Admin/ApiForgotpassword';
import forgotPasswordReducer from '../reducers/Admin/ForgotPasswordReducer';

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