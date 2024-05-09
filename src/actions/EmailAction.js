// export const SUBMIT_EMAIL='SUBMIT_EMAIL';
// export const submitEmail = (email) => ({
//     type: 'SUBMIT_EMAIL',
//     payload: { email },
//     });

import axios from 'axios';

export const submitEmail = (email) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5199/api/RandomPassword',{ email });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
};