import React from "react";
const count = (state = 0, action) => {
  switch (action.type) {
    case "ADD_Counter":
      return state + 1;
    case "DECREASE_COUNTER":
      return state + 1;
    default:
      return state;
  }
};
export default count;
