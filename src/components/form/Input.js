import { TextField } from "@mui/material";

export default function Input({
  label,
  variant,
  value,
  name,
  onChange,
  required,
  multiline,
  error,
  email,
  numeric,
  password,
  disabled,
  minLength,
  maxLength,
  fullWidth = true,
}) {
  return (
    <TextField
      label={label}
      variant={variant}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      error={error && value.length < maxLength && value.length > minLength}
      type={password ? "password" : "text"}
      multiline={multiline}
      size="small"
      fullWidth={fullWidth}
      rows={6}
      slotProps={
        email
          ? {
              inputProps: {
                type: "email",
              },
            }
          : numeric
          ? {
              inputProps: {
                inputMode: "numeric",
                pattern: "[0-9]*",
              },
            }
          : null
      }
    />
  );
}
