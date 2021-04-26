import { memo, VFC } from 'react';
import SelectBox from '../../atoms/selectbox/Selectbox';
import { MenuItem } from '@material-ui/core';
import { fieldTypeData } from '../../../masterData/fiedlTypeData';
import SelectFormControl from '../../atoms/FormControl';

interface Props {
  defaultValue: number;
  onChange: (props?: any) => void;
}

const SelectSoilType: VFC<Props> = memo((props) => {
  const { defaultValue, onChange } = props;

  const options = fieldTypeData.map((option, index) => (
    <MenuItem key={index} value={option.id}>
      {option.name}
    </MenuItem>
  ));

  return (
    <SelectFormControl>
      <SelectBox labelName="ほ場の種類" name="fieldTypeId" value={defaultValue} onChange={onChange}>
        {options}
      </SelectBox>
    </SelectFormControl>
  );
});

export default SelectSoilType;
