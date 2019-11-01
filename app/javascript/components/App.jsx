import React from "react";
import Routes from "../routes/Index";
import store from "../redux/store";
import { Provider } from "react-redux";

export default props => (
  <Provider store={store}>
    <div className="container">{Routes}</div>
  </Provider>
);
