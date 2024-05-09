// import axios from 'axios';
// import { LOGIN_REQUEST,LOGIN_ERROR,LOGIN_SUCCESS } from '../actions/loginAction';

// // Action creator for login
// export const loginUser = (userData) => {
//   return (dispatch) => {
//     axios.post('http://localhost:3001/posts', userData)
//       .then(response => {
//         // Handle success
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: response.data
//         });
//       })
//       .catch(error => {
//         // Handle failure
//         dispatch({
//           type: LOGIN_ERROR,
//           payload: error.response.data
//         });
//       });
//   };
// };

export const baseUrl ="http://localhost:5199/";