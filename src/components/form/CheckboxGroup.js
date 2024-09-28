import { FormLabel, Stack } from "@mui/material";

import Checkbox from "./Checkbox";

export default function CheckboxGroup({
  label,
  options,
  disabled,
  direction = "row",
  size = "small",
  handleCheckboxChange,
}) {
  return (
    <Stack>
      <FormLabel style={{ textAlign: "left", marginBlockStart: "16px" }}>
        {label}
      </FormLabel>
      <Stack direction={direction}>
        {options.map((option) => (
          <Checkbox
            disabled={disabled}
            key={option.label}
            value={option.value}
            name={option.name}
            label={option.label}
            size={size}
            onChange={handleCheckboxChange}
          />
        ))}
      </Stack>
    </Stack>
  );
}
