import { memo, VFC } from 'react';
import SelectBox from '../../atoms/selectbox/Selectbox';
import { MenuItem } from '@material-ui/core';

interface Props {
  defaultValue: string;
  onChange: (props?: any) => void;
}

type FieldType = {
  id: string;
  name: string;
};

const SelectSoilType: VFC<Props> = memo((props) => {
  const { defaultValue, onChange } = props;

  const sampleFieldTypes: FieldType[] = [
    { id: '1', name: '水田' },
    { id: '2', name: '畑作' },
    { id: '3', name: '牧草地' },
  ];

  const options = sampleFieldTypes.map((option, index) => (
    <MenuItem key={index} value={option.id}>
      {option.name}
    </MenuItem>
  ));

  return (
    <SelectBox labelName="ほ場の種類" name="fieldTypeId" value={defaultValue} onChange={onChange}>
      {options}
    </SelectBox>
  );
});

export default SelectSoilType;
