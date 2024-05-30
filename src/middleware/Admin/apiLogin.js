import { LOGIN_REQUEST, loginSuccessadmin, loginSuccessuser, loginError } from '../../actions/Admin/loginAction';
import axios from "axios";

import { baseUrl } from "./api";


const loginUser = ({ dispatch }) => (next) => async (action) => {

  if (action.type === LOGIN_REQUEST) {
    try {
      const response = await axios.post(`${baseUrl}/api/Login`, action.payload);

      console.log('API Response:', response.data); // Log the response data 

      if (response.data.email === true && response.data.password === true && response.data.role === "Admin") {
        console.log("Admin", response.data)
        dispatch(loginSuccessadmin(response.data));
      }
      else if (response.data.email === true && response.data.password === true && response.data.role === "User") {
        console.log("user", response.data)
        dispatch(loginSuccessuser(response.data))
      }
      else {
        console.error('No data received from API');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(loginError(error.message));
    }
  }
  return next(action)
};


export default loginUser;
