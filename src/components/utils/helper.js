import { stateAbbrevations } from "../stateAbbrevations";
export const apiResponseGenerator = (response) => {
  const responseCopy = {};
  Object.keys(response.data).map((item) => {
    item = item.toUpperCase();
    responseCopy[item] = {
      ...response.data[item],
      name: stateAbbrevations[item] || "Invalid Name",
    };
  });
  console.log("api generator res", responseCopy);
  return responseCopy;
};
