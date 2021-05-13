import { memo, VFC } from 'react';
import { MenuItem } from '@material-ui/core';

import { Selectbox } from '../../atoms/Selectbox';
import { SelectFormControl } from '../../atoms/SelectFormControl';
import { fieldTypeData } from '../../../masterData/fiedlTypeData';

interface Props {
  defaultValue: number;
  onChange: (props?: any) => void;
}

export const SelectFieldType: VFC<Props> = memo((props) => {
  const { defaultValue, onChange } = props;

  const options = fieldTypeData.map((option, index) => (
    <MenuItem key={index} value={option.id}>
      {option.name}
    </MenuItem>
  ));

  return (
    <SelectFormControl>
      <Selectbox labelName="ほ場の種類" name="fieldTypeId" value={defaultValue} onChange={onChange}>
        {options}
      </Selectbox>
    </SelectFormControl>
  );
});
