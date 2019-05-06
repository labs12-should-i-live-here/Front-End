import axios from "axios";

// Todo: Displaying that data on the plotly.
export const FETCH_PREDICTION_DATA_START = "FETCH_PREDICTION_DATA_START";
export const FETCH_PREDICTION_DATA_SUCCESS = "FETCH_PREDICTION_DATA_SUCCESS";
export const FETCH_PREDICTION_DATA_FAILURE = "FETCH_PREDICTION_DATA_FAILURE";

export const fetchPredictionData = coordinates => dispatch => {
  dispatch({ type: FETCH_PREDICTION_DATA_START });
  axios
    .post(
      "http://flask-env.ye8czngppq.us-east-2.elasticbeanstalk.com/prediction",
      coordinates
    )
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
