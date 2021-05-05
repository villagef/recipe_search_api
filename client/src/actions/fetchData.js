import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./action";

export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("https://scandalecocktails.herokuapp.com/data/")
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
}
