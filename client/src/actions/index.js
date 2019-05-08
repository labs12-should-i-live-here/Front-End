import axios from "axios";

// Todo: Displaying prediction data on the plotly.
export const FETCH_PREDICTION_DATA_START = "FETCH_PREDICTION_DATA_START";
export const FETCH_PREDICTION_DATA_SUCCESS = "FETCH_PREDICTION_DATA_SUCCESS";
export const FETCH_PREDICTION_DATA_FAILURE = "FETCH_PREDICTION_DATA_FAILURE";

export const fetchPredictionData = coordinates => dispatch => {
  dispatch({ type: FETCH_PREDICTION_DATA_START });
  const URL = "https://d2drg1tc2gs4lr.cloudfront.net/prediction";
  axios
    .post(URL, coordinates)
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
  const URL = "https://d2drg1tc2gs4lr.cloudfront.net/history";
  axios
    .post(URL, fipsCodeAndYearRange)
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

// Todo: integrate this in UI
export const ADD_PIN_START = "ADD_PIN_START";
export const ADD_PIN_SUCCESS = "ADD_PIN_SUCCESS";
export const ADD_PIN_FAILURE = "ADD_PIN_FAILURE";

export const savePin = addPinDetails => dispatch => {
  dispatch({ type: ADD_PIN_START });
  const URL = "https://labs12.herokuapp.com/pin/:id/pins"; //! need to replace ID
  axios
    .post(URL, addPinDetails)
    .then(res => console.log(res))
    .catch(error => console.log(error));
};

// Todo: integrate this in UI
export const FETCH_PINS_START = "FETCH_PINS_START";
export const FETCH_PINS_SUCCESS = "FETCH_PINS_SUCCESS";
export const FETCH_PINS_FAILURE = "FETCH_PINS_FAILURE";

export const getPins = userId => dispatch => {
  dispatch({ type: FETCH_PINS_START });
  const URL = "";
  axios
    .get(URL, userId)
    .then(res => console.log(res))
    .catch(error => console.log(error));
};

// Todo: integrate this in UI
export const FETCH_PIN_START = "FETCH_PIN_START";
export const FETCH_PIN_SUCCESS = "FETCH_PIN_SUCCESS";
export const FETCH_PIN_FAILURE = "FETCH_PIN_FAILURE";

export const getPin = getPinDetails => dispatch => {
  dispatch({ type: FETCH_PIN_START });
  const URL = "";
  axios
    .get(URL, getPinDetails)
    .then(res => console.log(res))
    .catch(error => console.log(error));
};

// Todo: integrate this in UI
export const UPDATE_PINS_START = "UPDATE_PINS_START";
export const UPDATE_PINS_SUCCESS = "UPDATE_PINS_SUCCESS";
export const UPDATE_PINS_FAILURE = "UPDATE_PINS_FAILURE";

export const updatePins = updatePinDetails => dispatch => {
  dispatch({ type: UPDATE_PINS_START });
  const URL = "";
  axios
    .put(URL, updatePinDetails)
    .then(res => console.log(res))
    .catch(error => console.log(error));
};

// Todo: integrate this in UI
export const DELETE_PIN_START = "DELETE_PIN_START";
export const DELETE_PIN_SUCCESS = "DELETE_PIN_START";
export const DELETE_PIN_FAILURE = "DELETE_PIN_FAILURE";

export const deletePin = deletePinDetails => dispatch => {
  dispatch({ type: DELETE_PIN_START });
  const URL = "https://labs12.herokuapp.com/:id/pins/:id";
  axios
    .delete(URL)
    .then(res => console.log(res))
    .catch(error => console.log(error)); //! need to replace ID
};
