import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./assets/styles/globalStyles";
import Landing from "./pages/Landing";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Landing />
  </React.StrictMode>,
  document.getElementById("root")
);
