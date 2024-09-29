import * as React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, FormControlLabel, Stack } from "@mui/material";

import OptionGenerator from "./OptionSet";
import { uniqueId } from "lodash";

export default function SelectGenerator({ name, onSave }) {
  const defaultFormInput = {
    id: uniqueId(),
    required: false,
    disabled: false,
    label: "",
    name,
    options: [
      { name: "option1", label: "Option 1", value: false },
      { name: "option2", label: "Option 2", value: false },
    ],
  };
  const [inputProps, setProps] = React.useState(defaultFormInput);

  const { required, disabled, label, options } = inputProps;

  const [error, setError] = React.useState(false);

  const handleCheckboxChange = (event) => {
    setProps({
      ...inputProps,
      [event.target.name]: event.target.checked,
    });
  };

  const handleInputChange = (event) => {
    if (event.target.value) {
      setError();
    }
    setProps({
      ...inputProps,
      [event.target.name]: event.target.value,
    });
  };

  const handleOptionsChange = (options) => {
    if (options?.filter((option) => !option.label)) {
      setError({
        options: "All options must have a label",
      });
    }
    setProps({
      ...inputProps,
      options,
    });
  };

  const handleSave = () => {
    if (label) {
      onSave({ ...inputProps, name });
      setError(false);
      setProps(defaultFormInput);
    } else {
      setError({
        message: "Please enter a label for the select input",
      });
    }
  };

  return (
    <Box style={{ paddingBlock: "16px" }}>
      <form
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Stack gap={2}>
          <TextField
            value={label}
            label="Label of the field"
            variant="outlined"
            name="label"
            onChange={handleInputChange}
            required
            error={error?.message}
            helperText={error?.message}
          />
          <FormControlLabel
            label="Is this field required?"
            control={
              <Checkbox
                checked={required}
                onChange={handleCheckboxChange}
                name="required"
              />
            }
          />
          <FormControlLabel
            label="Is this field disabled?"
            control={
              <Checkbox
                checked={disabled}
                onChange={handleCheckboxChange}
                name="disabled"
              />
            }
          />
          <OptionGenerator
            options={options}
            setOptions={handleOptionsChange}
            error={error}
          />
        </Stack>
        <Button
          onClick={handleSave}
          variant="contained"
          style={{ width: "fit-content", alignSelf: "flex-end" }}
        >
          Add to form
        </Button>
      </form>
    </Box>
  );
}
