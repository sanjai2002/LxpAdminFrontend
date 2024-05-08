import { LOGIN_ERROR,LOGIN_REQUEST,LOGIN_SUCCESS } from "../actions/loginAction";
const initialState = {
    user: null,
    loading:false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
        
          user: action.payload,
          loading:false,
          error: null,
        };
        case LOGIN_REQUEST:
            return {
              ...state,
            
           
              loading:true,
              error: null,
            };
      case LOGIN_ERROR:
        return {
          ...state,
          loading:false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;