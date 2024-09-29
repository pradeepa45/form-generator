import React from "react";

import Input from "./Input";
import Select from "./Select";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";
import { FormContext } from "../../contexts/FormContext";
import { Button, IconButton, Stack } from "@mui/material";
import { Delete } from "@mui/icons-material";

function FormField({ input }) {
  const {
    name,
    label,
    placeholder,
    options,
    required,
    disabled,
    multiline,
    phone,
    numeric,
    email,
    password,
  } = input;
  if (name === "input") {
    return (
      <Input
        label={label}
        name={name}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        multiline={multiline}
        phone={phone}
        numeric={numeric}
        email={email}
        password={password}
        autoValidate
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
    return (
      <RadioGroup
        label={label}
        options={options}
        required={required}
        disabled={disabled}
      />
    );
  }
}

export default function FieldList() {
  const { formInputs, setForm } = React.useContext(FormContext);
  // const handleDelete = React.useCallback(
  //   (value) => {
  //     const filteredOptions = options.filter((opt) => opt.value !== value);
  //     setOptions(filteredOptions);
  //   },
  //   [options, setOptions]
  // );
  const handleRemoveItem = (id) => {
    setForm((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== id);
      return newItems;
    });
  };

  return (
    <Stack gap={1}>
      {formInputs.length > 0 ? (
        <form method="POST">
          {formInputs.map((input) => (
            <Stack key={input.id}>
              <FormField input={input} />
              <IconButton
                onClick={() => {
                  handleRemoveItem(input.id);
                }}
                name={input.id}
                style={{ width: "fit-content", alignSelf: "flex-end" }}
              >
                <Delete color="error" />
              </IconButton>
            </Stack>
          ))}
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </form>
      ) : (
        <p style={{ textAlign: "center" }}>Add some inputs to view</p>
      )}
    </Stack>
  );
}
