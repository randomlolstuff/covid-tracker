import React from "react";
import "./chartRow.css";

const ChartRow = React.memo((props) => {
  return (
    <div className="class-row-wrapper">
      {props.name ? (
        <a
          target="_blank"
          className="min-width-30"
          href={`/state/${props.stateName}`}
        >
          {props.stateName + "-" + props.name}
        </a>
      ) : (
        <div className="min-width-30">{props.stateName}</div>
      )}
      <div className="min-width-20">
        {props.totalCases.confirmed ? props.totalCases.confirmed : "NA"}
      </div>
      <div className="min-width-20">
        {props.totalCases.recovered ? props.totalCases.recovered : "NA"}
      </div>
      <div className="min-width-20">
        {props.totalCases.deceased ? props.totalCases.deceased : "NA"}
      </div>
    </div>
  );
});
export default ChartRow;
