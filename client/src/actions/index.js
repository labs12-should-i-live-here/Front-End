import axios from "axios";

export const FETCH_DATE = "FETCH_DATE";

export const fetchDate = () => dispatch => {
  dispatch({ type: FETCH_DATE });

  const url = "https://labs12.herokuapp.com/";
  return axios
    .get(url)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_DATE, payload: res.data });
    })
    .catch(error => {
      console.log(error);
    });
};
