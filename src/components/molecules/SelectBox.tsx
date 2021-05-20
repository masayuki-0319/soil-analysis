import { memo, VFC } from 'react';
import { MenuItem, InputLabel, Select, OutlinedInput } from '@material-ui/core';

import { SelectFormControl } from './SelectFormControl';

interface Props {
  selectOptions: SelectOptions[];
  displayName: string;
  keyName: string;
  defaultValue?: number;
  onChange: (props?: any) => void;
}

type SelectOptions = {
  id: number;
  name: string;
};

export const SelectBox: VFC<Props> = memo((props) => {
  const { selectOptions, displayName, keyName, defaultValue, onChange } = props;

  const options = selectOptions.map((option, index) => (
    <MenuItem key={index} value={option.id}>
      {option.name}
    </MenuItem>
  ));

  return (
    <SelectFormControl>
      <InputLabel id="label-id">{displayName}</InputLabel>
      <Select labelId="label-id" input={<OutlinedInput name={keyName} />} value={defaultValue} onChange={onChange}>
        {options}
      </Select>
    </SelectFormControl>
  );
});
