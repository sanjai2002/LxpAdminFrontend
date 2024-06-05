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
import ApiDashboardEnrollmentcourseBarchart from '../middleware/Admin/ApiDashboardEnrollmentcourseBarchart';
import DashboardEnrollmentcourseBarchartReducer from '../reducers/Admin/DashboardEnrollmentcourseBarchartReducer'

// import LearnerPostEnrollReducer from '../components/LearnerComponent/LearnerCourse'


import LearnerGetCourseReducer from "../reducers/LearnerReducer/LearnerGetCourseReducer";
import LearnerGetCourse from '../middleware/LearnerMiddleware/LearnerGetCourse';
import LearnerPostEnrollReducer  from "../reducers/LearnerReducer/LearnerPostEnrollReducer";
import LearnerPostEnroll from "../middleware/LearnerMiddleware/LearnerPostEnroll";
import enrollCourseApi from "../middleware/LearnerMiddleware/EnrollCourseApi";
import enrollmentReducer from "../reducers/LearnerReducer/EnrollmentReducer";
import fetchPdfReducer from '../reducers/LearnerReducer/FetchPdfReducer';


import FetchRegisterReducer from '../reducers/LearnerReducer/FetchRegisterReducer';
import { FetchRegisterApi } from '../middleware/LearnerMiddleware/FetchRegisterApi';

import GetUserProfileReducer from '../reducers/LearnerReducer/GetUserProfileReducer';
import UpdateUserProfileReducer from '../reducers/LearnerReducer/UpdateUserProfileReducer';
import fetchProfileData from '../middleware/LearnerMiddleware/GetUserProfileMiddleware';
import { updateUserData } from '../middleware/LearnerMiddleware/UpdateUserProfileMiddleware';
import {RegisterApi}   from '../middleware/LearnerMiddleware/RegisterApi';
import fetchEmailApi from '../middleware/LearnerMiddleware/FetchEmailApi';
import OTPReducer from '../reducers/LearnerReducer/OTPReducer';
import PasswordChangeReducer from '../reducers/LearnerReducer/PasswordChangeReducer';
import updatePasswordApi from '../middleware/LearnerMiddleware/PasswordChangeApi';
import VerifyEmailApi from '../middleware/LearnerMiddleware/VerifyEmailApi';
import LearnerReducer from '../reducers/LearnerReducer/Registerreducer';
import fetchEmailReducer from '../reducers/LearnerReducer/FetchEmailReducer'

import quizPassedUserReducer from '../reducers/Admin/QuizPassedUserReducer';
import ApiQuizPassedUsers from '../middleware/Admin/Reports/ApiQuizPassedUsers';

import quizFailedUserReducer from '../reducers/Admin/QuizFailedUserReducer';
import ApiQuizFailedUsers from '../middleware/Admin/Reports/ApiQuizFaliedUsers';

import EnrollCoursePassedLearnerReducer from '../reducers/Admin/EnrollCoursePassedLearnersReducer';
import EnrollCoursePassedLearner from "../middleware/Admin/enrollCoursePassedLearners";
import EnrollCourseProgressLearnerReducer from '../reducers/Admin/EnrolledCourseProgressLearnerReducer';
import EnrollCourseProgressLearner from '../middleware/Admin/enrolledCourseProgressLearners';

import EnrollCourseLearner from '../reducers/Admin/EnrollCourseLearner';
import EnrollCourseLearners from '../middleware/Admin/enrollCourseLearner';
import EnrollmentReportReducer from '../reducers/Admin/ViewEnrollmentReducer';
import ApiViewEnrollmentReport from '../middleware/Admin/apiEnrollmentReport';



// sanjai-5

import ApiDashboardTopLearners from '../middleware/Admin/ApiDashboardTopLearners';
import DashboardTopLearnersReducer from '../reducers/Admin/DashboardTopLearnersReducer';
import ApiDashboardHighestEnrolledCourse from '../middleware/Admin/ApiDashboardHighestEnrolledCourse';
import DashboardHighestEnrolledCourseReducer from '../reducers/Admin/DashboardHighestEnrolledCourseReducer';
import ApiRecentFeedbackresponse from '../middleware/Admin/ApiRecentFeedbackresponse';
import DashboardRecentFeedbackReducer from '../reducers/Admin/DashboardRecentFeedbackReducer';




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
  quizpassedusers:quizPassedUserReducer,
  quizfailedusers:quizFailedUserReducer,
  // enrolledCourses:LearnerPostEnrollReducer,
  fetchcourse: LearnerGetCourseReducer,

  enrolledlearners: EnrollCourseLearner,
  fetchenrollmentreport: EnrollmentReportReducer,
  enrolledpasseduser: EnrollCoursePassedLearnerReducer,
  enrolledprogressuser: EnrollCourseProgressLearnerReducer,
  //sanjai -5
  toplearners:DashboardTopLearnersReducer,
  highestenrolledcourse:DashboardHighestEnrolledCourseReducer,
  recentfeedbackresponse:DashboardRecentFeedbackReducer,
  enrollmentcoursebarchart:DashboardEnrollmentcourseBarchartReducer,

  //
  passwordchangereducer : PasswordChangeReducer,
  user: userReducer,
  course: courseReducer,
  allcourse: AllcourseReducer,
  deletecourse: DeletecourseReducer,
  updatecourse:courseupdateReducer,
  learner:LearnerReducer,
  verifyemail:fetchEmailReducer,
  otp:OTPReducer,
  fetchcourse: LearnerGetCourseReducer,
  enrolledCourses:LearnerPostEnrollReducer,
  fetchPdf: fetchPdfReducer,
  enroll: enrollmentReducer,
  fetchlearner: FetchRegisterReducer,
  



});

const store = createStore(
  rootReducer,
  applyMiddleware( thunk,LearnerGetCourse, apiMiddleware,ApiForgotpassword,emailMiddleware,apiviewallcourse, 
    loginUser, apiDeletecourse, UpdateCourse, apiViewAllLearners, GetProfileCard, GetProfileCourses,
     LastEnrolledCourse, EnableDisableCourse, FetchdashboardData,ApiViewlearnersReport,ApiViewCourseReport,
     ApiViewQuizReport, RegisterApi ,fetchEmailApi,VerifyEmailApi,LearnerPostEnroll,enrollCourseApi,
     FetchRegisterApi,ApiQuizPassedUsers,ApiQuizFailedUsers,EnrollCourseLearners,
      ApiViewEnrollmentReport, EnrollCoursePassedLearner, EnrollCourseProgressLearner,
      ApiDashboardTopLearners,ApiDashboardHighestEnrolledCourse,ApiRecentFeedbackresponse,ApiDashboardEnrollmentcourseBarchart)
);

export default store;