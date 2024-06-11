// middleware/submitAttemptMiddleware.js
import axios from 'axios';
import { SUBMIT_ATTEMPT_REQUEST, submitAttemptSuccess, submitAttemptFailure } from '../../../actions/Quiz And Feedback Module/Learner/SubmitAttemptAction';

const submitAttemptMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type === SUBMIT_ATTEMPT_REQUEST) {
    const { AttemptId } = action.payload;

    axios.post(`http://localhost:5199/api/QuizEngine/attempt/submit?attemptId=${AttemptId}`)
      .then(response => dispatch(submitAttemptSuccess(response.data)))
      .catch(error => dispatch(submitAttemptFailure(error.message)));
  }

  return next(action);
};

export default submitAttemptMiddleware;
























// import {
//     SUBMIT_ATTEMPT_REQUEST,
//     submitAttemptSuccess,
//     submitAttemptFailure,
//   } from '../../actions/Quiz And Feedback Module/SubmitAttemptAction';
  
//   const submitAttemptMiddleware = (store) => (next) => async (action) => {
//     if (action.type === SUBMIT_ATTEMPT_REQUEST) {
//       const attemptId = action.payload;
//       try {
//         const response = await fetch(`http://localhost:5199/api/QuizEngine/attempt/submit?attemptId=${attemptId}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
  
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
  
//         const responseData = await response.json();
//         store.dispatch(submitAttemptSuccess(responseData));
//       } catch (error) {
//         store.dispatch(submitAttemptFailure(error.toString()));
//       }
//     }
  
//     return next(action);
//   };
  
//   export default submitAttemptMiddleware;