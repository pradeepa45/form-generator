import React from "react";
import { Box, Stack } from "@mui/material";

import FieldList from "../../../form/FormFieldComponent";

export default function FormPreview() {
  return (
    <Box>
      <Stack gap={2}>
        <Box style={{ height: "90vh", overflow: "scroll" }}>
          <FieldList />
        </Box>
      </Stack>
    </Box>
  );
}
