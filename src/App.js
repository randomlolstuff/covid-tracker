import PrimaryData from "./components/primaryData";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import count from "./components/reducers/countReducer";
import allStateData from "./components/reducers/allStateDataReducer";
import thunk from "redux-thunk";

const App = () => {
  const allReducers = combineReducers({
    count,
    allStateData,
  });

  const store = createStore(allReducers, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <PrimaryData />
    </Provider>
  );
};

export default App;
