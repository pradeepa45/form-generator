import React from "react";
import { Box, Stack } from "@mui/material";

import { FormContext } from "../../../../contexts/FormContext";
import FormFieldComponent from "../../../form/FormFieldComponent";

export default function FormPreview() {
  const { formInputs } = React.useContext(FormContext);

  return (
    <Box>
      <Stack gap={2}>
        <Box style={{ height: "90vh", overflow: "scroll" }}>
          {formInputs.length > 0 ? (
            <Stack gap={1}>
              {formInputs.map((input, i) => (
                <FormFieldComponent key={i} input={input} />
              ))}
            </Stack>
          ) : (
            <p style={{ textAlign: "center" }}>Add some inputs to view</p>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
