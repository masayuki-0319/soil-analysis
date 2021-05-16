import { memo, VFC } from 'react';
import { MenuItem } from '@material-ui/core';

import { Selectbox } from '../atoms/Selectbox';
import { SelectFormControl } from '../atoms/SelectFormControl';

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
      <Selectbox displayName={displayName} name={keyName} value={defaultValue} onChange={onChange}>
        {options}
      </Selectbox>
    </SelectFormControl>
  );
});
