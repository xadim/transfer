import axios from "axios";

export const fetchRates = async () => {
  const { data } = await axios
    .get("http://localhost:4444/rates")
    .catch((err) => {
      console.log("Error", err);
    });

  return data;
};
