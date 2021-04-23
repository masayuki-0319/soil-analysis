import { memo, VFC } from 'react';
import { OutlinedInput, Select, InputLabel } from '@material-ui/core';

interface Props {
  labelName: string;
  name: string;
  value: unknown;
  onChange: (props?: any) => void;
  children: JSX.Element[];
}

const Selectbox: VFC<Props> = memo((props) => {
  const { labelName, name, value, onChange, children } = props;

  return (
    <>
      <InputLabel id="label-id">{labelName}</InputLabel>
      <Select labelId="label-id" input={<OutlinedInput name={name} />} value={value} onChange={onChange}>
        {children}
      </Select>
    </>
  );
});

export default Selectbox;
