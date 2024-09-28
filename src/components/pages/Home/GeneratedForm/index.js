import React from "react";
import { Box, Tab, Tabs } from "@mui/material";

import { FormContext } from "../../../../contexts/FormContext";
import FormPreview from "./preview";
import FormConfigViewer from "./fileConfig";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function GeneratedForm() {
  const { formInputs } = React.useContext(FormContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Preview" />
          <Tab label="Form Config" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FormPreview />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FormConfigViewer obj={formInputs} />
      </CustomTabPanel>
    </Box>
  );
}
