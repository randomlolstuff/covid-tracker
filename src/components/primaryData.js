import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./home";
import State from "./state";
import { stateAbbrevations } from "./stateAbbrevations";
import { useDispatch, useStore, useSelector } from "react-redux";
import fun from "./generalUtility/apiHandler";

const PrimaryData = React.memo(() => {
  const store = useSelector((state) => state);
  console.log("store use selector", store);
  const dispatch = useDispatch();
  const apiResponseGenerator = (response) => {
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
    console.log("api generator res", responseCopy);
    return responseCopy;
  };

  useEffect(() => {
    const diffMil = Date.now() - localStorage.getItem("masterDataExpiry");
    if (!localStorage.getItem("masterData") || diffMil > 24 * 60 * 60 * 1000) {
      dispatch(
        fun(
          "https://api.covid19india.org/v4/min/data.min.json",
          [
            "SET_MASTER_DATA_LOADING",
            "SET_MASTER_DATA_SUCESS",
            "SET_MASTER_DATA_ERROR",
          ],
          apiResponseGenerator
        )
      ).then((response) => {
        localStorage.setItem("masterData", JSON.stringify(response));
        localStorage.setItem("masterDataExpiry", Date.now());
      });
    } else {
      dispatch({
        type: "SET_MASTER_DATA_SUCESS",
        payload: JSON.parse(localStorage.getItem("masterData")),
      });
    }
  }, []);
  console.log("store", store);

  return (
    <div>
      <div>counter {store.count}</div>
      <button
        onClick={() => {
          dispatch({ type: "ADD_Counter" });
        }}
      >
        increase{" "}
      </button>

      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/state/:id">
            <State />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
});
export default PrimaryData;
