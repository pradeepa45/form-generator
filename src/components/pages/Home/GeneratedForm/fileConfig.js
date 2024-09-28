import { Box } from "@mui/material";
import React from "react";

export default function FormConfigViewer({ obj }) {
  const formattedCode = JSON.stringify(obj, null, 2);
  return (
    <Box height="90vh" style={{ overflowY: "scroll" }}>
      <pre>
        <code>{formattedCode}</code>
      </pre>
    </Box>
  );
}
