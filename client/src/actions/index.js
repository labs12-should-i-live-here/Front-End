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
      console.log(error);
      dispatch({
        type: FETCH_PREDICTION_DATA_FAILURE,
        payload: error.response
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
