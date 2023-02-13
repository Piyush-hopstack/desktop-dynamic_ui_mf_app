import React, { createContext, useState } from "react";
import { json } from "../utils/test";
import { testObject } from "../utils/testObject";

const WorkflowHandler = createContext({});

const WorkflowHandlerProvider = (props) => {
  const [currentNode, setCurrentNode] = useState({});
  const [validated, setValidated] = useState(false);

  function validateInput(input, inputKey) {
    let valueToCheck = testObject[inputKey];
    if (Array.isArray(testObject[inputKey]))
      valueToCheck = testObject[inputKey][0];
    if (input === valueToCheck) {
      alert("Tracking id valid");
      setValidated(true);
    } else {
      alert("Tracking id invalid");
      setValidated(false);
    }
  }

  function changeNode(id) {
    setCurrentNode(json.nodes[id]);
    setValidated(false)
  }

  return (
    <WorkflowHandler.Provider
      value={{
        currentNode,
        setCurrentNode,
        validateInput,
        changeNode,
        validated,
      }}
      {...props}
    />
  );
};

export { WorkflowHandlerProvider, WorkflowHandler };
