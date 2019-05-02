import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions/index";

const initialState = {
  countiesLayer: {},
  error: null,
  errorCode: null,
  fetchingCountiesLayer: false
};

export const layersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingCountiesLayer: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingCountiesLayer: false,
        countiesLayer: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingCountiesLayer: false,
        error: action.payload.data.message,
        errorCode: action.payload.status
      };
    default:
      return state;
  }
};
