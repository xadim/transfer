import axios from "axios";

export const fetchRate = async (rate) => {
    const {data} = await axios
      .post("http://localhost:4444/rates", rate)
      .catch((err) => {
        console.log("Error", err);
      });

      return data;
}