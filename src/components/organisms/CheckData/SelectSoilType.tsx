import { memo, VFC } from 'react';
import SelectBox from '../../atoms/selectbox/Selectbox';
import { MenuItem } from '@material-ui/core';

interface Props {
  defaultValue: number;
  onChange: (props?: any) => void;
}

type SoilType = {
  id: number;
  name: string;
};

const SelectSoilType: VFC<Props> = memo((props) => {
  const { defaultValue, onChange } = props;

  const sampleSoilTypes: SoilType[] = [
    { id: 1, name: '露地畑' },
    { id: 2, name: '施設畑' },
    { id: 3, name: '果樹園' },
  ];

  const options = sampleSoilTypes.map((option, index) => (
    <MenuItem key={index} value={option.id}>
      {option.name}
    </MenuItem>
  ));

  return (
    <SelectBox labelName="土壌の種類" name="soilTypeId" value={defaultValue} onChange={onChange}>
      {options}
    </SelectBox>
  );
});

export default SelectSoilType;
