import {actionTypes} from "../constants/action-types";

const initialState = {
  rates: [],
};
export const rateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_RATES:
      return { ...state, rates: payload };
    case actionTypes.SELECTED_RATE:
      return { ...state, rates: payload };
    default:
      return state;
  }
};