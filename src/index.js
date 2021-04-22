import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store";
import * as serviceWorker from "./serviceWorker";
import RouterContain from "./RouterContain";
import MyContext from "./components/context/MyContext"
import Bus from "./components/context/bus";

const myContext = {
  bus: new Bus(),
};

ReactDOM.render(
  <Provider store={store}>
    <MyContext.Provider value={myContext}>
      <RouterContain />
    </MyContext.Provider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
