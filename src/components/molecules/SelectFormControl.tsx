import { ReactNode, VFC } from 'react';
import { FormControl, makeStyles } from '@material-ui/core';

type Props = {
  children: ReactNode;
};

// TODO: CSS は atoms に設定しない方が良いらしい
const useStyles = makeStyles(() => ({
  selectFormControl: {
    width: '80%',
  },
}));

export const SelectFormControl: VFC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.selectFormControl}>
      {children}
    </FormControl>
  );
};
