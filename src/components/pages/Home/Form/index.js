import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { Box, Stack, Typography } from "@mui/material";
import { capitalize } from "lodash";

import { FormContext } from "../../../../contexts/FormContext";
import Select from "../../../form/Select";
import FieldInfo from "./FieldInfo";

export default function Form() {
  const [current, setCurrent] = React.useState("input");

  const { setForm } = React.useContext(FormContext);

  const pushNewInput = async (input) => {
    setForm((prevFormInputs) => {
      const newInput = {
        ...input,
        order:
          prevFormInputs.length > 0
            ? prevFormInputs[prevFormInputs.length - 1].order + 1
            : 1,
      };
      return [...prevFormInputs, newInput];
    });
  };

  const handleChange = (event) => {
    setCurrent(event.target.value);
  };

  return (
    <Stack gap={2} padding={2}>
      <Box padding={2}>
        <form method="POST">
          <FormControl fullWidth>
            <Select
              label="Choose an input type"
              options={[
                { label: "Text", value: "input" },
                { label: "Select", value: "select" },
                { label: "Check box", value: "checkbox" },
                { label: "Radio", value: "radio" },
              ]}
              value={current}
              onChange={handleChange}
            />
          </FormControl>
        </form>
      </Box>
      <Stack padding={2}>
        <Typography
          variant="h4"
          style={{ textAlign: "left", marginInlineStart: "16px" }}
        >
          {capitalize(current)}
        </Typography>
        <FieldInfo current={current} onNewInput={pushNewInput} />
      </Stack>
    </Stack>
  );
}
