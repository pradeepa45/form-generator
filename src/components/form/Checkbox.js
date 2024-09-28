import { Checkbox as CheckboxInput, FormControlLabel } from "@mui/material";

export default function Checkbox({
  value = "false",
  size,
  onChange,
  label,
  name,
}) {
  return (
    <FormControlLabel
      label={label}
      style={{
        whiteSpace: "nowrap",
      }}
      control={
        <CheckboxInput
          checked={value}
          onChange={onChange}
          name={name}
          color="primary"
          size={size}
        />
      }
    />
  );
}
