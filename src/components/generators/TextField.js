import * as React from "react";
import { Box, Button, Stack } from "@mui/material";

import Input from "../form/Input";
import CheckboxGroup from "../form/CheckboxGroup";
import RadioGroup from "../form/RadioGroup";
import { uniqueId } from "lodash";

export default function TextFieldGenerator({ name, onSave }) {
  const defaultFormInput = {
    id: uniqueId(),
    required: false,
    disabled: false,
    label: "",
    name,
    placeholder: "",
    numeric: false,
    text: true,
    email: false,
    phone: false,
    password: false,
    multiline: false,
    hasMinLength: false,
    hasMaxLength: false,
    minLength: 0,
    maxLength: 0,
  };
  const [inputProps, setProps] = React.useState(defaultFormInput);
  const [error, setError] = React.useState(false);

  const {
    label,
    placeholder,
    required,
    disabled,
    numeric,
    text,
    email,
    phone,
    password,
    multiline,
    // hasMinLength,
    // hasMaxLength,
    // minLength,
    // maxLength,
  } = inputProps;
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

  const handleSave = () => {
    if (label && placeholder) {
      onSave({ ...inputProps, name });
      setError();
      setProps(defaultFormInput);
    } else if (!label || !placeholder)
      setError({
        message: "This field is required",
      });
  };

  const handleRadioChange = (options, name) => {
    setProps((prevProps) => {
      const updatedProps = { ...prevProps };
      options.forEach((option) => {
        const currName = option.name;
        if (updatedProps.hasOwnProperty(currName)) {
          updatedProps[currName] = currName === name;
        }
      });
      return updatedProps;
    });
  };

  console.log(text, email, phone);
  return (
    <Box style={{ paddingBlock: "16px" }}>
      <form
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack gap={1}>
          <Input
            label={`Label of the field`}
            variant="outlined"
            name="label"
            value={label}
            onChange={handleInputChange}
            required
            error={error}
            setError={setError}
          />
          <Input
            label="Placeholder of the field"
            variant="outlined"
            name="placeholder"
            value={placeholder}
            required
            error={error}
            setError={setError}
            onChange={handleInputChange}
          />
          <CheckboxGroup
            label="Input attributes"
            options={[
              { label: "Required", value: required, name: "required" },
              { label: "Disabled", value: disabled, name: "disabled" },
              { label: "Numbers only", value: numeric, name: "numeric" },
              { label: "Password", value: password, name: "password" },
              {
                label: "Multi line input",
                value: multiline,
                name: "multiline",
              },
            ]}
            handleCheckboxChange={handleCheckboxChange}
          />
          <RadioGroup
            label="Input validation"
            options={[
              { label: "Text (default)", value: text, name: "text" },
              { label: "Email", value: email, name: "email" },
              { label: "Phone number", value: phone, name: "phone" },
            ]}
            direction="row"
            handleRadioChange={handleRadioChange}
          />
          {/*
          <Stack direction="row" flexBasis="1" justifyContent="space-between">
            <Checkbox
              label="Mininum Length"
              name="hasMinLength"
              value={hasMinLength}
              onChange={handleCheckboxChange}
            />
            <Input
              label="Minimum length"
              variant="outlined"
              name="minLength"
              value={minLength}
              onChange={handleInputChange}
              required={hasMinLength}
              disabled={!hasMinLength}
            />
          </Stack>
            <Stack direction="row" flexBasis={1} justifyContent="space-between">
            <Checkbox
              label="Maximum Length"
              name="hasMaxLength"
              value={hasMaxLength}
              onChange={handleCheckboxChange}
            />
            <Input
              label="Maximum length"
              variant="outlined"
              name="maxLength"
              value={maxLength}
              onChange={handleInputChange}
              required={hasMaxLength}
              disabled={!hasMaxLength}
            />
          </Stack>
            */}
        </Stack>
        <Button
          onClick={handleSave}
          variant="contained"
          style={{ alignSelf: "flex-end", marginTop: "8px" }}
        >
          Save this {name}
        </Button>
      </form>
    </Box>
  );
}
