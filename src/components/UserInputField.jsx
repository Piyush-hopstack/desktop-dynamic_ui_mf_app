import React, { useState } from "react";
import FormFactors from "./FormFactors";

const UserInputField = ({ title, scanValue = "", validate = null }) => {
  const [value, setValue] = useState(scanValue);
  return (
    <div className="my-2">
      {title == "formFactors" ? (
        <FormFactors title={title} />
      ) : (
        <label className="px-2 py-1 flex justify-between items-center">
          {title} :
          <input
            className="border border-gray-600 p-1 rounded-md mx-1"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {validate && (
            <button
              onClick={() => validate(value, title)}
              className="rounded bg-blue-600 my-2 text-white px-2 py-1">
              Submit
            </button>
          )}
        </label>
      )}
    </div>
  );
};

export default UserInputField;
