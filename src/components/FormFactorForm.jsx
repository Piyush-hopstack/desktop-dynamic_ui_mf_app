import React from "react";
import DropDown from "./DropDown";

const FormFactorForm = ({ id, form, addForm, removeForm, updateForms }) => {
  function updateValue(fieldType, selectedValue) {
    updateForms(id, fieldType, selectedValue);
  }

  return (
    <div className="flex gap-2">
      <DropDown
        label={"Form Factor"}
        value={form.formFactor}
        fieldType={"formFactor"}
        values={["", "Each", "Case", "Carton", "Pallet"]}
        setValue={updateValue}
      />
      <label className="flex flex-col gap-2 justify-between items-start text-sm">
        Expiry Date
        <input
          type="date"
          onChange={(e) => updateValue("bestByDate", e.target.value)}
          placeholder="Select Expiry date"
          value={form.bestByDate}
          className="border border-gray-300 rounded-sm text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          //   min={moment().format("YYYY-MM-DD")}
        />
      </label>
      <label className="flex flex-col gap-2 justify-between items-start text-sm">
        Quantity
        <input
          type="number"
          onChange={(e) => setValue("quantity", e.target.value)}
          placeholder="Select Expiry date"
          value={form.quantity}
          className="border border-gray-300 rounded-sm text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          min={0}
        />
      </label>
      <DropDown
        label={"Condition"}
        value={form.condition}
        fieldType={"condition"}
        values={[
          "",
          "Good",
          "Used",
          "Damaged",
          "Box Damaged",
          "No Box",
          "Plain Box",
          "Wrong Item",
        ]}
        setValue={updateValue}
      />
      <div className="flex h-10 text-white mt-auto gap-2 mx-2">
        <button
          onClick={() => addForm()}
          className="rounded-sm bg-blue-500 w-10">
          +
        </button>
        <button
          onClick={() => removeForm(id)}
          className="rounded-sm bg-blue-500 py-2 w-10">
          -
        </button>
      </div>
    </div>
  );
};

export default FormFactorForm;
