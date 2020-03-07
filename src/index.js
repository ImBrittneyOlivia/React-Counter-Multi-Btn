import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "INCREMENTBYFIVE":
      return {
        count: state.count + 5
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "DECREMENTBYTEN":
      return {
        count: state.count - 10
      };
    case "RESET":
      return {
        count: (state.count = 0)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
