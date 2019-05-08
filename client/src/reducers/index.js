import {
  FETCH_PREDICTION_DATA_START,
  FETCH_PREDICTION_DATA_SUCCESS,
  FETCH_PREDICTION_DATA_FAILURE,
  FETCH_HISTORICAL_DATA_START,
  FETCH_HISTORICAL_DATA_SUCCESS,
  FETCH_HISTORICAL_DATA_FAILURE
} from "../actions/index";

const initialState = {
  fetchingPredictionData: false,
  fetchingHistoricalData: false,
  fipsCodePredictions: {},
  error: "",
  errorStatusCode: null,
  coordinatePredictions: {}
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
        error: action.payload,
        fetchingPredictionData: false,
        errorStatusCode: action.payload
      };
    case FETCH_HISTORICAL_DATA_START:
      return {
        ...state,
        fetchingHistoricalData: true
      };
    case FETCH_HISTORICAL_DATA_SUCCESS:
      return {
        ...state,
        fetchingHistoricalData: false,
        fipsCodePredictions: action.payload
      };
    case FETCH_HISTORICAL_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingHistoricalData: false,
        errorStatusCode: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
