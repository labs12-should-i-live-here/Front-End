import {
  FETCH_PREDICTION_DATA_START,
  FETCH_PREDICTION_DATA_SUCCESS,
  FETCH_PREDICTION_DATA_FAILURE,
  FETCH_HISTORICAL_DATA_START,
  FETCH_HISTORICAL_DATA_SUCCESS,
  FETCH_HISTORICAL_DATA_FAILURE,
  ADD_PIN_START,
  ADD_PIN_SUCCESS,
  ADD_PIN_FAILURE,
  FETCH_PINS_START,
  FETCH_PINS_SUCCESS,
  FETCH_PINS_FAILURE,
  FETCH_PIN_START,
  FETCH_PIN_SUCCESS,
  FETCH_PIN_FAILURE,
  UPDATE_PINS_START,
  UPDATE_PINS_SUCCESS,
  UPDATE_PINS_FAILURE,
  DELETE_PIN_START,
  DELETE_PIN_SUCCESS,
  DELETE_PIN_FAILURE
} from "../actions/index";

const initialState = {
  fetchingPredictionData: false,
  fetchingHistoricalData: false,
  fipsCodePredictions: {},
  error: "",
  errorStatusCode: null,
  coordinatePredictions: {},
  addingPin: false,
  pins: [],
  deletingPin: false,
  addedPin: 0,
  deletedPin: 0,
  fetchingPins: false,
  fetchingPin: false,
  updatingPin: false,
  updatedPin: 0,
  pin: 0,
  userId: localStorage.getItem("userId"),
  pinAddresses: [],
  fetchingAddress: false
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
    case ADD_PIN_START:
      return {
        ...state,
        addingPin: true
      };
    case ADD_PIN_SUCCESS:
      return {
        ...state,
        addingPin: false,
        addedPin: action.payload
      };
    case ADD_PIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingPin: false,
        errorStatusCode: action.payload
      };
    case FETCH_PINS_START:
      return {
        ...state,
        fetchingPins: true
      };
    case FETCH_PINS_SUCCESS:
      return {
        ...state,
        fetchingPins: false,
        pins: action.payload
      };
    case FETCH_PINS_FAILURE:
      return {
        ...state,
        fetchingPins: false,
        error: action.payload,
        errorStatusCode: action.payload
      };
    case FETCH_PIN_START:
      return {
        ...state,
        fetchingPin: true
      };
    case FETCH_PIN_SUCCESS:
      return {
        ...state,
        fetchingPin: false,
        pin: action.payload
      };
    case FETCH_PIN_FAILURE:
      return {
        ...state,
        fetchingPin: false,
        error: action.payload,
        errorStatusCode: action.payload
      };
    case UPDATE_PINS_START:
      return {
        ...state,
        updatingPin: true
      };
    case UPDATE_PINS_SUCCESS:
      return {
        ...state,
        updatingPin: false,
        updatedPin: action.payload
      };
    case UPDATE_PINS_FAILURE:
      return {
        ...state,
        updatingPin: false,
        error: action.payload,
        errorStatusCode: action.payload
      };
    case DELETE_PIN_START:
      return {
        ...state,
        deletingPin: true
      };
    case DELETE_PIN_SUCCESS:
      return {
        ...state,
        deletingPin: false,
        deletedPin: action.payload
      };
    case DELETE_PIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingPin: false,
        errorStatusCode: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
