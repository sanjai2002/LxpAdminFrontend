
import {FORGOTPASSWORD_REQUEST,FORGOTPASSWORD_SUCCESS,FORGOTPASSWORD_ERROR} from '../actions/ForgotPasswordAction'

const initialState = {
 updatepassword:null,
 loading:false,
 issuccessforgotpassword:false,
 error:null,
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOTPASSWORD_REQUEST:
      console.log("reducers",action.payload);
      return {
        ...state,
       loading:true,
       error:null
      };
    case FORGOTPASSWORD_SUCCESS:
      return{
        ...state,
        issuccessforgotpassword:true,
        loading:false,
        forgotpassword:action.payload,
        error:null
      };

    case FORGOTPASSWORD_ERROR:
      return{
        ...state,
        loading:false,
        error:action.payload,

      };
    default:
      return state;
  }
};

export default forgotPasswordReducer;
