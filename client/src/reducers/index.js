import {
  LOGIN_START,
  LOGIN_SUCCESS,
  // LOGIN_FAILURE,
  // SIGN_UP_START,
  // SIGN_UP_SUCCESS,
  // SIGN_UP_FAILURE,
  FETCH_PREDICTION_DATA_START,
  FETCH_PREDICTION_DATA_SUCCESS,
  FETCH_PREDICTION_DATA_FAILURE
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
  },
  fetchingPredictionData: false,
  error: "",
  errorStatusCode: null,
  coordinatePredictions: []
};

const reducer = (state = initialState, action) => {
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
    case FETCH_PREDICTION_DATA_START:
      return {
        ...state,
        fetchingPredictionData: true
      };
    case FETCH_PREDICTION_DATA_SUCCESS:
      return {
        ...state,
        fetchingPredictionData: false,
        coordinatePredictions: action.payload
      };
    case FETCH_PREDICTION_DATA_FAILURE:
      return {
        error: action.payload.status,
        fetchingPredictionData: false,
        errorStatusCode: action.payload.status
      };
    default:
      return state;
  }
};

export default reducer;
