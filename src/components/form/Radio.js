import { FormControlLabel, Radio as RadioInput } from "@mui/material";

export default function Radio({ value, label }) {
  return (
    <FormControlLabel
      control={<RadioInput checked={value} label={label} />}
      label={label}
    />
  );
}
