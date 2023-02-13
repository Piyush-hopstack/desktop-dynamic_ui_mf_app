import React from "react";
import { testObject } from "../utils/testObject";
import EditableInputField from "./EditableInputField";
const DisplayFields = ({ fields, editable = false }) => {
  return (
    <div className="border rounded-sm border-blue-500 px-4 py-3 my-1 flex flex-col">
      Sku Details
      {fields.map((field) => {
        return (
          <div key={testObject[field]+ Math.random()}>
            {testObject[field] && (
              <div  className="py-1">
                {field} : {testObject[field]}
              </div>
            )}
            {editable && (
              <div key={field} className="flex flex-col gap-2">
                <EditableInputField
                  title={field}
                  scanValue={testObject[field] ?? ""}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DisplayFields;
