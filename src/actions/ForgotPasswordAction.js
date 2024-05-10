// // actions.js
import axios from 'axios';
import { baseUrl } from '../middleware/api';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

// // Action types
// export const UPDATE_PASSWORD_REQUEST = 'UPDATE_PASSWORD_REQUEST';
// export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
// export const UPDATE_PASSWORD_FAILURE = 'UPDATE_PASSWORD_FAILURE';

// // Action creators
// export const updatePasswordRequest = (email, receivePassword, newPassword) => ({
//   type: UPDATE_PASSWORD_REQUEST,
//   payload: { email, receivePassword, newPassword },
// });

// export const updatePasswordSuccess = () => ({
//   type: UPDATE_PASSWORD_SUCCESS,
// });

// export const updatePasswordFailure = (error) => ({
//   type: UPDATE_PASSWORD_FAILURE,
//   payload: error,
// });



// actions.js
// export const updatePassword = (data) => ({
//   type: 'UPDATE_PASSWORD',
//   payload: data,
//   });



  // actions/ForgotPasswordAction.js



// Define the base URL for your API

// Action creator for updating the password
export const updatePassword = (data) => async (dispatch) => {
  try {
    // Destructure the data object to get the new password and email
    const email = data.currentTarget[0].value;
    const oldPassword = data.currentTarget[1].value;
    const newPassword = data.currentTarget[2].value;
    console.log(email);
    // const { email,oldPassword,newPassword } = data;
    // Make an Axios POST request to your API endpoint for updating the password
    const response = await axios.put(`http://localhost:5199/api/UpdatePassword`, {
      email,
      oldPassword,
      newPassword,
    });
    console.log(response.data());
    // Dispatch the UPDATE_PASSWORD action with the response data
    dispatch({
      type: UPDATE_PASSWORD,
      payload: response.data,
    });
  } catch (error) {
    // Handle errors here, such as dispatching a different action with the error message
    console.error('Error updating password:', error);
  }
  debugger
};
