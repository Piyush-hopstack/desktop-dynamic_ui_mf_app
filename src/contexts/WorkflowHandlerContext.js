import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { json } from "../utils/test";
import { testObject } from "../utils/testObject";

const WorkflowHandler = createContext({});

const WorkflowHandlerProvider = (props) => {
  const [currentNode, setCurrentNode] = useState({});
  const [validated, setValidated] = useState(false);
  const [workFlows, setWorkFlows] = useState([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);

  useEffect(() => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5048/api/getFlowModels",
      headers: {
        tenant:
          '{"id":"62cdb0ac6227b7ed224d79aa","name":"Hopstack Inc","subdomain":"hst","apiGateway":"https://api.uat.ap-southeast-1.hopstack.io","socketService":"https://api.uat.ap-southeast-1.hopstack.io","enabledSimulations":false,"active":true,"cubeService":"https://apse1-uat-analytics.hopstack.io","typeOfCustomer":"3PL","active":true}',
        "Content-Type": "application/json",
      },
    };
    try {
      axios(config).then((res) => {
        setWorkFlows(res.data.entities);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (selectedWorkflow) changeNode(selectedWorkflow.trigger.start[0].next);
  }, [selectedWorkflow]);

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
    setCurrentNode(selectedWorkflow.nodes[id]);
    setValidated(!selectedWorkflow.nodes[id].userInputs);
  }

  return (
    <WorkflowHandler.Provider
      value={{
        currentNode,
        setCurrentNode,
        validateInput,
        changeNode,
        validated,
        selectedWorkflow,
        setSelectedWorkflow,
        workFlows,
      }}
      {...props}
    />
  );
};

export { WorkflowHandlerProvider, WorkflowHandler };
