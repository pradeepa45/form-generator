import * as React from "react";
import { Button, Stack } from "@mui/material";
import { uniqueId } from "lodash";

import Option from "./Option";

const AddNewOption = React.memo(({ onAdd }) => (
  <Button
    variant="contained"
    color="success"
    onClick={onAdd}
    style={{ width: "fit-content", alignSelf: "flex-end" }}
  >
    Add new option
  </Button>
));

export default function OptionGenerator({ options, setOptions }) {
  const handleAddNewOption = React.useCallback(() => {
    const newOptions = [
      ...options,
      {
        name: uniqueId(),
        label: "New Option",
        value: false,
      },
    ];
    setOptions(newOptions);
  }, [options, setOptions]);

  const handleChange = React.useCallback(
    (event, name) => {
      const updatedOptions = options.map((opt) => {
        if (opt.name === name) {
          return { ...opt, label: event.target.value };
        }
        return opt;
      });
      setOptions(updatedOptions);
    },
    [options, setOptions]
  );

  const handleDelete = React.useCallback(
    (value) => {
      const filteredOptions = options.filter((opt) => opt.value !== value);
      setOptions(filteredOptions);
    },
    [options, setOptions]
  );

  return (
    <>
      <Stack gap={2}>
        {options.map((option) => (
          <Option
            key={option.name} // Ensure this key remains stable across renders
            option={option}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        ))}
      </Stack>
      <AddNewOption onAdd={handleAddNewOption} />
    </>
  );
}
