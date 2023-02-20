import React, { useContext, useState } from "react";
import DropDown from "../components/DropDown";
import Modal from "../components/Modal";
import { WorkflowHandler } from "../contexts/WorkflowHandlerContext";

const WorkflowSelection = () => {
  const { selectedWorkflow, setSelectedWorkflow, workFlows } =
    useContext(WorkflowHandler);
  function updateSelectedWorkflow(_, selectedWF) {
    setSelectedWorkflow(
      workFlows.find((workflow) => workflow.name == selectedWF),
    );
  }
  return (
    <div className="h-full w-full relative">
      <div className="absolute flex flex-col px-2 py-10 w-40 h-full shadow-lg bg-white z-10 left-0 top-0">
        <Modal showModal={!selectedWorkflow} setShowModal={null}>
          {workFlows && (
            <DropDown
              label={"Select Workflow "}
              value={selectedWorkflow?.name ?? ""}
              fieldType={""}
              setValue={updateSelectedWorkflow}
              values={[" ", ...workFlows.map((wf) => wf.name)]}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default WorkflowSelection;
