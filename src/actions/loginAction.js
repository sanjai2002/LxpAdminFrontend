// import axios from "axios";
// import Swal from "sweetalert2";
// import { baseUrl } from "../middleware/api";
// export const LOGIN_REQUEST = 'LOGIN_REQUEST';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_ERROR = 'LOGIN_ERROR';
// export const loginRequest = () => {
//     return {
//         type: LOGIN_REQUEST
//     };
// };

// export const loginSuccess = (user) => {
//     return {
//         type: LOGIN_SUCCESS,
//         payload: user
//     };
// };
// export const loginError = (error) => {
//     return {
//         type: LOGIN_ERROR,
//         payload: error
//     };
// };



// export const loginUser = (userData) => {
//     return (dispatch) => {
//       axios.post(`${baseUrl}api/Login`, userData)
//         .then(response => {
//            console.log(response.data);          
//            if(response.data.email===true&&response.data.password===false) {
//             const Toast = Swal.mixin({
//                 toast: true,
//                 position: "top-end",
//                 showConfirmButton: false,
//                 timer: 1000,
//                 timerProgressBar: true,
//                 didOpen: (toast) => {
//                   toast.onmouseenter = Swal.stopTimer;
//                   toast.onmouseleave = Swal.resumeTimer;
//                 }
//               });
//               Toast.fire({
//                 icon: "error",
//                 title: "Invalid Password"
//               });
//           }
//           if(response.data.email==false&&response.data.password==false) {
//             const Toast = Swal.mixin({
//                 toast: true,
//                 position: "top-end",
//                 showConfirmButton: false,
//                 timer: 1000,
//                 timerProgressBar: true,
//                 didOpen: (toast) => {
//                   toast.onmouseenter = Swal.stopTimer;
//                   toast.onmouseleave = Swal.resumeTimer;
//                 }
//               });
//               Toast.fire({
//                 icon: "error",
//                 title: "Invalid Email id"
//               });
//           }
//           if(response.data.email==true&&response.data.password==true &&response.data.role=="Admin") {

//              const Toast = Swal.mixin({
//               toast: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 1000,
//               timerProgressBar: true,
//               didOpen: (toast) => {
//                 toast.onmouseenter = Swal.stopTimer;
//                 toast.onmouseleave = Swal.resumeTimer;
//               }
//             });
//             Toast.fire({
//               icon: "success",
//               title: "Signed in successfully"
//             });
//              }
//           // Handle success
//           dispatch({
//             type: LOGIN_SUCCESS,
//             payload: response.data
//           });
//         })
//         .catch(error => {
//           // Handle failure
//           dispatch({
//             type: LOGIN_ERROR,
//             payload: error.response.data
//           });
//         });
//     };
//   };

// const fetchUserData = async (userData) => {
//     // Simulated API call
//     return { username: userData.username, email: userData.email };
// };




export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS_ADMIN = 'LOGIN_SUCCESS_ADMIN';
export const LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER'
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginRequest = (login) =>
({
  type: LOGIN_REQUEST,
  payload: login

});

export const loginSuccessuser = (user) => ({
  type: LOGIN_SUCCESS_USER,
  payload: user
});


export const loginSuccessadmin = (user) =>
({
  type: LOGIN_SUCCESS_ADMIN,
  payload: user,

});

export const loginError = (error) =>
({
  type: LOGIN_ERROR,
  payload: error

});
