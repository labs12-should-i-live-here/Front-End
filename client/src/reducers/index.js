import {
  FETCH_PREDICTION_DATA_START,
  FETCH_PREDICTION_DATA_SUCCESS,
  FETCH_PREDICTION_DATA_FAILURE
} from "../actions/index";

const initialState = {
  fetchingPredictionData: false,
  error: "",
  errorStatusCode: null,
  coordinatePredictions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        ...state,
        error: action.payload.status,
        fetchingPredictionData: false,
        errorStatusCode: action.payload.status
      };
    default:
      return state;
  }
};

export default reducer;
