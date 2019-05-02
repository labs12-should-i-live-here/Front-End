import axios from "axios";

//login actions
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://labs12.herokuapp.com/login", creds)
    .then(res => {
      console.log(res);
      // localStorage.setItem("token", res.data.payload);
      // dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err));
};

//sign up actions
export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = creds => dispatch => {
  dispatch({ type: SIGN_UP_START });
  return axios
    .post("https://labs12.herokuapp.com/register", creds)
    .then(res => {
      console.log(res);
      // localStorage.setItem("token", res.data.payload);
      // dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err.response));
};
