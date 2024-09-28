import { InputLabel, Select as Dd, Stack, MenuItem } from "@mui/material";

export default function Select({
  label,
  defaultValue,
  value,
  options,
  onChange,
}) {
  return (
    <Stack paddingY={2}>
      <InputLabel>{label}</InputLabel>
      <Dd value={value} onChange={onChange} fullWidth>
        {options.map((option, id) => (
          <MenuItem key={id} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Dd>
    </Stack>
  );
}
