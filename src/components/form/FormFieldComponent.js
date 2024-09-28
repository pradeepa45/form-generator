import React from "react";

import Input from "./Input";
import Select from "./Select";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";

export default function FormFieldComponent({ input }) {
  const { name, label, placeholder, options, required, disabled, multiline } =
    input;
  if (name === "input") {
    return (
      <Input
        label={label}
        name={name}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        multiline={multiline}
      />
    );
  }
  if (name === "select") {
    return (
      <Select
        label={label}
        name={name}
        required={required}
        disabled={disabled}
        options={options}
      />
    );
  }
  if (name === "checkbox") {
    return (
      <CheckboxGroup
        label={label}
        name={name}
        required={required}
        disabled={disabled}
        options={options}
        direction="column"
      />
    );
  }
  if (name === "radio") {
    return <RadioGroup label={label} options={options} />;
  }
}
