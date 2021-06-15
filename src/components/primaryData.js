import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useReducer } from "react";
import Home from "./home";
import State from "./state";
import { stateAbbrevations } from "./stateAbbrevations";
const axios = require("axios");
const initialState = { masterData: {}, filteredState: {} };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MASTER_DATA":
      return { ...state, masterData: action.payload };
    default:
      throw new Error();
  }
};

const PrimaryData = React.memo((props) => {
  const [reducerData, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const diffMil = Date.now() - localStorage.getItem("masterDataExpiry");
    if (!localStorage.getItem("masterData") || diffMil > 24 * 60 * 60 * 1000) {
      axios
        .get("https://api.covid19india.org/v4/min/data.min.json")
        .then((response) => {
          const responseCopy = {};
          Object.keys(response.data).map((item) => {
            item = item.toUpperCase();
            responseCopy[item] = {
              ...response.data[item],
              name: stateAbbrevations[item] || "Invalid Name",
            };

            {
            }
          });
          dispatch({ type: "SET_MASTER_DATA", payload: responseCopy });
          localStorage.setItem("masterData", JSON.stringify(responseCopy));
          localStorage.setItem("masterDataExpiry", Date.now());
        });
    } else {
      dispatch({
        type: "SET_MASTER_DATA",
        payload: JSON.parse(localStorage.getItem("masterData")),
      });
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home masterData={reducerData} />
        </Route>

        <Route path="/state/:id">
          <State masterData={reducerData} />
        </Route>
        <Route path="/">
          <Home masterData={reducerData} />
        </Route>
      </Switch>
    </Router>
  );
});
export default PrimaryData;
