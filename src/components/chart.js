import React from "react";
import "./chart.css";

const Chart = React.memo(({ state, handleSortName }) => {
  return (
    <div className="chart-header">
      <div className="min-width-30">{state ? "State" : "District"}</div>
      <button
        onClick={() => {
          handleSortName();
        }}
      >
        sort state
      </button>
      <div className="min-width-20">Confirmed</div>
      <div className="min-width-20">Recovered</div>
      <div className="min-width-20">Deceased</div>
    </div>
  );
});
export default Chart;
