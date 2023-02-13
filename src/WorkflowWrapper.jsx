import React from "react";
import Workflow from "./components/Workflow";
import { WorkflowHandlerProvider } from "./contexts/WorkflowHandlerContext";

const WorkflowWrapper = () => {
  return (
    <WorkflowHandlerProvider>
      <Workflow />
    </WorkflowHandlerProvider>
  );
};

export default WorkflowWrapper;
