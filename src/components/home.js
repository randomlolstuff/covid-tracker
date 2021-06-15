import React, { useCallback, useState } from "react";
import TrackerBoxes from "./casesBoxes";
import Chart from "./chart";
import ChartRow from "./chartRow";
import { debounce } from "./debounce";
import "./home.css";

const Home = React.memo(({ masterData }) => {
  let totalConfirmed = 0;
  let totalDeceased = 0;
  let totalRecovered = 0;
  let totalCases = {};
  const [searchString, setSearchString] = useState("");

  const stateRows = useCallback(
    Object.keys(masterData.masterData).map((item) => {
      let stateTotal = masterData.masterData[item].total;
      if (stateTotal.confirmed)
        totalConfirmed = totalConfirmed + stateTotal.confirmed;
      if (stateTotal.recovered)
        totalRecovered = totalRecovered + stateTotal.recovered;
      if (stateTotal.deceased)
        totalDeceased = totalRecovered + stateTotal.deceased;
      let name = masterData.masterData[item].name.toLowerCase();

      if (name.includes(searchString.toLowerCase()))
        return (
          <ChartRow name={name} stateName={item} totalCases={stateTotal} />
        );
    })
  );
  totalCases = { totalConfirmed, totalDeceased, totalRecovered };

  const debouncesetSearchedString = debounce((searchString) => {
    setSearchString(searchString);
  }, 1000);
  const handleChange = (e) => {
    debouncesetSearchedString(e.target.value);
  };

  return (
    <div>
      <div className="title-text">Covid Tracker</div>
      <div className="title-text">India</div>
      <div className="search-wrapper">
        <label>
          {"Search State "}

          <input
            type="text"
            lab
            id="searchState"
            className="search-input"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </label>
      </div>

      <TrackerBoxes displayCases={totalCases} />

      <Chart state={true} />
      {stateRows}
    </div>
  );
});
export default Home;
