import axios from 'axios'; // Assuming you're using Axios for API calls\
import { FORGOT_PASSWORD_URL } from '../middleware/api';
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

 // Import the endpoint

export const forgotPassword = (email) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });

  try {
    const response = await axios.post(FORGOT_PASSWORD_URL, { email });
    dispatch({ type: FORGOT_PASSWORD_SUCCESS });
    // Optionally, navigate or display success message here
  } catch (error) {
    dispatch({ type: FORGOT_PASSWORD_FAILURE, payload: error.message });
  }
};
