// import axios from 'axios';
 
// const emailMiddleware = (store) => (next) => (action) => {
//     if (action.type === 'SUBMIT_EMAIL') {
//         store.dispatch({ type: 'SUBMIT_EMAIL_REQUEST' }); // Dispatch a request action (optional)
//         axios.post('http://localhost:5199/api/RandomPassword', { email: action.payload.email })
//             .then((response) => {
//                 console.log(response)
//                 store.dispatch({ type: 'SUBMIT_EMAIL_SUCCESS' }); // Dispatch a success action (optional) 
//                 debugger
//             })
//             .catch((error) => {
//                 store.dispatch({ type: 'SUBMIT_EMAIL_FAILURE', payload: { error } }); // Dispatch a failure action with error (optional)
//             });
//     } else {
//         next(action);
//     }
// };
 
// export default emailMiddleware;