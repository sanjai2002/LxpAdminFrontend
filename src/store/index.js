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

//quizmodule
import quizIdReducer from "../reducers/Quiz And Feedback Module/Admin/FetchQuizIdReducer";

import {
  DeleteQuizQuestionsApi,
  UpdateQuizQuestionsApi,
} from "../middleware/Quiz And Feedback Module/Admin/QuestionApi";
import { CreateQuizApi } from "../middleware/Quiz And Feedback Module/Admin/CreateQuizApi";
import { FetchQuizById } from "../middleware/Quiz And Feedback Module/Admin/FetchQuizIdApi";
import fetchQuizQuestionsReducer from "../reducers/Quiz And Feedback Module/Admin/FetchQuizQuestionsReducer.js";
import { FetchQuizQuestionsApi } from "../middleware/Quiz And Feedback Module/Admin/FetchQuizQuestionsApi";
import deleteQuizQuestionsReducer from "../reducers/Quiz And Feedback Module/Admin/DeleteQuizQuestionReducer";
import updateQuizQuestionReducer from "../reducers/Quiz And Feedback Module/Admin/UpdateQuizQuestionReducer";
import createQuizReducer from "../reducers/Quiz And Feedback Module/Admin/CreateQuizReducer";
import DeleteQuizFeedbackApi from "../middleware/Quiz And Feedback Module/Admin/DeleteQuizFeedbackApi";
import UpdateQuizFeedbackApi from "../middleware/Quiz And Feedback Module/Admin/UpdateQuizFeedbackApi";
import DeleteTopicFeedbackApi from "../middleware/Quiz And Feedback Module/Admin/DeleteTopicFeedbackApi";
import UpdateTopicFeedbackApi from "../middleware/Quiz And Feedback Module/Admin/UpdateTopicFeedbackApi";
import UpdateQuizFeedbackReducer from "../reducers/Quiz And Feedback Module/Admin/UpdateQuizFeedbackReducer";
import DeleteQuizFeedbackReducer from "../reducers/Quiz And Feedback Module/Admin/DeleteQuizFeedbackReducer";
import DeleteTopicFeedbackReducer from "../reducers/Quiz And Feedback Module/Admin/DeleteTopicFeedbackReducer";
import UpdateTopicFeedbackReducer from "../reducers/Quiz And Feedback Module/Admin/UpdateTopicFeedbackReducer";
import AttemptQuizReducer from "../reducers/Quiz And Feedback Module/Learner/AttemptQuizReducer";
import QuizInstructionReducer from "../reducers/Quiz And Feedback Module/Learner/QuizInstructionReducer";
import { QuizInstructionApi } from "../middleware/Quiz And Feedback Module/Learner/QuizInstructionApi";
import LearnerAttemptQuizIdReducer from "../reducers/Quiz And Feedback Module/Learner/LearnerAttemptQuizIdReducer.js";
import LearnerAttemptQuizIdApi from "../middleware/Quiz And Feedback Module/Learner/LearnerAttemptQuizIdApi.js";
import GetLearnerIDReducer from "../reducers/Quiz And Feedback Module/Learner/GetLearnerIDReducer.js";
import GetLearnerIDApi from "../middleware/Quiz And Feedback Module/Learner/GetLearnerIDApi.js";
import reviewReducer from "../reducers/Quiz And Feedback Module/Learner/ReviewReducer";
import reviewApi from "../middleware/Quiz And Feedback Module/Learner/ReviewApi";
import { fetchQuestionsMiddleware } from "../middleware/Quiz And Feedback Module/Learner/AttemptQuizApi";
import SelectAnswerReducer from "../reducers/Quiz And Feedback Module/Learner/SelectAnswerReducer";
import submitAttemptReducer from "../reducers/Quiz And Feedback Module/Learner/SubmitAttemptReducer";
import { selectAnswerMiddleware } from "../middleware/Quiz And Feedback Module/Learner/SelectAnswerApi";
import submitAttemptMiddleware from "../middleware/Quiz And Feedback Module/Learner/SubmitAttemptMiddleware";
import LearnerScorePageReducer from "../reducers/Quiz And Feedback Module/Learner/LearnerScorePageReducer";
import LearnerScorePageApi from "../middleware/Quiz And Feedback Module/Learner/LearnerScorePageApi";
import editQuizReducer from "../reducers/Quiz And Feedback Module/Admin/EditQuizReducer";
import { PutQuizDetails } from "../middleware/Quiz And Feedback Module/Admin/EditQuizApi";



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

  //quizmodule
  quizId: quizIdReducer,
  quizQuestions: fetchQuizQuestionsReducer,
  deleteQuestion: deleteQuizQuestionsReducer,
  editQuizDetails: editQuizReducer,
  quiz: createQuizReducer,
  updatequizfeedback: UpdateQuizFeedbackReducer,
  deletequizfeedback: DeleteQuizFeedbackReducer,
  deletetopicfeedback: DeleteTopicFeedbackReducer,
  updatetopicfeedback: UpdateTopicFeedbackReducer,
  AttemptQuiz: AttemptQuizReducer,
  fetchquizinstruction: QuizInstructionReducer,
  learnerattempt: LearnerAttemptQuizIdReducer,
  fetchlearnerid: GetLearnerIDReducer,
  Review: reviewReducer,
  SelectAnswer: SelectAnswerReducer,
  SubmitAttempt: submitAttemptReducer,
  learnerscore: LearnerScorePageReducer,
  



});

const store = createStore(
  rootReducer,
  applyMiddleware( thunk,LearnerGetCourse, apiMiddleware,ApiForgotpassword,emailMiddleware,apiviewallcourse, 
    loginUser, apiDeletecourse, UpdateCourse, apiViewAllLearners, GetProfileCard, GetProfileCourses,
     LastEnrolledCourse, EnableDisableCourse, FetchdashboardData,ApiViewlearnersReport,ApiViewCourseReport,
     ApiViewQuizReport, RegisterApi ,fetchEmailApi,VerifyEmailApi,LearnerPostEnroll,enrollCourseApi,
     FetchRegisterApi,ApiQuizPassedUsers,ApiQuizFailedUsers,EnrollCourseLearners,
      ApiViewEnrollmentReport, EnrollCoursePassedLearner, EnrollCourseProgressLearner,
      ApiDashboardTopLearners,ApiDashboardHighestEnrolledCourse,ApiRecentFeedbackresponse,ApiDashboardEnrollmentcourseBarchart,
      FetchQuizById,
      FetchQuizQuestionsApi,
      DeleteQuizQuestionsApi,
      PutQuizDetails,
      CreateQuizApi,
      UpdateQuizFeedbackApi,
      DeleteTopicFeedbackApi,
      DeleteQuizFeedbackApi,
      UpdateTopicFeedbackApi,
      fetchQuestionsMiddleware,
      QuizInstructionApi,
      LearnerAttemptQuizIdApi,
      GetLearnerIDApi,
      reviewApi,
      selectAnswerMiddleware,
      submitAttemptMiddleware,
      LearnerScorePageApi,
      )
);

export default store;