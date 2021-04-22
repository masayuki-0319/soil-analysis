import { memo, VFC } from "react";
import { MenuItem, OutlinedInput, Select, InputLabel } from "@material-ui/core";

interface Props {
  labelName: string;
  name: string;
  value: unknown;
  onChange: (props?: any) => void;
  options: OptionType[];
}

type OptionType = {
  value: string;
  name: string;
};

const Selectbox: VFC<Props> = memo((props) => {
  const { labelName, name, value, onChange, options } = props;

  return (
    <>
      <InputLabel id="label-id">{labelName}</InputLabel>
      <Select
        labelId="label-id"
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
    </>
  );
});

export default Selectbox;
