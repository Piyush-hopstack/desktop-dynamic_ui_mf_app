import React, { useContext, useEffect } from "react";
import { WorkflowHandler } from "../contexts/WorkflowHandlerContext";
import { json } from "../utils/test";
import DisplayFields from "./DisplayFields";
import EventButton from "./EventButton";
import UserInputField from "./UserInputField";

const Workflow = () => {
  const { currentNode, changeNode, validateInput, validated } =
    useContext(WorkflowHandler);

  useEffect(() => {
    const firstNode = json.trigger.start[0].next;
    changeNode(firstNode);
  }, []);

  function getComponents(type, value) {
    switch (type) {
      case "userInputs":
        return (
          <UserInputField
            key={value + Math.random() * 10}
            title={value}
            attribute={value}
            validate={validateInput}
          />
        );
      case "fields":
        return (
          <DisplayFields key={value + Math.random() * 10} fields={value} />
        );
      case "editable":
        return (
          <DisplayFields
            key={value + Math.random() * 10}
            fields={value}
            editable={true}
          />
        );
      case "onCancel":
        return (
          <EventButton
            key={value + Math.random() * 10}
            changeNode={changeNode}
            node={value}
            title={"Cancel"}
          />
        );
      case "onConfirm":
        return (
          <EventButton
            key={value + Math.random() * 10}
            validated={currentNode.skippable ?? validated}
            changeNode={changeNode}
            node={value}
            title={"Confirm"}
          />
        );
      default:
        return;
    }
  }

  function populateComponents(object, components = [], key = "") {
    if (!object) return;
    if (Array.isArray(object)) {
      components.push(getComponents(key, object));
    } else
      Object.keys(object).forEach((key) => {
        if (typeof object[key] == "object")
          populateComponents(object[key], components, key);
        else components.push(getComponents(key, object[key]));
      });
    return components;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div>{json.activity}</div>

      {currentNode["stage"]}
      {populateComponents(currentNode, [])}
    </div>
  );
};

export default Workflow;
