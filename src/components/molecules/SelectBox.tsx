import { memo, VFC } from 'react';
import { InputLabel, Select, OutlinedInput } from '@material-ui/core';

import { SelectFormControl } from './SelectFormControl';

type Props = {
  children: JSX.Element[];
  displayName: string;
  keyName: string;
  defaultValue?: number;
  onChange: (props?: any) => void;
}

export const SelectBox: VFC<Props> = memo((props) => {
  const { children, displayName, keyName, defaultValue, onChange } = props;

  return (
    <SelectFormControl>
      <InputLabel id="label-id">{displayName}</InputLabel>
      <Select labelId="label-id" input={<OutlinedInput name={keyName} />} value={defaultValue} onChange={onChange}>
        {children}
      </Select>
    </SelectFormControl>
  );
});
