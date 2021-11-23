import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRates } from "../redux/actions/rateActions";
import Main from "./Main";
import { fetchRates } from "../api/fetchRates";


const RatesList = () => {
  const dispatch = useDispatch();
  const getRates = async () => {
    const response = await fetchRates();
    dispatch(setRates(response.data));
  };
  useEffect(() => {
    getRates();
  });
  return (
    <>
      <Main />
    </>
  );
};

export default RatesList;
