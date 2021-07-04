import { useDispatch } from "react-redux";
const axios = require("axios");

const createAsyncActions = (url, actions, fn) => {
  return (dispatch, store) => {
    console.log("fun funct", url, actions, dispatch, fn);
    return apiHandler(url, actions, dispatch, fn);
  };
};

const apiHandler = (apiUrl, action, dispatch, fn) => {
  //const dispatch = useDispatch();
  console.log("before loading");
  dispatch({ type: action[0] });

  return axios
    .get(apiUrl)
    .then((response) => {
      console.log("api handler", response);
      if (fn) {
        response = fn(response);
      }
      console.log("api handler updated res", action[1], response);
      dispatch({ type: action[1], payload: response });
      return response;
    })
    .catch((error) => {
      dispatch({ type: action[2], payload: error });
    });
};

export default createAsyncActions;
