import {
    LOGIN_START,
    LOGIN_SUCCESS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE
    // LOGIN_FAILURE,
    // SIGN_UP_START,
    // SIGN_UP_SUCCESS,
    // SIGN_UP_FAILURE
  } from "../actions/index";
  
  const initialState = {
    credentials: {
      username: "",
      password: ""
    },
    signUp: {
      error: "",
      signingUp: false
    },
    logIn: {
      error: "",
      loggingIn: false
    }
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          error: "",
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          error: "",
          loggingIn: false
        };
        case GET_USERS_SUCCESS:
          return {
            ...state,
            users: action.payload,
          };
      case GET_USERS_FAILURE:
          return {
            ...state,
            error: action.payload,
};
      default:
        return state;
    }
  };
  
  