import React, { useState } from "react";
import FormFactorForm from "./FormFactorForm";

const FormFactors = () => {
  const [forms, setForms] = useState([
    {
      formFactor: "",
      expiryDate: "",
      quantity: 1,
      condition: "",
    },
  ]);
  function addForm() {
    if (forms.at(-1).formFactor != "") {
      setForms([
        ...forms,
        {
          formFactor: "",
          expiryDate: "",
          quantity: 1,
          condition: "",
        },
      ]);
    }
  }
  function removeForm(id) {
    if (forms.length > 1) setForms(forms.filter((_, index) => index != id));
  }

  function updateForms(id, fieldType, value) {
    const tempForms = [...forms];
    const form = tempForms.find((_, index) => index === id);
    form[fieldType] = value;
    setForms([...tempForms]);
  }

  return (
    <div className="flex flex-col gap-2">
      {forms.map((form, index) => (
        <FormFactorForm
          id={index}
          key={index + Math.random()}
          form={form}
          addForm={addForm}
          removeForm={removeForm}
          updateForms={updateForms}
        />
      ))}
    </div>
  );
};

export default FormFactors;
