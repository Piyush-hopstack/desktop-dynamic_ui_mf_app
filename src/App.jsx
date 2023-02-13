import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import WorkflowWrapper from "./WorkflowWrapper";

const App = () => (
  <div className="h-screen w-screen">
    <WorkflowWrapper />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
