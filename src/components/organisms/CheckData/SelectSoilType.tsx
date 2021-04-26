import { memo, VFC } from 'react';
import SelectBox from '../../atoms/selectbox/Selectbox';
import { MenuItem } from '@material-ui/core';
import { soilTypeData } from '../../../masterData/soilTypeData';
import SelectFormControl from '../../atoms/FormControl';

interface Props {
  defaultValue: number;
  onChange: (props?: any) => void;
}

const SelectSoilType: VFC<Props> = memo((props) => {
  const { defaultValue, onChange } = props;

  const options = soilTypeData.map((option, index) => (
    <MenuItem key={index} value={option.id}>
      {option.name}
    </MenuItem>
  ));

  return (
    <SelectFormControl>
      <SelectBox labelName="土壌の種類" name="soilTypeId" value={defaultValue} onChange={onChange}>
        {options}
      </SelectBox>
    </SelectFormControl>
  );
});

export default SelectSoilType;
