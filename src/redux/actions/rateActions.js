import { actionTypes } from "../constants/action-types";

export const setRates = (rates) => {
  return {
    type: actionTypes.SET_RATES,
    payload: rates,
  };
};

export const selectedRate = (rate) => {
  return {
    type: actionTypes.SELECTED_RATE,
    payload: rate,
  };
};