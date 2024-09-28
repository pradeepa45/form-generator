import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup as Group,
  Stack,
} from "@mui/material";
import Radio from "./Radio";

export default function RadioGroup({ options, label, direction = "column" }) {
  return (
    <Stack>
      <FormControl>
        <FormLabel style={{ textAlign: "left" }}>{label}</FormLabel>
        <Group
          name="radio-buttons-group"
          style={{
            display: "flex",
            flexDirection: direction,
          }}
        >
          {options.map((option, id) => (
            <Radio key={id} value={option.value} label={option.label} />
          ))}
        </Group>
      </FormControl>
    </Stack>
  );
}
