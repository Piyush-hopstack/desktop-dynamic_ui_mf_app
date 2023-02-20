import React, { useContext } from "react";
import Workflow from "./components/Workflow";
import { WorkflowHandler } from "./contexts/WorkflowHandlerContext";
import WorkflowSelection from "./pages/WorkflowSelection";

const WorkflowWrapper = () => {
  const { selectedWorkflow } = useContext(WorkflowHandler);

  return <>{!selectedWorkflow ? <WorkflowSelection /> : <Workflow />}</>;
};

export default WorkflowWrapper;
