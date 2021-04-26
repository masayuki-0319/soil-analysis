import { ReactNode, VFC } from 'react';
import { FormControl } from '@material-ui/core';

interface Props {
  children: ReactNode;
}

const SelectFormControl: VFC<Props> = (props) => {
  const { children } = props;

  return <FormControl variant="outlined">{children}</FormControl>;
};

export default SelectFormControl;
