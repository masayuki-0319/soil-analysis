import { memo, VFC } from 'react';
import { MenuItem } from '@material-ui/core';

import { Selectbox } from '../../atoms/Selectbox';
import { SelectFormControl } from '../../atoms/SelectFormControl';
import { soilTypeData } from '../../../masterData/soilTypeData';

interface Props {
  defaultValue: number;
  onChange: (props?: any) => void;
}

export const SelectSoilType: VFC<Props> = memo((props) => {
  const { defaultValue, onChange } = props;

  const options = soilTypeData.map((option, index) => (
    <MenuItem key={index} value={option.id}>
      {option.name}
    </MenuItem>
  ));

  return (
    <SelectFormControl>
      <Selectbox labelName="土壌の種類" name="soilTypeId" value={defaultValue} onChange={onChange}>
        {options}
      </Selectbox>
    </SelectFormControl>
  );
});
