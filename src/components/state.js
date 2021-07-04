import React from "react";
import { useParams } from "react-router-dom";
import TrackerBoxes from "./casesBoxes";
import ChartRow from "./chartRow";
import "./state.css";
import Chart from "./chart";
import { useSelector } from "react-redux";

const State = React.memo(({ masterData }) => {
  const store = useSelector((state) => state);
  let recordExist = false;
  let totalConfirmed = 0;
  let totalDeceased = 0;
  let totalRecovered = 0;
  let totalCases = {};
  let { id } = useParams();
  id = id.toUpperCase();
  let selectedStateData = {};

  if (store.allStateData.masterData[id]) {
    selectedStateData = store.allStateData.masterData[id];
    totalConfirmed = selectedStateData.total.confirmed;
    totalDeceased = selectedStateData.total.deceased;
    totalRecovered = selectedStateData.total.recovered;
    totalCases = { totalConfirmed, totalDeceased, totalRecovered };

    recordExist = true;
  }

  return (
    <div>
      {recordExist ? (
        <div>
          <div className="title-text">Covid Tracker</div>
          <div className="title-text">{selectedStateData.name}</div>
          <TrackerBoxes displayCases={totalCases} />
          <Chart />
          {Object.keys(selectedStateData.districts).map((item) => {
            return (
              <ChartRow
                stateName={item}
                totalCases={selectedStateData.districts[item].total}
              />
            );
          })}
        </div>
      ) : (
        <div>url not found</div>
      )}
    </div>
  );
});
export default State;
