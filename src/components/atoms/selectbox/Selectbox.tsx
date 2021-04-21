import { VFC } from "react";
import { MenuItem, OutlinedInput, Select } from "@material-ui/core";

interface Props {
  name: string;
  value: unknown;
  onChange: (props?: any) => void;
  options: OptionType[];
}

type OptionType = {
  value: string;
  name: string;
};

const Selectbox: VFC<Props> = (props) => {
  const { name, value, onChange, options } = props;

  return (
    <Select
      input={<OutlinedInput name={name} />}
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Selectbox;
