import { Button, Stack } from "@mui/material";
import React from "react";
import { RemoveCircle } from "@mui/icons-material";

import Input from "../form/Input";

const Option = React.memo(({ option, handleChange, handleDelete, error }) => {
  const { label, value, name } = option;

  return (
    <Stack direction="row" spacing={2} gap={1} alignItems="center">
      <Input
        variant="standard"
        name="label"
        value={label}
        fullWidth
        onChange={(event) => handleChange(event, name)}
        autoFocus
        error={error?.options}
      />
      <Button
        variant="contained"
        onClick={() => handleDelete(value)}
        size="small"
        color="error"
      >
        <RemoveCircle />
      </Button>
    </Stack>
  );
});

export default Option;
