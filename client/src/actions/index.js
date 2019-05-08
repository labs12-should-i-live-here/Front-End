import axios from "axios";

// Todo: Displaying prediction data on the plotly.
export const FETCH_PREDICTION_DATA_START = "FETCH_PREDICTION_DATA_START";
export const FETCH_PREDICTION_DATA_SUCCESS = "FETCH_PREDICTION_DATA_SUCCESS";
export const FETCH_PREDICTION_DATA_FAILURE = "FETCH_PREDICTION_DATA_FAILURE";

export const fetchPredictionData = coordinates => dispatch => {
  dispatch({ type: FETCH_PREDICTION_DATA_START });
  axios
    .post("https://d2drg1tc2gs4lr.cloudfront.net/prediction", coordinates)
    .then(res =>
      dispatch({ type: FETCH_PREDICTION_DATA_SUCCESS, payload: res.data })
    )
    .catch(error => {
      dispatch({
        type: FETCH_PREDICTION_DATA_FAILURE,
        payload: error.request
      });
    });
};

// Todo: Displaying historical data on the plotly.
export const FETCH_HISTORICAL_DATA_START = "FETCH_HISTORICAL_DATA_START";
export const FETCH_HISTORICAL_DATA_SUCCESS = "FETCH_HISTORICAL_DATA_SUCCESS";
export const FETCH_HISTORICAL_DATA_FAILURE = "FETCH_HISTORICAL_DATA_FAILURE";

export const fetchHistoricalData = fipsCodeAndYearRange => dispatch => {
  dispatch({ type: FETCH_HISTORICAL_DATA_START });
  axios
    .post("https://d2drg1tc2gs4lr.cloudfront.net/history", fipsCodeAndYearRange)
    .then(res =>
      dispatch({
        type: FETCH_HISTORICAL_DATA_SUCCESS,
        payload: res.data
      })
    )
    .catch(error => {
      dispatch({
        type: FETCH_HISTORICAL_DATA_FAILURE,
        payload: error.response
      });
    });
};

// Get Users
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const getUsers = () => dispatch => {
  axios
    .get("https://use-my-tech-stuff.herokuapp.com/api/users")
    .then(res => dispatch({ type: GET_USERS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_USERS_FAILURE, payload: err }));
};
