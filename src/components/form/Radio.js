import { FormControlLabel, Radio as RadioInput } from "@mui/material";

export default function Radio({ value, label, onClick }) {
  return (
    <FormControlLabel
      control={<RadioInput checked={value} label={label} onClick={onClick} />}
      label={label}
    />
  );
}
