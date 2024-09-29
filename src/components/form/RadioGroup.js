import {
  FormControl,
  FormLabel,
  RadioGroup as Group,
  Stack,
} from "@mui/material";
import Radio from "./Radio";

export default function RadioGroup({
  options,
  label,
  direction = "column",
  handleRadioChange = () => {},
}) {
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
            <Radio
              key={id}
              value={option.value}
              label={option.label}
              onClick={() => {
                handleRadioChange(options, option.name);
              }}
            />
          ))}
        </Group>
      </FormControl>
    </Stack>
  );
}
