import createAsyncActions from "../generalUtility/apiHandler";
import { apiResponseGenerator } from "../utils/helper";
export const getMasterData = createAsyncActions(
  "https://api.covid19india.org/v4/min/data.min.json",
  [
    "SET_MASTER_DATA_LOADING",
    "SET_MASTER_DATA_SUCESS",
    "SET_MASTER_DATA_ERROR",
  ],
  apiResponseGenerator
);
