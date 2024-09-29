import { TextField } from "@mui/material";

const numericPattern = /^\d+$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

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
  setError,
  phone,
  autoValidate,
  // minLength,
  // maxLength,
  fullWidth = true,
}) {
  const validateOnFocusOut = (event) => {
    let regex;
    if (numeric) regex = numericPattern;
    else if (email) regex = emailPattern;
    else if (phone) regex = phonePattern;
    if (autoValidate && value && !regex.test(event.target.value)) {
      setError({
        message:
          "Invalid input. Please enter a valid " +
          (numeric
            ? "number"
            : email
            ? "email"
            : phone
            ? "phone number"
            : "text"),
      });
    }
  };
  return (
    <TextField
      label={label}
      variant={variant}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      error={error?.message}
      type={password ? "password" : "text"}
      multiline={multiline}
      size="small"
      fullWidth={fullWidth}
      rows={6}
      helperText={error?.message}
      onBlur={validateOnFocusOut}
    />
  );
}
