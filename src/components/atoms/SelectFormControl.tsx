import { ReactNode, VFC } from 'react';
import { FormControl, makeStyles } from '@material-ui/core';

interface Props {
  children: ReactNode;
}

// TODO: CSS は atoms に設定しない方が良いらしい
const useStyles = makeStyles(() => ({
  selectFormControl: {
    width: '80%',
  },
}));

const SelectFormControl: VFC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.selectFormControl}>
      {children}
    </FormControl>
  );
};

export default SelectFormControl;
