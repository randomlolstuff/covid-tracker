import React from "react";
import "./casesBoxes.css";

const TrackerBoxes = React.memo(({ displayCases }) => {
  return (
    <div className="display-flex">
      <div className="confirm-box-wrapper">
        <div>Total Active</div>
        <div>{displayCases.totalConfirmed - displayCases.totalRecovered}</div>
      </div>
      <div className="confirm-box-wrapper">
        <div>Total confirmed</div>
        <div>{displayCases.totalConfirmed}</div>
      </div>
      <div className="confirm-box-wrapper">
        <div>Total Recovered</div>
        <div>{displayCases.totalRecovered}</div>
      </div>
      <div className="confirm-box-wrapper">
        <div>Total Deceased</div>
        <div>{displayCases.totalDeceased}</div>
      </div>
    </div>
  );
});

export default TrackerBoxes;
