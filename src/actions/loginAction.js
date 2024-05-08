import axios from "axios";
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    };
};

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
};

export const loginError = (error) => {
    return {
        type: LOGIN_ERROR,
        payload: error
    };
};

// export const loginUser = (userData) => {
//     return async (dispatch) => {
//         dispatch({ type: 'LOGIN_REQUEST' }); // Dispatch the LOGIN_REQUEST action here
//         try {
//             // Your login logic here, for example, fetching user data from an API
//             const user = await fetchUserData(userData);
//             dispatch({ type: 'LOGIN_SUCCESS', payload: user });
//             console.log(userData)
//         } catch (error) {
//             dispatch({ type: 'LOGIN_ERROR', payload: error.message });
//         }
//     };
// };
export const loginUser = (userData) => {
    return (dispatch) => {
      axios.post('http://localhost:3002/userData', userData)
        .then(response => {
          // Handle success
          dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
          });
        })
        .catch(error => {
          // Handle failure
          dispatch({
            type: LOGIN_ERROR,
            payload: error.response.data
          });
        });
    };
  };

const fetchUserData = async (userData) => {
    // Simulated API call
    return { username: userData.username, email: userData.email };
};
