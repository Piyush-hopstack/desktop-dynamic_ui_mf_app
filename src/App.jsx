import React from "react";
import ReactDOM from "react-dom";
import { WorkflowHandlerProvider } from "./contexts/WorkflowHandlerContext";

import "./index.scss";
import WorkflowWrapper from "./WorkflowWrapper";

const App = () => (
  <div className="h-screen w-screen">
    <WorkflowHandlerProvider>
      <WorkflowWrapper />
    </WorkflowHandlerProvider>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
