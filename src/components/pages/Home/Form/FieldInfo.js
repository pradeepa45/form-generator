import SelectGenerator from "../../../generators/SelectField";
import TextFieldGenerator from "../../../generators/TextField";

export default function FieldInfo({ current, onNewInput }) {
  if (current === "input")
    return <TextFieldGenerator onSave={onNewInput} name="input" />;
  if (current === "select")
    return <SelectGenerator onSave={onNewInput} name="select" />;
  if (current === "checkbox")
    return <SelectGenerator onSave={onNewInput} name="checkbox" />;
  if (current === "radio")
    return <SelectGenerator onSave={onNewInput} name="radio" />;
}
