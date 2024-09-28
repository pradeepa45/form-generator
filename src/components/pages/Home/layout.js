import * as React from "react";
import Grid from "@mui/material/Grid2";

import Form from "./Form";
import GeneratedForm from "./GeneratedForm";

export default function GeneratorGrid() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid size={8}>
        <Form />
      </Grid>
      <Grid size={4}>
        <GeneratedForm />
      </Grid>
    </Grid>
  );
}
