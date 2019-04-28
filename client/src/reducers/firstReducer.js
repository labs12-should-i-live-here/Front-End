import { FETCH_DATE } from "../actions";

const initialState = {
  date: false
};

export const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATE:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
