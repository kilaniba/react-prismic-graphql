import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import PrismicApp from "./PrismicApp";

ReactDOM.render(<PrismicApp />, document.getElementById("root"));
serviceWorker.unregister();
