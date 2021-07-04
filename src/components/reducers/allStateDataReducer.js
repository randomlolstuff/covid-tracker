import React from "react";
const initialState = {
  masterData: {},
  filteredState: {},
  loading: false,
  error: "",
};
const allStateData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MASTER_DATA_LOADING":
      return { ...state, loading: true };
    case "SET_MASTER_DATA_SUCESS":
      return {
        ...state,
        masterData: action.payload,
        loading: false,
        error: "",
      };
    case "SET_MASTER_DATA_ERROR":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
export default allStateData;
