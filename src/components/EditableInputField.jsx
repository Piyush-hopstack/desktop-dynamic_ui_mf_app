import React, { useState } from "react";

const EditableInputField = ({
  title,
  scanValue = "",
}) => {
  const [value, setValue] = useState(scanValue);
  return (
    <label  className="px-2 py-1 flex justify-between items-center">
      {title} :
      <input
        className="border border-gray-600 p-1 rounded-md mx-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

export default EditableInputField;
