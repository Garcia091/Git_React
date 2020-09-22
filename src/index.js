import React from "react";
import ReactDOM from "react-dom";

import ContainerPPI from "./container/ContainerPPI";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ContainerPPI />
  </React.StrictMode>,
  rootElement
);
