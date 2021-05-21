import { MenuItem } from '@material-ui/core';

interface Props {
  options: Option[];
  nameKey: string;
  valueKey: string;
}

type Option = {
  [index: string]: string | number;
};

export const SelectOptions = (props: Props) => {
  const { options, nameKey, valueKey } = props;

  const menuItems = options.map((option, index) => (
    <MenuItem key={index} value={option[valueKey]}>
      {option[nameKey]}
    </MenuItem>
  ));

  return menuItems;
};
