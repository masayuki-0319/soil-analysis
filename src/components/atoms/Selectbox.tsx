import { memo, VFC } from 'react';
import { OutlinedInput, Select, InputLabel } from '@material-ui/core';

interface Props {
  displayName: string;
  name: string;
  value: unknown;
  onChange: (props?: any) => void;
  children: JSX.Element[];
}

export const Selectbox: VFC<Props> = memo((props) => {
  const { displayName, name, value, onChange, children } = props;

  return (
    <>
      <InputLabel id="label-id">{displayName}</InputLabel>
      <Select labelId="label-id" input={<OutlinedInput name={name} />} value={value} onChange={onChange}>
        {children}
      </Select>
    </>
  );
});
