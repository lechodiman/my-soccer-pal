import React from "react";
import Routes from "../routes/Index";
import store from "./redux/store";
import { Provider } from "react-redux";

export default App = props => (
  <Provider store={store}>
    <>{Routes}</>;
  </Provider>
);
